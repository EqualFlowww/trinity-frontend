import classNames from 'classnames/bind';
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import classes from './Scroll.module.scss';
import getBrowser from '@/utils/getBrowser';

interface Props {
  children: React.ReactNode;
  type?: 'horizontal' | 'vertical' | 'both';
  size?: 'small' | 'medium' | 'large';
}

const Scroll = forwardRef<HTMLDivElement, Props>(
  ({ children, type = 'vertical', size = 'medium' }, ref) => {
    const cx = classNames.bind(classes);
    const [broswer, setBroswer] = useState('');

    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => scrollContainerRef.current!);

    useEffect(() => {
      const scrollContainer = scrollContainerRef.current;
      setBroswer(getBrowser().toLowerCase());

      if (!scrollContainer || type === 'vertical') {
        return;
      }

      const onWheel = (event: WheelEvent) => {
        if (event.deltaY !== 0) {
          event.preventDefault();
          scrollContainer.scrollLeft += event.deltaY;
        }
      };

      if (scrollContainer) {
        scrollContainer.addEventListener('wheel', onWheel);
      }

      // Cleanup function
      return () => {
        if (scrollContainer) {
          scrollContainer.removeEventListener('wheel', onWheel);
        }
      };
    }, []);

    return (
      <div
        className={cx('scroll', broswer, type, size)}
        ref={scrollContainerRef}
      >
        <div className={cx('children-wrapper', type)}>{children}</div>
      </div>
    );
  }
);

export default Scroll;
