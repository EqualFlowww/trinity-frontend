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
      <Flex width="full" justifyContent="between" padding="2">
        <Text type="title" size="small" color="on-neutral">
          {children}
        </Text>
        <Tooltip text={description}>
          <Button
            padding="0"
            form="text"
            color="neutral-container-05"
            hoverColor="on-neutral-variant"
          >
            <IconInfo size="2" color="inherit" />
          </Button>
        </Tooltip>
      </Flex>
    </div>
  );
};

export default DashboardItemHeader;
