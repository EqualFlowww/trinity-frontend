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
import Hr from '@/components/UI/Hr';

const HeaderNav = () => {
  const cx = classNames.bind(classes);

  const openMessageModal = useMessageStore((state) => state.openModal);
  const openSettingModal = useSettingStore((state) => state.openModal);

  return (
    <Flex
      direction="flex-col"
      name="wrapper"
      color="c-transparent"
      padding="p-0"
      gap="gap-2"
    >
      <Flex direction="flex-col" width="w-full" gap="gap-0.5">
        <a
          href="./"
          className={`${cx('logo-wrapper')} text-[#7B8B76] text-[1.8rem] font-suit font-normal break-words`}
          style={{
            fontSize: '1.8rem',
            fontFamily: 'SUIT',
            fontWeight: 400,
            wordWrap: 'break-word',
          }}
        >
          <IconTrinityLogo size="sz-full" color="c-neutral-container-05" />
        </a>
        <div className={cx('hr')} />
      </Flex>
      <Flex
        name="nav-link-container"
        direction="flex-col"
        gap="gap-2"
        width="w-full"
      >
        <HeaderNavLink text="Home" to="/" />
        <HeaderNavLink text="Round" to="/round" />
        <HeaderNavLink text="Cart" to="/cart" />
        <HeaderNavLink text="Course" to="/course" />
        <HeaderNavLink text="Media" to="/media" />
        <HeaderNavLink text="Account" to="/account" />
        <HeaderNavLink text="Store" to="/store" />
        <HeaderNavLink text="Device" to="/device" />
      </Flex>
      <Hr
        type="horizontal"
        length="len-full"
        thickness="thk-0.125"
        color="c-neutral-container-03"
      />
      <Flex marginTop="mt-3" width="w-full" justifyContent="jc-around">
        <Button
          form="btn-text"
          padding="p-0"
          color="c-neutral-container-05"
          hover={{ color: 'hover:c-on-neutral-variant' }}
          onClick={openMessageModal}
        >
          <IconMessage color="c-inherit" size="sz-4" />
        </Button>
        <Button
          form="btn-text"
          padding="p-0"
          color="c-neutral-container-05"
          hover={{ color: 'hover:c-on-neutral-variant' }}
          onClick={openSettingModal}
        >
          <IconSetting color="c-inherit" size="sz-4" />
        </Button>
      </Flex>
    </Flex>
  );
};

export default HeaderNav;
