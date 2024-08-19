import React, { useState, useRef, useEffect } from 'react';
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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target as Node)
      ) {
        setVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = () => setVisible(true);
  const handleMouseLeave = () => setVisible(false);

  const cx = classNames.bind(classes);

  return (
    <div
      className={cx('tooltip-container')}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {visible && (
        <div className={cx('tooltip-content')} ref={tooltipRef}>
          <div className={cx('text-and-close')}>
            <span className={cx('tooltip-text')}>{text}</span>
            <button
              type="button"
              className={cx('close-button')}
              onClick={() => setVisible(false)}
              aria-label="Close"
            >
              <IconClose width="10" height="10" color="inherit" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
