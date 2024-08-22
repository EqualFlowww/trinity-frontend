import classNames from 'classnames/bind';
import classes from './Cart.module.scss';
import imgSrc from '@/assets/images/Cart(Tablet)@4x.webp';

const Cart = () => {
  const cx = classNames.bind(classes);

  return (
    <div className={cx('main')}>
      <img className={cx('img')} src={imgSrc}></img>
    </div>
  );
};

export default Cart;
