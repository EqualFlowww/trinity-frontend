import classNames from 'classnames/bind';
import classes from './CartPointer.module.scss';
import CartEntity from '@/components/Home/Overview/CartEntity';
import Flex from '@/components/UI/Flex';
import Hr from '@/components/UI/Hr';
import { CartSummaryData, RoundSummaryData } from '@/types/home';

interface Props {
  cart: CartSummaryData;
  round?: RoundSummaryData;
  location?: {
    x: number;
    y: number;
  };
}

const CartPointer = ({ cart, round, location }: Props) => {
  const cx = classNames.bind(classes);

  const style = {
    top: `${location?.y}%`,
    left: `${location?.x}%`,
  };

  return (
    <div className={cx('cart-pointer')} style={style}>
      <Flex
        width="w-full"
        direction="flex-col"
        padding="p-0"
        gap="gap-0"
        color="c-transparent"
      >
        <CartEntity cart={cart} round={round} />
        <Hr
          type="vertical"
          length="len-0.125"
          color="c-on-neutral"
          thickness="thk-0.125"
        ></Hr>
        <div className={cx('point')}></div>
      </Flex>
    </div>
  );
};

export default CartPointer;
