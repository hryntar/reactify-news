import { FC } from "react";
import styles from "./styles.module.scss";
import BannersList from "../BannersList/BannersList";
import { NewsType } from "../../types/NewsType";

const LatestNews: FC<{banners: NewsType[] | null, isLoading: boolean}> = ({banners, isLoading}) => {
   return (
      <section className={styles.section}>
         <BannersList banners={banners} isLoading={isLoading}/> 
      </section>
   );
};

export default LatestNews;
