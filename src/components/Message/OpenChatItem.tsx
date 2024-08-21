import classNames from 'classnames/bind';
import classes from './OpenChatItem.module.scss';
import Flex from '@/components/UI/Flex';
import Text from '@/components/UI/Text';
import Button from '@/components/UI/Button';
import IconClose from '@/components/Icon/IconClose';
import { useRef } from 'react';

interface Props {
  chatTitle: string;
  selected?: boolean;
  onClick: () => void;
  onRemove: () => void;
}

const OpenChatItem = ({ chatTitle, selected, onClick, onRemove }: Props) => {
  const cx = classNames.bind(classes);

  const item = useRef(null);

  return (
    <div
      className={cx('open-chat-item', selected || 'unselected')}
      ref={item}
      onClick={(e) => {
        if (e.target == item.current && !selected) onClick();
      }}
    >
      <Flex
        name="open-chat-item-selected"
        width="full"
        paddingY="0-quarter"
        paddingX="0-half"
        justifyContent="between"
        borderRadiusTopRight="0-half"
        color={selected ? 'neutral-container-02' : 'neutral-container-05'}
        hoverColor={selected ? 'neutral-container-03' : 'neutral-container-04'}
        hover={selected ? 'off' : 'on'}
        wrap="nowrap"
      >
        <Text
          type="label"
          size="small"
          color={!selected ? 'neutral-container-02' : 'neutral-container-05'}
        >
          {chatTitle}
        </Text>
        <Button
          padding="0"
          form="text"
          color={!selected ? 'neutral-container-02' : 'neutral-container-05'}
          hoverColor={!selected ? 'neutral' : 'on-neutral-variant'}
          onClick={onRemove}
        >
          <IconClose size="1" color="inherit"></IconClose>
        </Button>
      </Flex>
    </div>
  );
};

export default OpenChatItem;
