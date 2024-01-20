import { useEffect, useState } from "react";
import NewsBanner from "../components/NewsBanner";
import { getCategories, getNews } from "../api/apiNews";
import { NewsType } from "../types/NewsType";
import NewsList from "../components/NewsList";
import Skeleton from "../components/Skeleton";
import Pagination from "../components/Pagination";
import Categories from "../components/Categories";

const Main = () => {
   const [news, setNews] = useState<NewsType[]>();
   const [categories, setCategories] = useState<string[]>();
   const [isLoading, setIsLoading] = useState(true);
   const [currentPage, setCurrentPage] = useState(1);
   const [currentCategory, setCurrentCategory] = useState(0);
   const totalPages: number = 10;
   const pageSize: number = 10;
   
   const fetchNews = async (currentPage: number, currentCategory: number, categories: string[]) => { 
      try {
         setIsLoading(true);
         const data: { status: string; news: NewsType[]; page: number } = await getNews({
            page_number: currentPage,
            page_size: pageSize,
            category: currentCategory === 0 ? undefined : categories[currentCategory],
         });
         console.log(data.news);
         setNews(data.news);
         setIsLoading(false);
      } catch (error) {
         console.error(error);
      }
   };

   const fetchCategories = async () => { 
      try {
         const data: { categories: string[]; description: string; status: string } = await getCategories();
         console.log(data.categories);
         setCategories(["all", ...data.categories]);
      } catch (error) {
         console.error(error);
      }
   };

   useEffect(() => {
      fetchCategories();
   }, [])

   useEffect(() => { 
      fetchNews(currentPage, currentCategory, categories ? categories : []);
   }, [currentPage, currentCategory, categories]);

   return (
      <main className="main">
         <div className="main__container">
            {categories?.length ? <Categories categories={categories} currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} /> : null} 
            {news?.length && !isLoading ? <NewsBanner news={news[0]} /> : <Skeleton count={1} type="banner"/>} 
            {news?.length && !isLoading ? <NewsList news={news}/> : <Skeleton count={10} type="item"/>}
         </div>
         <Pagination totalPages={totalPages} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
      </main>
   );
};

export default Main;
