import classNames from 'classnames/bind';
import classes from './Header.module.scss';
import HeaderNav from './HeaderNav';
import Flex from '@/components/UI/Flex';

const Header = () => {
  const cx = classNames.bind(classes);

  return (
    <div className={cx('header')}>
      <Flex
        padding="1"
        color="neutral-container-01"
        direction="column"
        justifyContent="between"
        size="full"
      >
        <HeaderNav />
        <Flex
          direction="column"
          gap="3"
          width="full"
          justifyContent="start"
          name="header-footer"
          alignItems="start"
        >
          <Flex
            direction="column"
            width="full"
            name="provider"
            gap="0-half"
            alignItems="start"
            alignContent="start"
          >
            <div className={cx('provider-name')}>Golf in One</div>
            <div className={cx('provider-year')}>@ EQUAL 2024</div>
          </Flex>
          <div className={cx('version')}>ver 0.123456</div>
        </Flex>
      </Flex>
    </div>
  );
};

export default Header;
