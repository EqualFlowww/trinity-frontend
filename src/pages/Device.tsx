import classNames from 'classnames/bind';
import classes from './Device.module.scss';
import Text from '@/components/UI/Text';
import Button from '@/components/UI/Button';

const Device = () => {
  const cx = classNames.bind(classes);

  return (
    <div className={cx('main')}>
      <Button type="button" color="primary" form="outlined" padding="1">
        <Text font="outfit" type="display" color="inherit">
          primary
        </Text>
      </Button>
    </div>
  );
};

export default Device;
