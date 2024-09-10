import React, { useState, useRef } from 'react';
import classNames from 'classnames/bind';
import classes from './Tooltip.module.scss';
import IconClose from '@/components/Icon/IconClose';

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

const Tooltip = ({ text, children }: TooltipProps) => {
  const [visible, setVisible] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => setVisible(true);
  const handleMouseLeave = () => setVisible(false);

  const handleConfirm = () => {
    setVisible(false); // "확인했습니다" 버튼을 누르면 툴팁 닫기
  };

  const cx = classNames.bind(classes);

  return (
    <div
      className={cx('tooltip-container')}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={containerRef}
    >
      {children}
      {visible && (
        <div className={cx('tooltip-content')} ref={tooltipRef}>
          <div className={cx('arrow')}></div>
          <div className={cx('tooltip-box')}>
            <span className={cx('tooltip-text')}>{text}</span>
            <button
              type="button"
              className={cx('close-button')}
              onClick={() => setVisible(false)}
              aria-label="Close"
            >
              <IconClose width="w-5" height="h-5" color="c-inherit" />
            </button>
          </div>
          <div className={cx('footer')}>
            <button className={cx('confirm-button')} onClick={handleConfirm}>
              확인했습니다 ✔
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
