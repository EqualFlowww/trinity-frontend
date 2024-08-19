import classNames from 'classnames/bind';
import classes from './Course.module.scss';

const Course = () => {
  const cx = classNames.bind(classes);

  return <div className={cx('main')}>Course</div>;
};

export default Course;
