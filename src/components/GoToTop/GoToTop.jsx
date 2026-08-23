import { useState, useEffect } from 'react';

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY >= 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a
      href="#top"
      className={`go-top${isVisible ? ' active' : ''}`}
      title="Go to Top"
    >
      <ion-icon name="arrow-up"></ion-icon>
    </a>
  );
};

export default GoToTop;
