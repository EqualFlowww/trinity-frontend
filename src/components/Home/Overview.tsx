import classNames from 'classnames/bind';
import classes from './Overview.module.scss';
import Flex from '@/components/UI/Flex';
// import {
// TMP_CART_SUMMARY_DATA_COLLECTION,
// TMP_ROUND_SUMMARY_DATA_COLLECTION,
// } from '@/data/temp-data';
import courseMapImage from '@/assets/images/trinity-map.webp';
import { useEffect, useRef, useState } from 'react';

// interface Props {}

const Overview = () => {
  const cx = classNames.bind(classes);

  // const tmpCartSummaryDataCollection = TMP_CART_SUMMARY_DATA_COLLECTION;
  // const tmpRoundSummaryDataCollection = TMP_ROUND_SUMMARY_DATA_COLLECTION;

  const viewBoxRef = useRef(null);
  const mapRef = useRef<HTMLImageElement>(null);
  const [viewBoxSize, setViewBoxSize] = useState({
    width: 0,
    height: 0,
    heightToWidthRatio: 0,
  });
  const [naturlMapSize, setNaturalMapSize] = useState({
    width: 0,
    height: 0,
    heightToWidthRatio: 0,
    entireWidth: 0,
    entireHeight: 0,
    extraMapToMapWidthRatio: 4,
    extraMapToMapHeightRatio: 3,
  });
  const [entireMapBoxStyle, setEntireMapBoxStyle] = useState({
    width: 0,
    height: 0,
    transform: '',
  });
  const [mapScale, setMapScale] = useState(1.5);
  const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleLoadMap = () => {
      const { naturalWidth, naturalHeight } =
        mapRef.current as HTMLImageElement;
      setNaturalMapSize((prev) => ({
        ...prev,
        width: naturalWidth / prev.extraMapToMapWidthRatio,
        height: naturalHeight / prev.extraMapToMapHeightRatio,
        heightToWidthRatio:
          naturalHeight /
          prev.extraMapToMapHeightRatio /
          (naturalWidth / prev.extraMapToMapWidthRatio),
        entireWidth: naturalWidth,
        entireHeight: naturalHeight,
      }));
    };

    const handleResize: ResizeObserverCallback = (entries) => {
      for (let entry of entries) {
        setViewBoxSize({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
          heightToWidthRatio:
            entry.contentRect.height / entry.contentRect.width,
        });
      }
    };

    if (mapRef.current) {
      // 이미지가 로드된 후 원본 크기 가져오기
      if (mapRef.current.complete) {
        handleLoadMap();
      } else {
        mapRef.current.addEventListener('load', handleLoadMap);
      }
    }

    const resizeObserver = new ResizeObserver(handleResize);
    if (viewBoxRef.current) {
      resizeObserver.observe(viewBoxRef.current);
    }

    return () => {
      if (viewBoxRef.current) {
        resizeObserver.unobserve(viewBoxRef.current);
      }
      if (mapRef.current) {
        mapRef.current.removeEventListener('load', handleLoadMap);
      }
    };
  }, []);

  useEffect(() => {
    console.log('viewBoxSize', viewBoxSize);
    console.log(
      naturlMapSize.heightToWidthRatio <= viewBoxSize.heightToWidthRatio
    );
    if (naturlMapSize.heightToWidthRatio <= viewBoxSize.heightToWidthRatio) {
      // viewBox의 세로비가 map의 세로비보다 더 긴 경우
      setEntireMapBoxStyle((prev) => ({
        ...prev,
        width:
          viewBoxSize.width * naturlMapSize.extraMapToMapWidthRatio * mapScale,
        height:
          viewBoxSize.width *
          naturlMapSize.heightToWidthRatio *
          naturlMapSize.extraMapToMapHeightRatio *
          mapScale,
        // top: `calc(${50 * mapScale}%)`,
        // left: `calc(${50 * mapScale}%)`,
        top: '0%',
        left: '0%',
        // transform: `translate(calc(-50% + ${currentPosition.x}px), calc(-50% + ${currentPosition.y}px))`,
        // transform: 'translate(-50%, -50%)',
      }));
    } else {
      setEntireMapBoxStyle((prev) => ({
        // viewBox의 가로비가 map의 가로비보다 더 긴 경우
        ...prev,
        width:
          (viewBoxSize.height / naturlMapSize.heightToWidthRatio) *
          naturlMapSize.extraMapToMapWidthRatio *
          mapScale,
        height:
          viewBoxSize.height *
          naturlMapSize.extraMapToMapHeightRatio *
          mapScale,
        // top: `calc(${50 * mapScale}%)`,
        // left: `calc(${50 * mapScale}%)`,
        top: '50%',
        left: '50%',
        // transform: `translate(calc(-50% + ${currentPosition.x}px), calc(-50% + ${currentPosition.y}px))`,
        transform: 'translate(-50%, -50%)',
      }));
    }
  }, [viewBoxSize, naturlMapSize]);

  return (
    <div className={cx('overview')}>
      <div className={cx('view-box')} ref={viewBoxRef}>
        <div className={cx('entire-map-box')} style={entireMapBoxStyle}>
          <img
            className={cx('entire-map')}
            src={courseMapImage}
            alt="course-map"
            ref={mapRef}
          />
        </div>
      </div>
    </div>
  );
};

export default Overview;
