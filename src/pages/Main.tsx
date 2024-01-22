import { useState } from "react";
import NewsBanner from "../components/NewsBanner/NewsBanner";
import { CategoriesResponse, NewsResponse, getCategories, getNews } from "../api/apiNews";
import NewsList from "../components/NewsList/NewsList";
import Pagination from "../components/UI/Pagination/Pagination";
import Categories from "../components/Categories/Categories";
import Search from "../components/UI/Search/Search";
import { useDebounce } from "../hooks/useDebounce";
import { PAGE_SIZE, TOTAL_PAGES } from "../constants/constants";
import { useFetch } from "../hooks/useFetch";

const Main = () => { 
   const [currentPage, setCurrentPage] = useState(1);
   const [currentCategory, setCurrentCategory] = useState(0);
   const [keywords, setKeywords] = useState("");

   const debouncedKeywords = useDebounce(keywords, 1000);

   const { data: dataCategories} = useFetch<CategoriesResponse>(getCategories);

   const { data, isLoading } = useFetch<NewsResponse>(getNews, {
      page_number: currentPage,
      page_size: PAGE_SIZE,
      category: currentCategory === 0 ? "all" : dataCategories ? dataCategories?.categories[currentCategory - 1] : '',
      keywords: debouncedKeywords,
   }); 

   return (
      <main className="main">
         <div className="main__container">
            {dataCategories ? (
               <Categories categories={["all", ...dataCategories.categories]} currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} />
            ) : null}
            <Search keywords={keywords} setKeywords={setKeywords} />
            <NewsBanner isLoading={isLoading} news={data && data.news.length > 0 ? data.news[0] : null} />
            <NewsList isLoading={isLoading} news={data && data.news.length > 0 ? data.news : null} />
         </div>
         <Pagination totalPages={TOTAL_PAGES} setCurrentPage={setCurrentPage} currentPage={currentPage} />
      </main>
   );
};

export default Main;
