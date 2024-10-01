import Block from '@/components/UI/Block';
import Flex from '@/components/UI/Flex';
import Text from '@/components/UI/Text';
import Wrapper from '@/components/UI/Wrapper';
import React, { useRef } from 'react';

interface Props {
  scale: number;
  setScale: (scale: number) => void;
}

const MapScaleSlider = ({ scale, setScale }: Props) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const length = 144;

  // 각도를 계산하는 함수
  const calculateScale = (clientY: number) => {
    if (!sliderRef.current) return;
    console.log(clientY);
    const rect = sliderRef.current.getBoundingClientRect();
    const bottomY = rect.top + rect.height;
    const dy = ((bottomY - clientY) / 144) * 4; // y축이 반대 방향이므로 반대로 계산
    return dy + 1;
  };

  // 드래그 시작 핸들러
  const handleMouseDown = (event: React.MouseEvent) => {
    event.preventDefault();
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  // 버튼 드래그 핸들러
  const handleMouseMove = (event: MouseEvent) => {
    event.preventDefault();

    setScale(calculateScale(event.clientY)!);
  };

  // 드래그 종료 핸들러
  const handleMouseUp = (event: MouseEvent) => {
    event.preventDefault();
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  // 각도에 따라 버튼 위치 계산
  const calculateButtonPosition = () => {
    ((scale - 1) / 4) * length;
    return ((scale - 1) / 4) * length;
  };

  const y = calculateButtonPosition();

  return (
    <Flex
      paddingX="px-1"
      paddingY="py-0.75"
      position="relative"
      direction="flex-col"
      gap="gap-0.75"
      color="c-neutral-container-01"
      borderRadius="rad-1.5"
      shadow="shd-gray"
    >
      <Text size="body-m" color="c-neutral-container-05">
        max
      </Text>
      <Wrapper
        position="relative"
        width="w-0.75"
        height="h-18"
        color="c-neutral-container-03"
        borderRadius="rad-0.5"
        ref={sliderRef}
      >
        <Block
          position="absolute"
          width="w-3"
          height="h-1.5"
          bottom="b-0pct"
          left="l-50pct"
          borderRadius="rad-0.75"
          htmlAttributes={{
            style: {
              transform: `translate(-50%, calc(50% - ${y}px))`,
              cursor: 'pointer',
            },
            onMouseDown: handleMouseDown,
          }}
        />
      </Wrapper>
      <Text size="body-m" color="c-neutral-container-05">
        min
      </Text>
    </Flex>
  );
};

export default MapScaleSlider;
