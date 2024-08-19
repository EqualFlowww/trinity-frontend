import classNames from 'classnames/bind';
import classes from './DateWidget.module.scss';
import Flex from '@/components/UI/Flex';
import WeatherImage from '@/components/Home/WeatherImage';
import { Weather } from '@/types/home';
import Text from '@/components/UI/Text';
import IconWindDirection from '@/components/Icon/IconWindDirection';
import IconWeather from '@/components/Icon/IconWeather';

interface Props {
  weather: Weather;
  // date: string;
  // windSpeed: number;
  // windDirection: string;
  // temperature: number;
}

const DateWidget = ({ weather }: Props) => {
  const cx = classNames.bind(classes);

  return (
    <div className={cx('date-widget')}>
      <Flex
        name="overlay"
        size="full"
        position="absolute"
        top="0%"
        left="0%"
        zIndex={5}
      >
        <WeatherImage type={weather} />
      </Flex>
      <Flex
        name="date-info"
        position="relative"
        padding="0"
        color="transparent"
        justifyContent="between"
        size="full"
        zIndex={10}
      >
        <Flex direction="column" height="full" gap="0" wrap="nowrap">
          <Text
            font="outfit"
            color="neutral-container-01"
            type="body"
            size="medium"
            shadow="gray"
            opacity={0.8}
          >
            2024/08/22
          </Text>
          <Text
            font="outfit"
            color="neutral-container-01"
            type="headline"
            size="large"
            shadow="gray"
          >
            13:42
          </Text>
        </Flex>
        <Flex
          direction="column"
          height="full"
          gap="0-half"
          justifyContent="center"
        >
          <Flex gap="0-half" width="full" justifyContent="end" opacity={0.8}>
            <IconWindDirection
              type="north"
              size="2"
              color="neutral-container-01"
              shadow="gray"
            />
            <Text
              type="label"
              size="large"
              color="neutral-container-01"
              shadow="gray"
            >
              7m/s
            </Text>
          </Flex>
          <Flex gap="0-half" width="full" justifyContent="end">
            <IconWeather
              type="clear-day"
              size="3"
              color="neutral-container-01"
              shadow="gray"
            />
            <Text
              type="body"
              size="large"
              color="neutral-container-01"
              shadow="gray"
            >
              31℃
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default DateWidget;
