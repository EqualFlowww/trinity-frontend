import classNames from 'classnames/bind';
import classes from './SegmentedControl.module.scss';
import Flex from '@/components/UI/Flex';
import Text from '@/components/UI/Text';
import Button from '@/components/UI/Button';
import IconCheck from '@/components/Icon/IconCheck';
import { BorderStyle } from '@/types/style';

interface Props {
  segments: { [key: string]: string };
  currentSegment: string;
  handleSegmentChange: (segment: string) => void;
  borderRadius?: BorderStyle['borderRadius'];
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
      width="w-full"
      borderRadius={borderRadius}
      padding="p-0"
      color="c-transparent"
      borderColor="bc-neutral-outline"
      borderStyle="bs-solid"
      borderWidth="bw-0.125"
    >
      {segmentValues.map((label, index) => (
        <div className={cx('button-box')} key={label}>
          {segmentKeys[index] === currentSegment ? (
            <Flex
              width="w-full"
              color="c-primary-container"
              borderRadius={borderRadius}
              {...(index !== 0 && { borderRadiusLeft: 'rad-l-0' })}
              {...(index !== segmentValues.length - 1 && {
                borderRadiusRight: 'rad-r-0',
              })}
              paddingX="px-0"
              paddingY="py-1"
              borderRightColor="brc-neutral-outline"
              borderRightStyle="brs-solid"
              borderRightWidth={
                index === segmentValues.length - 1 ? 'brw-0' : 'brw-0.125'
              }
              gap="gap-1"
            >
              <IconCheck size="sz-1.5" color="c-inherit" />
              <Text size="label-m" color="c-inherit">
                {label}
              </Text>
            </Flex>
          ) : (
            <Button
              width="w-full"
              color="c-neutral"
              hover={{ color: 'hover:c-neutral-container-02' }}
              borderRadius={borderRadius}
              {...(index !== 0 && { borderRadiusLeft: 'rad-l-0' })}
              {...(index !== segmentValues.length - 1 && {
                borderRadiusRight: 'rad-r-0',
              })}
              paddingX="px-0"
              paddingY="py-1"
              borderRightColor="brc-neutral-outline"
              borderRightStyle="brs-solid"
              borderRightWidth={
                index === segmentValues.length - 1 ? 'brw-0' : 'brw-0.125'
              }
              onClick={() => handleSegmentChange(segmentKeys[index])}
            >
              <Text size="label-m" color="c-inherit">
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
