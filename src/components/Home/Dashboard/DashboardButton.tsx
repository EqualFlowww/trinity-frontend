import IconArrow from '@/components/Icon/IconArrow';
import Button from '@/components/UI/Button';
import Wrapper from '@/components/UI/Wrapper';

interface Props {
  isOn: boolean;
  onClick: () => void;
}

const DashBoardButton = ({ isOn, onClick }: Props) => {
  return (
    <Wrapper
      position="absolute"
      top="t-50pct"
      left="l-100pct"
      transformTranslateY="-trly-50pct"
      borderRadiusRight="rad-r-1"
      borderRadiusLeft="rad-l-0"
      color="c-neutral"
    >
      <Button
        form="btn-text"
        paddingX="px-0.125"
        paddingY="py-3"
        color="c-neutral-container-03"
        hover={{ color: 'hover:c-neutral-container-05' }}
        onClick={onClick}
      >
        <IconArrow
          type={isOn ? 'left' : 'right'}
          size="sz-2.75"
          color="c-inherit"
        />
      </Button>
    </Wrapper>
  );
};
export default DashBoardButton;
