export type Weather =
  | 'clear-day'
  | 'clear-night'
  | 'rain'
  | 'snow'
  | 'sleet'
  | 'wind'
  | 'fog'
  | 'cloudy-day'
  | 'cloudy-night'
  | 'partly-cloudy-day'
  | 'partly-cloudy-night';

export type CartSummaryData = {
  id: string;
  type: 'round' | 'work' | 'training' | 'waiting';
  name: string;
  manager: {
    name: string;
    type: 'caddy' | 'manager' | 'engineer';
  };
  isWarning: boolean;
  isBatteryAlert: boolean;
  isPersonAlert: boolean;
  location: {
    x: number;
    y: number;
  };
  roundId?: string;
};

export type RoundSummaryData = {
  id: string;
  name: string;
  half: 'first' | 'second';
  currentHole: {
    number: number;
    courseType: 'in' | 'out';
    startTime: string;
    elapsedTime: string;
    scheduledEndTime: string;
  };
  order: 'first' | 'middle' | 'last';
  isVip: boolean;
  isNineHolePlus: boolean;
  cartIdList: string[];
};

export type CartSummaryDataList = CartSummaryData[];
export type RoundSummaryDataList = RoundSummaryData[];

export type CartSummaryDataCollection = {
  [id: string]: CartSummaryData;
};

export type RoundSummaryDataCollection = {
  [id: string]: RoundSummaryData;
};

export interface MapState {
  imageSize: number;
  scale: number;
  size: number;
  rotation: number;
  viewPosition: { x: number; y: number };
  viewSize: {
    width: number;
    height: number;
  };
  boundaryRadius: number;
}
