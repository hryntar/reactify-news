import { FC, ReactElement, cloneElement, useRef } from "react";
import styles from "./Slider.module.scss";

const Slider: FC<{ children: ReactElement }> = ({ children }) => {
   const sliderRef = useRef<HTMLDivElement>(null);

   const scrollLeft = () => {
      let scrollAmount = 0;
      const slideTimer = setInterval(() => {
         if (sliderRef.current) {
            sliderRef.current.scrollLeft -= 20;
            scrollAmount += 20;
            if (scrollAmount >= 180) clearInterval(slideTimer);
         }
     }, 25);
   };
   const scrollRight = () => {
      let scrollAmount = 0;
      const slideTimer = setInterval(() => {
         if (sliderRef.current) {
            sliderRef.current.scrollLeft += 20;
            scrollAmount += 20;
            if (scrollAmount >= 180) clearInterval(slideTimer);
         }
      }, 25);
   };

   return (
      <div className={styles.slider}>
         <button onClick={scrollLeft} className={styles.arrow}>{`<`}</button>
         {cloneElement(children, { ref: sliderRef })}
         <button onClick={scrollRight} className={styles.arrow}>{`>`}</button>
      </div>
   );
};

export default Slider;
