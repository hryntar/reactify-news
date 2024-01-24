import { FC } from "react";
import styles from "./styles.module.scss";
import BannersList from "../BannersList/BannersList";
import { useFetch } from "../../hooks/useFetch";
import { NewsResponse, getLatestNews } from "../../api/apiNews";

const LatestNews: FC = () => {
   const { data, isLoading } = useFetch<NewsResponse>(getLatestNews);
   
   return (
      <section className={styles.section}>
         <BannersList banners={data && data.news.length > 0 ? data.news : null} isLoading={isLoading}/> 
      </section>
   );
};

export default LatestNews;
