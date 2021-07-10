import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { attachScrollbar, scrollScrollbar } from './scrollbarSlice';

function Scrollbar({ children }) {
  const dispatch = useAppDispatch();

  const [scrolled, setScrolled] = useState<boolean>(false);
  const [attached, setAttached] = useState<boolean>(true);
  const [position, setPosition] = useState<number>(0);

  const handleScroll = () => {
    const currentScrollPosition =
      document.body.scrollTop || document.documentElement.scrollTop;

    setPosition((prevPosition) => {
      setScrolled(currentScrollPosition > prevPosition);
      setAttached(currentScrollPosition === 0);

      return currentScrollPosition;
    });
  };

  useEffect(() => {
    dispatch(attachScrollbar(attached));
  }, [attached]);
  useEffect(() => {
    dispatch(scrollScrollbar(scrolled));
  }, [scrolled]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <>{children}</>;
}

export default Scrollbar;
