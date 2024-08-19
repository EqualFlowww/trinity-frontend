import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import classes from './HeaderNavLInk.module.scss';
import Button from '@/components/UI/Button';
import Text from '@/components/UI/Text';
import Flex from '@/components/UI/Flex';
import IconArrow from '@/components/Icon/IconArrow';

interface Props {
  text: string;
  to: string;
}

const HeaderNavLink = ({ text, to }: Props) => {
  const cx = classNames.bind(classes);

  return (
    <NavLink to={`${to}`} className={cx('link')}>
      {({ isActive }) =>
        isActive ? (
          <Flex
            size="full"
            justifyContent="between"
            alignItems="center"
            padding="1"
            gap="0-half"
            color="on-neutral"
            borderRadius="1"
          >
            <Text type="label" color="inherit">
              {text}
            </Text>
            <IconArrow type="right" size="2" color="inherit" />
          </Flex>
        ) : (
          <Button
            form="text"
            justifyContent="between"
            wrap="nowrap"
            width="full"
            padding="1"
            color="neutral-container-05"
            hoverColor="on-neutral-variant"
          >
            <Text type="label" color="inherit">
              {text}
            </Text>
            <IconArrow type="right" size="2" color="inherit" />
          </Button>
        )
      }
    </NavLink>
  );
};

export default HeaderNavLink;
