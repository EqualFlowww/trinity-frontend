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
            size="sz-full"
            justifyContent="jc-between"
            alignItems="ai-center"
            padding="p-1"
            gap="gap-0.5"
            color="c-on-neutral"
            borderRadius="rad-1"
          >
            <Text size="title-m" color="c-inherit">
              {text}
            </Text>
            <IconArrow type="right" size="sz-2" color="c-inherit" />
          </Flex>
        ) : (
          <Button
            form="btn-text"
            justifyContent="jc-between"
            wrap="f-nowrap"
            width="w-full"
            padding="p-1"
            color="c-neutral-container-05"
            hover={{ color: 'hover:c-on-neutral-variant' }}
          >
            <Text size="label-l" color="c-inherit">
              {text}
            </Text>
            <IconArrow type="right" size="sz-2" color="c-inherit" />
          </Button>
        )
      }
    </NavLink>
  );
};

export default HeaderNavLink;
