import classNames from 'classnames/bind';
import classes from './CartEntity.module.scss';
import Flex from '@/components/UI/Flex';
import { CartSummaryData, RoundSummaryData } from '@/types/home';
import IconStatusCrown from '@/components/Icon/IconStatusCrown';
import IconStatusNinePlus from '@/components/Icon/IconStatusNinePlus';
import IconStatusAlpha from '@/components/Icon/IconStatusAlpha';
import IconStatusOmega from '@/components/Icon/IconStatusOmega';
import IconStatusWarning from '@/components/Icon/IconStatusWarning';
import IconStatusBatteryAlert from '@/components/Icon/IconStatusBatteryAlert';
import Button from '@/components/UI/Button';
import Wrapper from '@/components/UI/Wrapper';
import Text from '@/components/UI/Text';

interface Props {
  cart: CartSummaryData;
  round?: RoundSummaryData;
}

const CartEntity = ({ cart, round }: Props) => {
  const cx = classNames.bind(classes);

  return (
    <div className={cx('cart-entity')}>
      <Flex width="full" direction="column" gap="0-quarter">
        <Flex name="cart-status" width="full" justifyContent="between">
          <Flex>
            {round?.isVip && <IconStatusCrown size="1" />}
            {round?.isNineHolePlus && <IconStatusNinePlus size="1" />}
            {round?.order === 'first' ? (
              <IconStatusAlpha size="1" />
            ) : (
              round?.order === 'last' && <IconStatusOmega size="1" />
            )}
          </Flex>
          <Flex gap="0-quarter">
            <IconStatusWarning size="1" opacity={cart.isWarning ? 1 : 0} />
            {cart.isBatteryAlert && <IconStatusBatteryAlert size="1" />}
          </Flex>
        </Flex>
        <Button
          width="full"
          form="outlined"
          color="on-neutral"
          borderRadius="0-half"
          padding="0"
          gap="0"
        >
          <Flex
            width="full"
            paddingY="0-quarter"
            color="on-neutral"
            borderRadiusTopLeft="0-half"
            borderRadiusTopRight="0-half"
          >
            <Text type="label" size="medium" color="inherit">
              No. {cart.name}
            </Text>
          </Flex>
          <Flex
            width="full"
            paddingY="0-half"
            color="neutral"
            borderRadiusBottomLeft="0-half"
            borderRadiusBottomRight="0-half"
          >
            <Text type="title" size="small" color="inherit">
              {cart.manager.name}
            </Text>
          </Flex>
        </Button>
      </Flex>
    </div>
  );
};

export default CartEntity;
