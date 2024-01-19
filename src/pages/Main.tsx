import { useEffect, useState } from "react";
import NewsBanner from "../components/NewsBanner";
import { getNews } from "../api/apiNews";
import { NewsType } from "../types/NewsType";
import NewsList from "../components/NewsList";
import Skeleton from "../components/Skeleton";
import Pagination from "../components/Pagination";

const Main = () => {
   const [news, setNews] = useState<NewsType[]>();
   const [isLoading, setIsLoading] = useState(true);
   const [currentPage, setCurrentPage] = useState(1);
   const totalPages: number = 10;
   const pageSize: number = 10;
   
   const fetchNews = async (currentPage: number) => { 
      try {
         setIsLoading(true);
         const data: { status: string; news: NewsType[]; page: number } = await getNews(currentPage, pageSize);
         console.log(data.news);
         setNews(data.news);
         setIsLoading(false);
      } catch (error) {
         console.error(error);
      }
   };

   useEffect(() => { 
      fetchNews(currentPage);
   }, [currentPage]);

   return (
      <main className="main">
         <div className="main__container">
            {news?.length && !isLoading ? <NewsBanner news={news[0]} /> : <Skeleton count={1} type="banner"/>} 
            {news?.length && !isLoading ? <NewsList news={news}/> : <Skeleton count={10} type="item"/>}
         </div>
         <Pagination totalPages={totalPages} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
      </main>
   );
};

export default Main;
