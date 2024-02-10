import { FC } from "react";
import styles from "./styles.module.scss";
import BannersList from "../BannersList/BannersList";
import { useGetLatestNewsQuery } from "../../store/services/newsApi";

const LatestNews: FC = () => {
   const { data, isLoading } = useGetLatestNewsQuery()
   
   return ( 
      <section className={styles.section}>
         <BannersList banners={data && data.news} isLoading={isLoading}/> 
      </section>
   );
};

export default LatestNews;
