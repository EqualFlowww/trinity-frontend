import classNames from 'classnames/bind';
import HeaderNavLink from '@/components/Header/HeaderNavLink';
import classes from './HeaderNav.module.scss';
import IconTrinityLogo from '@/components/Icon/IconTrinityLogo';
import Flex from '@/components/UI/Flex';
import IconMessage from '@/components/Icon/IconMessage';
import IconSetting from '@/components/Icon/IconSetting';
import Button from '@/components/UI/Button';
import useMessageStore from '@/store/messageStore';
import useSettingStore from '@/store/settingStore';

const HeaderNav = () => {
  const cx = classNames.bind(classes);

  const openMessageModal = useMessageStore((state) => state.openModal);
  const openSettingModal = useSettingStore((state) => state.openModal);

  return (
    <Flex
      direction="column"
      name="wrapper"
      color="transparent"
      padding="0"
      gap="1"
      width="full"
    >
      <Flex direction="column" width="full" gap="0-half">
        <a href="./" className={cx('logo-wrapper')}>
          <IconTrinityLogo size="full" color="neutral-container-05" />
        </a>
        <div className={cx('hr')} />
      </Flex>
      <Flex name="nav-link-container" direction="column" gap="1" width="full">
        <HeaderNavLink text="Home" to="/" />
        <HeaderNavLink text="Cart" to="/cart" />
        <HeaderNavLink text="Course" to="/course" />
        <HeaderNavLink text="Device" to="/device" />
        <HeaderNavLink text="Account" to="/account" />
      </Flex>
      <div className={cx('hr')} />
      <Flex marginTop="3" width="full" justifyContent="around">
        <Button
          form="text"
          padding="0"
          color="neutral-container-05"
          hoverColor="on-neutral-variant"
          onClick={openMessageModal}
        >
          <IconMessage color="inherit" />
        </Button>
        <Button
          form="text"
          padding="0"
          color="neutral-container-05"
          hoverColor="on-neutral-variant"
          onClick={openSettingModal}
        >
          <IconSetting color="inherit" />
        </Button>
      </Flex>
    </Flex>
  );
};

export default HeaderNav;
