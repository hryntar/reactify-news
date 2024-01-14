import { useEffect, useState } from "react";
import NewsBanner from "../components/NewsBanner";
import { getNews } from "../api/apiNews";
import { NewsType } from "../types/NewsType";
import NewsList from "../components/NewsList";

const Main = () => {
   const [news, setNews] = useState<NewsType[]>();

   useEffect(() => {
      const fetchNews = async () => {
         try {
            const data: { status: string; news: NewsType[]; page: number } = await getNews();
            console.log(data.news);
            setNews(data.news);
         } catch (error) {
            console.error(error);
         }
      };
      fetchNews();
   }, []);

   return (
      <main className="main">
         <div className="main__container">
            {news?.length ? <NewsBanner news={news[0]} /> : null} 
            {news?.length ? <NewsList news={news}/> : null}
         </div>
      </main>
   );
};

export default Main;
