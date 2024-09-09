import Icon, { IconProps } from '@/components/UI/Icon';

interface Props extends IconProps {}

const IconChat = (props: Props) => {
  return (
    <Icon {...props}>
      <IconChat />
    </Icon>
  );
};

export default IconChat;
