import classNames from 'classnames/bind';
import classes from './Header.module.scss';
import HeaderNav from './HeaderNav';
import Flex from '@/components/UI/Flex';

const Header = () => {
  const cx = classNames.bind(classes);

  return (
    <div className={cx('header')}>
      <Flex
        padding="p-1"
        color="c-neutral-container-01"
        direction="flex-col"
        justifyContent="jc-between"
        size="sz-full"
      >
        <HeaderNav />
        <Flex
          direction="flex-col"
          gap="gap-3"
          width="w-full"
          justifyContent="jc-start"
          name="provider"
          alignItems="ai-start"
          alignContent="ac-start"
        >
          <Flex
            direction="flex-col"
            width="w-full"
            name="provider"
            gap="gap-0.5"
            alignItems="ai-start"
            alignContent="ac-start"
            
          >
            <div className={cx('provider-name')}>Birdieswing</div>
            <div className={cx('provider-year')}>@ EQUAL 2024</div>
          </Flex>
          <div className={cx('version')}>ver 0.123456</div>
        </Flex>
      </Flex>
    </div>
  );
};

export default Header;
