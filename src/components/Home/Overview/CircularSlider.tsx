import React, { useState, useRef, useEffect } from 'react';

interface Props {
  angle: number;
  setAngle: (angle: number) => void;
}

const CircularSlider = ({ angle, setAngle }: Props) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  // 각도를 계산하는 함수
  const calculateAngle = (clientX: number, clientY: number) => {
    if (!sliderRef.current) return;

    const rect = sliderRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = clientX - centerX;
    const dy = clientY - centerY;
    let calculatedAngle = Math.atan2(dy, dx) * (180 / Math.PI); // 라디안을 각도로 변환
    if (calculatedAngle < 0) calculatedAngle += 360; // 각도를 0~360도로 변환
    return calculatedAngle;
  };

  // 버튼 드래그 핸들러
  const handleMouseMove = (e) => {
    setAngle(calculateAngle(e.clientX, e.clientY)!);
  };

  // 드래그 시작 핸들러
  const handleMouseDown = (e) => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  // 드래그 종료 핸들러
  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  // 각도에 따라 버튼 위치 계산
  const calculateButtonPosition = () => {
    const radius = 50; // 트랙의 반지름
    const radian = (angle * Math.PI) / 180; // 각도를 라디안으로 변환
    const x = 50 + radius * Math.cos(radian); // 중심점 (50, 50) 기준 x 좌표
    const y = 50 + radius * Math.sin(radian); // 중심점 (50, 50) 기준 y 좌표
    return { x, y };
  };

  const { x, y } = calculateButtonPosition();

  return (
    <div
      ref={sliderRef}
      style={{ position: 'relative', width: '100px', height: '100px' }}
    >
      {/* SVG 원형 트랙 */}
      <svg width="100" height="100">
        <circle
          cx="50"
          cy="50"
          r="50"
          stroke="lightgray"
          strokeWidth="3"
          fill="none"
        />
        <circle
          cx={x}
          cy={y}
          r="5"
          fill="red"
          onMouseDown={handleMouseDown}
          style={{ cursor: 'pointer' }}
        />
      </svg>
      {/* 현재 각도 표시 */}
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        각도: {Math.round(angle)}°
      </div>
    </div>
  );
};

export default CircularSlider;
