import classNames from 'classnames/bind';
import { useEffect } from 'react';
import useSettingStore from '@/store/settingStore';
import classes from './SettingModal.module.scss';
import Text from '@/components/UI/Text';
import Button from '@/components/UI/Button';
import useThemeStore from '@/store/themeStore';

const SettingModal = () => {
  const cx = classNames.bind(classes);

  const isOpen = useSettingStore((state) => state.isModalOpen);
  const closeModal = useSettingStore((state) => state.closeModal);

  const { theme, toggleTheme } = useThemeStore();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  if (!isOpen) return null;

  return (
    <div
      className={cx('modal-overlay')}
      role="button"
      tabIndex={0}
      onClick={closeModal}
      onKeyUp={closeModal}
    >
      <div
        role="button"
        tabIndex={0}
        className={cx('modal-content')}
        onClick={(e) => e.stopPropagation()}
        onKeyUp={(e) => e.stopPropagation()}
      >
        <h2>Setting Modal</h2>
        <Button type="button" color="on-neutral" onClick={toggleTheme}>
          <Text color="inherit">
            Toggle Theme to {theme === 'light' ? 'dark' : 'light'}
          </Text>
        </Button>
        <button type="button" onClick={closeModal}>
          Close Modal
        </button>
      </div>
    </div>
  );
};

export default SettingModal;
