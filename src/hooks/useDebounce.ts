import { useCallback, useRef } from 'react';

// 제네릭을 사용하여 다양한 콜백 함수 타입을 처리할 수 있도록 설정
function useDebounce<T extends (...args: any[]) => void>(
  callback: T,
  delay: number
) {
  // 타이머를 저장할 Ref를 생성
  const timer = useRef<NodeJS.Timeout | null>(null);

  // useCallback을 사용하여 callback과 delay가 변경될 때만 함수가 재생성되도록 함
  const debouncedCallback = useCallback(
    (...args: Parameters<T>) => {
      // 이전 타이머가 있으면 제거
      if (timer.current) {
        clearTimeout(timer.current);
      }

      // 새 타이머 설정
      timer.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );

  return debouncedCallback;
}

export default useDebounce;
