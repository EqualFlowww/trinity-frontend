import classNames from 'classnames/bind';
import Image from '@/components/UI/Image';
import classes from './WeatherImage.module.scss';
import clearDayImage from '@/assets/images/weather-clear-day.png';
import clearNightImage from '@/assets/images/weather-clear-night.png';
import { Weather } from '@/types/dashboard';

interface Props {
  type: Weather;
}

const WeatherImage = ({ type }: Props) => {
  const cx = classNames.bind(classes);
  let imageSrc = '';

  if (type === 'clear-day') {
    imageSrc = clearDayImage;
  }
  if (type === 'clear-night') {
    imageSrc = clearNightImage;
  }

  return (
    <div className={cx('weather-image-container')}>
      <Image
        size="full"
        src={imageSrc}
        objectFit="cover"
        alt={`weather-${type}`}
      />
      <div className={cx('weather-image-gradient')} />
    </div>
  );
};

export default WeatherImage;
