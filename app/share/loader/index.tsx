'use client';

import { useEffect, useLayoutEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './index.module.scss';

const LoaderComponent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  useLayoutEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoading(true);
  }, [pathname]);

  useEffect(() => {
    if (!isLoading) return;
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1700);

    return () => clearTimeout(timer);
  }, [isLoading, pathname]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div 
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={styles["loader-block"]}>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%", y: "-500px", opacity: 0 }}
            transition={{
              width: {
                duration: .3
              },
              y: {
                delay: .8,
                duration: .3
              },
              opacity: {
                delay: .8
              }
            }}
            className={styles["loader-block__line"]} />
            <motion.div className={styles["loader-block__lines"]}>
              {Array.from({ length: 5 }).map((_, index) => {
                const startDelay = 0.8 + 0.1 * index; 

                return (
                  <motion.div 
                    key={index}
                    initial={{ height: 0, width: "100%" }}
                    animate={{ 
                      height: ["0%", "100%", "100%"],
                      width: ["100%", "100%", "0%"]
                    }}
                    transition={{
                      duration: .7, 
                      delay: startDelay, 
                      times: [0, 0.3, .9], 
                      ease: "easeInOut"
                    }}
                    className={styles["loader-block__lines__block"]} 
                  />
                );
              })}
            </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoaderComponent;