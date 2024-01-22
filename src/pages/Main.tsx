import { useEffect, useState } from "react";
import NewsBanner from "../components/NewsBanner/NewsBanner";
import { getCategories, getNews } from "../api/apiNews";
import { NewsType } from "../types/NewsType";
import NewsList from "../components/NewsList/NewsList";
import Pagination from "../components/UI/Pagination/Pagination";
import Categories from "../components/Categories/Categories";
import Search from "../components/UI/Search/Search";
import { useDebounce } from "../hooks/useDebounce";
import { PAGE_SIZE, TOTAL_PAGES } from "../constants/constants";

const Main = () => {
   const [news, setNews] = useState<NewsType[]>();
   const [categories, setCategories] = useState<string[]>();
   const [isLoading, setIsLoading] = useState(true);
   const [currentPage, setCurrentPage] = useState(1);
   const [currentCategory, setCurrentCategory] = useState(0);
   const [keywords, setKeywords] = useState("");
  

   const debouncedKeywords = useDebounce(keywords, 1000);

   const fetchNews = async (currentPage: number, currentCategory: number, categories: string[], debouncedKeywords: string) => {
      try {
         setIsLoading(true);
         const data: { status: string; news: NewsType[]; page: number } = await getNews({
            page_number: currentPage,
            page_size: PAGE_SIZE,
            category: currentCategory === 0 ? "all" : categories[currentCategory],
            keywords: debouncedKeywords,
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
   }, []);

   useEffect(() => {
      fetchNews(currentPage, currentCategory, categories ? categories : [], debouncedKeywords);
   }, [currentPage, currentCategory, categories, debouncedKeywords]);

   return (
      <main className="main">
         <div className="main__container">
            {categories?.length ? (
               <Categories categories={categories} currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} />
            ) : null}
            <Search keywords={keywords} setKeywords={setKeywords} />
            <NewsBanner isLoading={isLoading} news={news && news.length > 0 ? news[0] : null} />
            <NewsList isLoading={isLoading} news={news && news.length > 0 ? news : null} /> 
         </div>
         <Pagination totalPages={TOTAL_PAGES} setCurrentPage={setCurrentPage} currentPage={currentPage} />
      </main>
   );
};

export default Main;
