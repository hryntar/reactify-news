import { FC } from "react";
import styles from "./styles.module.scss";
import BannersList from "@/widgets/news/ui/BannersList/BannersList";
import { useGetLatestNewsQuery } from "@/entities/news/api/newsApi";

const LatestNews: FC = () => {
   const { data, isLoading } = useGetLatestNewsQuery()
   
   return ( 
      <section className={styles.section}>
         <BannersList banners={data && data.news} isLoading={isLoading}/> 
      </section>
   );
};

export default LatestNews;
