// import classNames from 'classnames/bind';
// import classes from './Dashboard.module.scss';
import Flex from '@/components/UI/Flex';
import Text from '@/components/UI/Text';
import Button from '@/components/UI/Button';
import IconInfo from '@/components/Icon/IconInfo';
import Tooltip from '@/components/UI/Tooltip';

interface Props {
  children?: React.ReactNode;
  description: string;
}

const DashboardItemHeader = ({ children, description }: Props) => {
  // const cx = classNames.bind(classes);

  return (
    <div>
      <Flex
        width="w-full"
        justifyContent="jc-between"
        padding="p-2"
        zIndex="z-1110"
      >
        <Text size="title-s" color="c-on-neutral">
          {children}
        </Text>
        <Tooltip text={description}>
          <Button
            padding="p-0"
            form="btn-text"
            color="c-neutral-container-05"
            borderColor="bc-on-neutral-variant"
          >
            <IconInfo size="sz-2" color="c-inherit" />
          </Button>
        </Tooltip>
      </Flex>
    </div>
  );
};

export default DashboardItemHeader;
