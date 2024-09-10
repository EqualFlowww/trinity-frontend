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
        width="w-full"
        paddingY="py-0.25"
        paddingX="px-0.5"
        justifyContent="jc-between"
        borderRadiusTopRight="rad-tr-0.5"
        color={selected ? 'c-neutral-container-02' : 'c-neutral-container-05'}
        hover={{
          color: `${selected ? 'hover:c-neutral-container-03' : 'hover:c-neutral-container-04'}`,
        }}
        wrap="flex-nowrap"
      >
        <Text
          size="label-s"
          color={
            !selected ? 'c-neutral-container-02' : 'c-neutral-container-05'
          }
        >
          {chatTitle}
        </Text>
        <Button
          padding="p-0"
          form="btn-text"
          color={
            !selected ? 'c-neutral-container-02' : 'c-neutral-container-05'
          }
          hover={{
            color: `${selected ? 'hover:c-neutral' : 'hover:c-on-neutral-variant'}`,
          }}
          onClick={onRemove}
        >
          <IconClose size="sz-1" color="c-inherit"></IconClose>
        </Button>
      </Flex>
    </div>
  );
};

export default OpenChatItem;
