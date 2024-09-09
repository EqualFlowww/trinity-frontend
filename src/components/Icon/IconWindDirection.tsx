import SvgWindDirectionSouth from '@/assets/svgs/wind-direction-south.svg?react';
import SvgWindDirectionSouthEast from '@/assets/svgs/wind-direction-south-east.svg?react';
import SvgWindDirectionEast from '@/assets/svgs/wind-direction-east.svg?react';
import SvgWindDirectionNorthEast from '@/assets/svgs/wind-direction-north-east.svg?react';
import SvgWindDirectionNorth from '@/assets/svgs/wind-direction-north.svg?react';
import SvgWindDirectionNorthWest from '@/assets/svgs/wind-direction-north-west.svg?react';
import SvgWindDirectionWest from '@/assets/svgs/wind-direction-west.svg?react';
import SvgWindDirectionSouthWest from '@/assets/svgs/wind-direction-south-west.svg?react';
import Icon, { IconProps } from '@/components/UI/Icon';

interface Props extends IconProps {
  type:
    | 'north'
    | 'north-east'
    | 'east'
    | 'south-east'
    | 'south'
    | 'south-west'
    | 'west'
    | 'north-west';
}

const IconWindDirection = ({ type, ...props }: Props) => {
  let SvgWindDirection: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string;
    }
  > = SvgWindDirectionSouth;

  if (type === 'north') {
    SvgWindDirection = SvgWindDirectionNorth;
  } else if (type === 'north-east') {
    SvgWindDirection = SvgWindDirectionNorthEast;
  } else if (type === 'east') {
    SvgWindDirection = SvgWindDirectionEast;
  } else if (type === 'south-east') {
    SvgWindDirection = SvgWindDirectionSouthEast;
  } else if (type === 'south') {
    SvgWindDirection = SvgWindDirectionSouth;
  } else if (type === 'south-west') {
    SvgWindDirection = SvgWindDirectionSouthWest;
  } else if (type === 'west') {
    SvgWindDirection = SvgWindDirectionWest;
  } else if (type === 'north-west') {
    SvgWindDirection = SvgWindDirectionNorthWest;
  }

  return (
    <Icon {...props}>
      <SvgWindDirection />
    </Icon>
  );
};

export default IconWindDirection;
