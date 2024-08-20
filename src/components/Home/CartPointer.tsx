import classNames from 'classnames/bind';
import classes from './CartPointer.module.scss';
import CartEntity from '@/components/Home/CartEntity';
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

  return (
    <div className={cx('cart-pointer')}>
      <Flex
        width="full"
        direction="column"
        padding="0"
        gap="0"
        position="absolute"
        top="50%"
        left="50%"
        zIndex={10}
        color="primary"
      >
        <CartEntity cart={cart} round={round} />
        <Hr
          type="vertical"
          weight="0-eighth"
          color="on-neutral"
          size="2-half"
        ></Hr>
      </Flex>
    </div>
  );
};

export default CartPointer;
