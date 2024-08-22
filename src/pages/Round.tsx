import classNames from 'classnames/bind';
import classes from './Round.module.scss';
import imgSrc from '@/assets/images/Round(Tablet)@4x.webp';

const Round = () => {
  const cx = classNames.bind(classes);

  return (
    <div className={cx('main')}>
      <img className={cx('img')} src={imgSrc}></img>
    </div>
  );
};

export default Round;
