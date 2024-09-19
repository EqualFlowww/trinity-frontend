import { useRef, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import classes from './MapImage.module.scss';
import courseMapImage from '@/assets/images/trinitycc-map-square.webp';

interface ViewBoxSize {
  width: number;
  height: number;
  heightToWidthRatio: number;
}

interface NaturalMapSize {
  width: number;
  height: number;
  heightToWidthRatio: number;
  entireWidth: number;
  entireHeight: number;
  extraMapToMapWidthRatio: number;
  extraMapToMapHeightRatio: number;
}

interface MapBoxStyle {
  width: number;
  height: number;
  top: string;
  left: string;
}

interface Props {
  currentPosition: { x: number; y: number };
  setCurrentPosition: (position: { x: number; y: number }) => void;
  viewBoxSize: ViewBoxSize | undefined;
  naturalMapSize: NaturalMapSize | undefined;
  mapBoxStyle: MapBoxStyle | undefined;
  setMapBoxStyle: (style: MapBoxStyle | undefined) => void;
}

const MapImage = ({
  currentPosition,
  setCurrentPosition,
  viewBoxSize,
  naturalMapSize,
  mapBoxStyle,
  setMapBoxStyle,
}: Props) => {
  const mapRef = useRef<HTMLImageElement>(null);
  const [mapScale, setMapScale] = useState(1);

  const handleWheel = (event: React.WheelEvent) => {
    if (!mapRef.current || !mapBoxStyle || !naturalMapSize || !viewBoxSize)
      return;

    // 새 mapScale을 계산하고 업데이트
    const newScale = Math.min(Math.max(1, mapScale + event.deltaY * -0.001), 2);
    setMapScale(newScale);
  };

  const handleMouseDown = (clickEvent: React.MouseEvent) => {
    if (!mapRef.current || !mapBoxStyle || !naturalMapSize || !viewBoxSize)
      return;

    const startX = clickEvent.screenX;
    const startY = clickEvent.screenY;

    const initialPosition = { ...currentPosition };
    const initialMapScale = mapScale; // mapScale을 바로 캐싱

    const mouseMoveHandler = (moveEvent: MouseEvent) => {
      const deltaX = moveEvent.screenX - startX;
      const deltaY = moveEvent.screenY - startY;

      // mapBoxStyle.width가 0이 아닌지 확인하고 연산
      const mapBoxWidth = mapBoxStyle.width || 1;
      const mapBoxHeight = mapBoxStyle.height || 1;

      const limitx =
        ((mapBoxWidth / naturalMapSize.extraMapToMapWidthRatio -
          viewBoxSize.width) /
          2 /
          mapBoxWidth) *
        100;
      const limity =
        ((mapBoxHeight / naturalMapSize.extraMapToMapHeightRatio -
          viewBoxSize.height) /
          2 /
          mapBoxHeight) *
        100;

      setCurrentPosition({
        x:
          limitx <= 0
            ? initialPosition.x
            : Math.max(
                Math.min(
                  initialPosition.x +
                    (deltaX / (initialMapScale * 5) / 0.5 / mapBoxWidth) * 100,
                  limitx
                ),
                limitx * -1
              ),
        y:
          limity <= 0
            ? initialPosition.y
            : Math.max(
                Math.min(
                  initialPosition.y +
                    (deltaY / (initialMapScale * 5) / 0.5 / mapBoxHeight) * 100,
                  limity
                ),
                limity * -1
              ),
      });
    };

    const mouseUpHandler = () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler, { once: true });
  };

  useEffect(() => {
    if (!mapRef.current || !naturalMapSize || !viewBoxSize) return;

    // mapBoxStyle을 업데이트
    const newMapBoxStyle = {
      width: naturalMapSize.width * mapScale,
      height: naturalMapSize.height * mapScale,
      top: '50%',
      left: '50%',
    };
    setMapBoxStyle(newMapBoxStyle);
  }, [viewBoxSize, naturalMapSize, mapScale, setMapBoxStyle]);

  return (
    <div
      className={classNames.bind(classes)('map-box')}
      onWheel={handleWheel}
      onMouseDown={handleMouseDown}
      style={{
        width: `${mapBoxStyle?.width}px`,
        height: `${mapBoxStyle?.height}px`,
        transform: `translate(calc(-50% + ${currentPosition.x}%), calc(-50% + ${currentPosition.y}%))`,
      }}
    >
      <img
        src={courseMapImage}
        alt="course-map"
        ref={mapRef}
        className={classNames.bind(classes)('map-image')}
      />
    </div>
  );
};

export default MapImage;
