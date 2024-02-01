import { FC } from "react";
import styles from "./styles.module.scss";
import BannersList from "../BannersList/BannersList";
import { useFetch } from "../../hooks/useFetch";
import { getLatestNews } from "../../api/apiNews";
import { NewsApiResponse } from "../../interfaces";

const LatestNews: FC = () => {
   const { data, isLoading } = useFetch<NewsApiResponse, null>(getLatestNews);
   
   return ( 
      <section className={styles.section}>
         <BannersList banners={data && data.news} isLoading={isLoading}/> 
      </section>
   );
};

export default LatestNews;
