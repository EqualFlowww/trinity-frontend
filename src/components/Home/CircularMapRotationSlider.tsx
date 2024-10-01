import IconCompassNeedle from '@/components/Icon/IconCompassNeedle';
import Button from '@/components/UI/Button';
import Flex from '@/components/UI/Flex';
import Text from '@/components/UI/Text';
import Wrapper from '@/components/UI/Wrapper';
import React, { useRef } from 'react';

interface Props {
  angle: number;
  setAngle: (angle: number) => void;
  setCenter: (nextX: number, nextY: number) => void;
}

const CircularMapRotationSlider = ({ angle, setAngle, setCenter }: Props) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  // 각도를 계산하는 함수
  const calculateAngle = (clientX: number, clientY: number) => {
    if (!sliderRef.current) return;

    const rect = sliderRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = clientX - centerX;
    const dy = centerY - clientY; // y축이 반대 방향이므로 반대로 계산
    let calculatedAngle = Math.atan2(dx, dy) * (180 / Math.PI); // 라디안을 각도로 변환
    if (calculatedAngle < 0) calculatedAngle += 360; // 각도를 0~360도로 변환
    return calculatedAngle;
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
    setAngle(calculateAngle(event.clientX, event.clientY)!);
  };

  // 드래그 종료 핸들러
  const handleMouseUp = (event: MouseEvent) => {
    event.preventDefault();
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  // 각도에 따라 버튼 위치 계산
  const calculateButtonPosition = () => {
    const radius = 48;
    const radian = (angle * Math.PI) / 180; // 각도를 라디안으로 변환
    const x = radius * Math.sin(radian); // 중심점 (50, 50) 기준 y 좌표
    const y = radius * -Math.cos(radian); // 중심점 (50, 50) 기준 x 좌표
    return { x, y };
  };

  const { x, y } = calculateButtonPosition();

  return (
    <Wrapper size="sz-12" position="relative" ref={sliderRef}>
      <Flex
        size="sz-full"
        borderRadius="rad-circle"
        borderStyle="bs-solid"
        borderWidth="bw-0.125"
        borderColor="bc-neutral-container-01"
        shadow="shd-gray"
      >
        <Button
          size="sz-7.5"
          padding="p-0"
          color="c-neutral-container-01"
          borderRadius="rad-circle"
          htmlAttributes={{
            style: {
              transform: `rotate(${angle}deg)`,
            },
          }}
          onClick={() => {
            setAngle(0);
            setCenter(0, 0);
          }}
        >
          <IconCompassNeedle size="sz-full" color="c-on-neutral" />
        </Button>
      </Flex>
      <Wrapper
        size="sz-2.5"
        position="absolute"
        top="t-50pct"
        left="l-50pct"
        color="c-neutral-container-01"
        borderRadius="rad-0.5"
        htmlAttributes={{
          style: {
            transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${angle}deg)`,
            cursor: 'pointer',
          },
          onMouseDown: handleMouseDown,
        }}
      >
        <Text size="label-l">N</Text>
      </Wrapper>
    </Wrapper>
  );
};

export default CircularMapRotationSlider;
