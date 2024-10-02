import Dashboard from '@/components/Home/Dashboard/Dashboard';
import { ActionFunctionArgs, LoaderFunctionArgs } from 'react-router-dom';
import waitForLogin from '@/utils/waitForLogin';
import Wrapper from '@/components/UI/Wrapper';
import { useRef, useState } from 'react';
import { cartQuery, roundQuery } from '@/queries';
import useMap from '@/hooks/useMap';
import MapMode from '@/components/Home/MapMode';
import TrackMode from '@/components/Home/TrackMode';
import ModeSelection from '@/components/Home/ModeSelection';

type Mode = 'map' | 'track';

const Home = () => {
  const [dashboardState, setDashboardState] = useState({
    isOn: false,
  });

  const viewRef = useRef<HTMLDivElement>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const {
    mapState,
    handleMouseDown,
    handleWheel,
    moveMap,
    setRotation,
    setScale,
    setCenter,
    resizeMapToView,
  } = useMap(viewRef, mapRef);
  const [trackState, setTrackState] = useState({
    scale: 1,
    size: 0,
  });
  const [mode, setMode] = useState<Mode>('map');

  return (
    <Wrapper
      name="main"
      size="sz-full"
      position="relative"
      overflow="ovf-hidden"
    >
      <Dashboard
        isOn={dashboardState.isOn}
        toggleFeature={() => {
          if (!dashboardState.isOn && dashboardRef.current) {
            moveMap(
              -dashboardRef.current?.getBoundingClientRect().width / 2,
              0
            );
          } else if (dashboardRef.current && dashboardState.isOn) {
            moveMap(dashboardRef.current?.getBoundingClientRect().width / 2, 0);
          }
          setDashboardState((prev) => ({ ...prev, isOn: !prev.isOn }));
        }}
        dashboardRef={dashboardRef}
      />
      <ModeSelection
        mode={mode}
        onClickMapMode={() => setMode('map')}
        onClickTrackMode={() => setMode('track')}
      />
      <Wrapper size="sz-full" position="relative">
        {mode === 'map' && (
          <MapMode
            viewRef={viewRef}
            mapRef={mapRef}
            dashboardRef={dashboardRef}
            isOpenDashboard={dashboardState.isOn}
            mapState={mapState}
            handleMouseDown={handleMouseDown}
            handleWheel={handleWheel}
            setCenter={setCenter}
            setRotation={setRotation}
            setScale={setScale}
            resizeMapToView={resizeMapToView}
          ></MapMode>
        )}
        {mode === 'track' && <TrackMode></TrackMode>}
      </Wrapper>
    </Wrapper>
  );
};

const loader = async ({}: LoaderFunctionArgs) => {
  await waitForLogin();

  await cartQuery.fetchCartsQuery();
  await roundQuery.fetchRoundsQuery();

  return null;
};

const action = ({}: ActionFunctionArgs) => {
  return null;
};

Home.loader = loader;
Home.action = action;

export default Home;
