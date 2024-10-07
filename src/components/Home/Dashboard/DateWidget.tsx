import classNames from 'classnames/bind';
import classes from './DateWidget.module.scss';
import Flex from '@/components/UI/Flex';
// import WeatherImage from '@/components/Home/Dashboard/WeatherImage';
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
        size="sz-full"
        position="absolute"
        top="t-0"
        left="l-0"
        zIndex="z-5"
      >
        {/* <WeatherImage type={weather} /> */}
      </Flex>
      <Flex
        name="date-info"
        position="relative"
        padding="p-0"
        color="c-transparent"
        justifyContent="jc-between"
        size="sz-full"
        zIndex="z-10"
      >
        <Flex
          direction="flex-col"
          height="h-auto"
          gap="gap-0"
          wrap="flex-nowrap"
        >
          <Text
            font="font-outfit"
            color="c-on-warning"
            size="headline-s"
            shadow="shd-gray"
            opacity="oc-0.8"
            marginBottom="-mb-3"
            marginTop="-mt-12"
          >
            2024/08/22
          </Text>
          <Text
            font="font-outfit"
            color="c-on-warning"
            size="display-m"
            shadow="shd-gray"
          >
            13:42
          </Text>
        </Flex>
        <Flex
          direction="flex-col"
          height="h-auto"
          gap="gap-1.5"
          justifyContent="jc-center"
        >
          <Flex
            gap="gap-1"
            width="w-12"
            justifyContent="jc-center"
            opacity="oc-0.8"
            borderRadius="rad-2"
            color="c-neutral-container-02"
            alignItems="ai-center"
            marginRight="-mr-2"
            height="h-4"
          >
            <IconWindDirection
              type="south"
              size="sz-2.5"
              color="c-on-warning"
            />
            <Text size="body-xl" color="c-on-warning">
              7m/s
            </Text>
          </Flex>
          <Flex
            gap="gap-0.5"
            width="w-14"
            height="h-4.5"
            justifyContent="jc-center"
            borderRadius="rad-2"
            color="c-on-warning"
            alignItems="ai-center"
          >
            <IconWeather type="clear-day" size="sz-3" color="c-gold" />
            <Text size="body-2xl" color="c-gold">
              20℃
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default DateWidget;
