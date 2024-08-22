import classNames from 'classnames/bind';
import classes from './Course.module.scss';
import imgSrc from '@/assets/images/Course(Tablet)@4x.webp';

const Course = () => {
  const cx = classNames.bind(classes);

  return (
    <div className={cx('main')}>
      <img className={cx('img')} src={imgSrc}></img>
    </div>
  );
};

export default Course;
