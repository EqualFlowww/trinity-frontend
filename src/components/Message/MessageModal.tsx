import classNames from 'classnames/bind';
import useMessageStore from '@/store/messageStore';
import classes from './MessageModal.module.scss';

const MessageModal = () => {
  const cx = classNames.bind(classes);

  const isOpen = useMessageStore((state) => state.isModalOpen);
  const closeModal = useMessageStore((state) => state.closeModal);

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
        <h2>Message Modal</h2>
        <p>This is a modal window.</p>
        <button type="button" onClick={closeModal}>
          Close Modal
        </button>
      </div>
    </div>
  );
};

export default MessageModal;
