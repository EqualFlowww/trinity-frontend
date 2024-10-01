// import courseMapImage from '@/assets/images/trinitycc-map-square.webp';
import background from '@/assets/svgs/trinity-background-pattern-A.svg';
import courseMapImage from '@/assets/images/trinity-course-map.webp';
import Wrapper from '@/components/UI/Wrapper';
import Image from '@/components/UI/Image';
import Block from '@/components/UI/Block';
import MapPointers from '@/components/Home/MapPointers';
import { MapState } from '@/hooks/useMap';
import { cartQuery, roundQuery } from '@/queries';
import arrayToIdObject from '@/utils/arrayToIdObject';
import CircularMapRotationSlider from '@/components/Home/CircularMapRotationSlider';
import Flex from '@/components/UI/Flex';
import MapScaleSlider from '@/components/Home/MapScaleSlider';

interface Props {
  viewRef: React.RefObject<HTMLDivElement>;
  mapRef: React.RefObject<HTMLDivElement>;
  dashboardRef: React.RefObject<HTMLDivElement>;
  mapState: MapState;
  isOpenDashboard: boolean;
  handleWheel: (event: React.WheelEvent) => void;
  handleMouseDown: (clickEvent: React.MouseEvent) => void;
  setRotation: (rotation: number) => void;
  setScale: (scale: number) => void;
  setCenter: (x: number, y: number) => void;
}

const MapMode = ({
  viewRef,
  mapRef,
  dashboardRef,
  mapState,
  isOpenDashboard,
  handleMouseDown,
  handleWheel,
  setRotation,
  setScale,
  setCenter,
}: Props) => {
  // const tmpCartSummaryDataCollection = TMP_CART_SUMMARY_DATA_COLLECTION;
  // const tmpRoundSummaryDataCollection = TMP_ROUND_SUMMARY_DATA_COLLECTION;

  const { data: cartsData } = cartQuery.useGetCarts();
  const { data: roundsData } = roundQuery.useGetRounds();

  const cartsCollection = arrayToIdObject(cartsData);
  const roundsCollection = arrayToIdObject(roundsData);

  let dashboardWidth = 0;

  if (dashboardRef.current && viewRef.current) {
    const dashboardRect = dashboardRef.current.getBoundingClientRect();
    dashboardWidth = isOpenDashboard ? dashboardRect.width : 0;
  }

  return (
    <Wrapper
      name="view"
      position="relative"
      size="sz-full"
      overflow="ovf-hidden"
      color="c-neutral-container-03"
      ref={viewRef}
      htmlAttributes={{
        style: {
          backgroundImage: `url(${background})`,
          backgroundRepeat: 'repeat',
          backgroundSize: '15rem',
        },
      }}
    >
      <Flex
        position="absolute"
        right="r-4.5"
        bottom="b-4.5"
        zIndex="z-10"
        direction="flex-col"
        gap="gap-3"
      >
        <CircularMapRotationSlider
          angle={mapState.rotation}
          setAngle={setRotation}
          setCenter={setCenter}
        />
        <MapScaleSlider scale={mapState.scale} setScale={setScale} />
      </Flex>
      <Wrapper
        name="map"
        position="absolute"
        zIndex="z-1"
        htmlAttributes={{
          style: {
            top: `50%`,
            left: `calc(50% + ${dashboardWidth / 2}px)`,
            width: `${mapState.imageSize * 3 * mapState.scale}px`,
            height: `${mapState.imageSize * 3 * mapState.scale}px`,
            transformOrigin: `calc(50% + ${mapState.center.x * mapState.scale}px) calc(50% + ${mapState.center.y * mapState.scale}px)`,
            transform: `translate(calc(-50% - ${mapState.center.x * mapState.scale}px), calc(-50% - ${mapState.center.y * mapState.scale}px)) rotate(${mapState.rotation}deg)`,
          },
        }}
        ref={mapRef}
      >
        <Block
          size="sz-1"
          position="absolute"
          top="t-50pct"
          left="l-50pct"
          zIndex="z-10"
          color="c-primary"
          transformTranslate="-trl-50pct"
        ></Block>
        <Block
          size="sz-1"
          position="absolute"
          top="t-50pct"
          left="l-50pct"
          zIndex="z-10"
          color="c-warning"
          htmlAttributes={{
            style: {
              transform: `translate(calc(-50% + ${mapState.center.x * mapState.scale}px), calc(-50% + ${mapState.center.y * mapState.scale}px)) rotate(${mapState.rotation}deg)`,
            },
          }}
        ></Block>
        <Block
          name="interaction-cover"
          size="sz-full"
          color="c-transparent"
          position="relative"
          zIndex="z-15"
          htmlAttributes={{
            onWheel: handleWheel,
            onMouseDown: handleMouseDown,
          }}
        />
        <Image
          src={courseMapImage}
          alt="course-map"
          position="absolute"
          zIndex="z-1"
          top="t-50pct"
          left="l-50pct"
          transformTranslate="-trl-50pct"
          htmlAttributes={{
            style: {
              width: `${mapState.imageSize * mapState.scale}px`,
              height: `${mapState.imageSize * mapState.scale}px`,
            },
          }}
        />
        <MapPointers
          cartCollection={cartsCollection}
          roundCollection={roundsCollection}
          mapState={mapState}
          setCenter={setCenter}
        ></MapPointers>
      </Wrapper>
    </Wrapper>
  );
};

export default MapMode;
