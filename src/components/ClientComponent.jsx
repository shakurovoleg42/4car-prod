'use client';

import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Preloader from './Preloader/Preloader';

export default function ClientComponent({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init();

    // Имитация времени загрузки (0.2 секунды)
    const simulateLoading = () => {
      setTimeout(() => {
        setLoading(false);
      }, 200);
    };

    simulateLoading();
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return <>{children}</>;
}
