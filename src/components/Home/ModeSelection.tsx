import IconMap from '@/components/Icon/IconMap';
import IconTrack from '@/components/Icon/IconTrack';
import Button from '@/components/UI/Button';
import Flex from '@/components/UI/Flex';
import Text from '@/components/UI/Text';
import Wrapper from '@/components/UI/Wrapper';

interface Props {
  mode: string;
  onClickMapMode: () => void;
  onClickTrackMode: () => void;
}

const ModeSelection = ({ mode, onClickMapMode, onClickTrackMode }: Props) => {
  return (
    <Flex
      position="absolute"
      top="t-4.5"
      right="r-4.5"
      gap="gap-1"
      zIndex="z-10"
    >
      {mode !== 'map' && (
        <Wrapper
          width="w-20"
          color="c-neutral"
          borderStyle="bs-solid"
          borderWidth="bw-0.125"
          borderColor="bc-neutral-container-02"
          borderRadius="rad-1"
          shadow="shd-gray"
        >
          <Button
            form="btn-text"
            width="w-full"
            padding="p-0"
            paddingY="py-1.5"
            color="c-neutral-container-04"
            hover={{ color: 'hover:c-neutral-container-05' }}
            onClick={onClickMapMode}
          >
            <IconMap size="sz-2.75" color="c-inherit" />
            <Text size="title-m" color="c-inherit">
              Map Mode
            </Text>
          </Button>
        </Wrapper>
      )}
      {mode === 'map' && (
        <Flex
          width="w-20"
          padding="p-0"
          paddingY="py-1.5"
          color="c-on-neutral"
          borderStyle="bs-solid"
          borderWidth="bw-0.125"
          borderColor="bc-neutral-container-02"
          borderRadius="rad-1"
          shadow="shd-gray"
          gap="gap-1"
        >
          <IconMap size="sz-2.75" color="c-inherit" />
          <Text size="title-m" color="c-inherit">
            Map Mode
          </Text>
        </Flex>
      )}
      {mode !== 'track' && (
        <Wrapper
          width="w-20"
          color="c-neutral"
          borderStyle="bs-solid"
          borderWidth="bw-0.125"
          borderColor="bc-neutral-container-02"
          borderRadius="rad-1"
          shadow="shd-gray"
        >
          <Button
            form="btn-text"
            width="w-full"
            padding="p-0"
            paddingY="py-1.5"
            color="c-neutral-container-04"
            hover={{ color: 'hover:c-neutral-container-05' }}
            onClick={onClickTrackMode}
          >
            <IconTrack size="sz-2.75" color="c-inherit" />
            <Text size="title-m" color="c-inherit">
              Track Mode
            </Text>
          </Button>
        </Wrapper>
      )}
      {mode === 'track' && (
        <Flex
          width="w-20"
          padding="p-0"
          paddingY="py-1.5"
          color="c-on-neutral"
          borderStyle="bs-solid"
          borderWidth="bw-0.125"
          borderColor="bc-neutral-container-02"
          borderRadius="rad-1"
          shadow="shd-gray"
          gap="gap-1"
        >
          <IconTrack size="sz-2.75" color="c-inherit" />
          <Text size="title-m" color="c-inherit">
            Track Mode
          </Text>
        </Flex>
      )}
    </Flex>
  );
};

export default ModeSelection;
