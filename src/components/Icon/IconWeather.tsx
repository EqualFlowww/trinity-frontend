import SvgClearDay from '@/assets/svgs/weather-clear-day.svg?react';
import SvgClearNight from '@/assets/svgs/weather-clear-night.svg?react';
import SvgCloudyDay from '@/assets/svgs/weather-cloudy-day.svg?react';
import SvgCloudyNight from '@/assets/svgs/weather-cloudy-night.svg?react';
import { Weather } from '@/types/home';
import Icon, { IconProps } from '@/components/UI/Icon';

interface Props extends IconProps {
  type: Weather;
}

const IconWeather = ({ type, ...props }: Props) => {
  let SvgWeather: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string;
    }
  > = SvgClearDay;

  if (type === 'clear-day') {
    SvgWeather = SvgClearDay;
  } else if (type === 'clear-night') {
    SvgWeather = SvgClearNight;
  } else if (type === 'cloudy-day') {
    SvgWeather = SvgCloudyDay;
  } else if (type === 'cloudy-night') {
    SvgWeather = SvgCloudyNight;
  }

  return (
    <Icon {...props}>
      <SvgWeather />
    </Icon>
  );
};

export default IconWeather;
