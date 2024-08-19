import classNames from 'classnames/bind';
import classes from './SegmentedControl.module.scss';
import Flex from '@/components/UI/Flex';
import Text from '@/components/UI/Text';
import Button from '@/components/UI/Button';
import { BorderRadius } from '@/types/props';
import IconCheck from '@/components/Icon/IconCheck';

interface Props {
  segments: { [key: string]: string };
  currentSegment: string;
  handleSegmentChange: (segment: string) => void;
  borderRadius?: BorderRadius;
}

const SegmentedControl = ({
  segments,
  currentSegment,
  handleSegmentChange,
  borderRadius,
}: Props) => {
  const cx = classNames.bind(classes);
  const segmentKeys = Object.keys(segments);
  const segmentValues = Object.values(segments);

  return (
    <Flex
      width="full"
      borderRadius={borderRadius}
      padding="0"
      color="transparent"
      borderColor="neutral-outline"
      borderStyle="solid"
      borderWidth="0-eighth"
    >
      {segmentValues.map((label, index) => (
        <div className={cx('button-box')}>
          {segmentKeys[index] === currentSegment ? (
            <Flex
              width="full"
              color="primary-container"
              borderRadiusTopLeft={index === 0 ? borderRadius : '0'}
              borderRadiusBottomLeft={index === 0 ? borderRadius : '0'}
              borderRadiusBottomRight={
                index === segmentValues.length - 1 ? borderRadius : '0'
              }
              borderRadiusTopRight={
                index === segmentValues.length - 1 ? borderRadius : '0'
              }
              paddingX="0"
              paddingY="1"
              borderRightColor="neutral-outline"
              borderRightStyle="solid"
              borderRightWidth={
                index === segmentValues.length - 1 ? '0' : '0-eighth'
              }
              gap="1"
            >
              <IconCheck size="1-half" color="inherit" />
              <Text type="label" size="medium" color="inherit">
                {label}
              </Text>
            </Flex>
          ) : (
            <Button
              width="full"
              color="neutral"
              hoverColor="neutral-container-02"
              borderRadiusTopLeft={index === 0 ? borderRadius : '0'}
              borderRadiusBottomLeft={index === 0 ? borderRadius : '0'}
              borderRadiusBottomRight={
                index === segmentValues.length - 1 ? borderRadius : '0'
              }
              borderRadiusTopRight={
                index === segmentValues.length - 1 ? borderRadius : '0'
              }
              paddingX="0"
              paddingY="1"
              borderRightColor="neutral-outline"
              borderRightStyle="solid"
              borderRightWidth={
                index === segmentValues.length - 1 ? '0' : '0-eighth'
              }
              onClick={() => handleSegmentChange(segmentKeys[index])}
            >
              <Text type="label" size="medium" color="inherit">
                {label}
              </Text>
            </Button>
          )}
        </div>
      ))}
    </Flex>
  );
};

export default SegmentedControl;
