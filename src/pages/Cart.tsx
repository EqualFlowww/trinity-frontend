import classNames from 'classnames/bind';
import classes from './Cart.module.scss';

const Cart = () => {
  const cx = classNames.bind(classes);

  return <div className={cx('main')}>Cart</div>;
};

export default Cart;
