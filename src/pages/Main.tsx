import { CategoriesResponse, NewsResponse, getCategories, getNews } from "../api/apiNews";
import NewsList from "../components/NewsList/NewsList";
import Pagination from "../components/UI/Pagination/Pagination";
import Categories from "../components/Categories/Categories";
import Search from "../components/UI/Search/Search";
import { useDebounce } from "../hooks/useDebounce";
import { PAGE_SIZE, TOTAL_PAGES } from "../constants/constants";
import { useFetch } from "../hooks/useFetch";
import { useFilters } from "../hooks/useFilters";
import LatestNews from "../components/LatestNews/LatestNews";

const Main = () => {
   const { filters, changeFilter } = useFilters({
      page_number: 1,
      page_size: PAGE_SIZE,
      category: "all",
      keywords: "",
   });

   const debouncedKeywords = useDebounce(filters.keywords, 1000);

   const { data: dataCategories } = useFetch<CategoriesResponse>(getCategories);

   const { data, isLoading } = useFetch<NewsResponse>(getNews, {
      ...filters,
      keywords: debouncedKeywords,
   });

   return (
      <main className="main">
         <div className="main__container">
            <LatestNews />
            <div>
               {dataCategories ? (
                  <Categories
                     categories={["all", ...dataCategories.categories]}
                     currentCategory={filters.category}
                     setCategory={(category: string) => changeFilter("category", category)}
                  />
               ) : null}
               <Search keywords={filters.keywords} setKeywords={(keywords: string) => changeFilter("keywords", keywords)} />
               <Pagination
                  totalPages={TOTAL_PAGES}
                  setCurrentPage={(pageNumber: number) => changeFilter("page_number", pageNumber)}
                  currentPage={filters.page_number}
               />
               <NewsList isLoading={isLoading} news={data && data.news.length > 0 ? data.news : null} />
               <Pagination
                  totalPages={TOTAL_PAGES}
                  setCurrentPage={(pageNumber: number) => changeFilter("page_number", pageNumber)}
                  currentPage={filters.page_number}
               />
            </div>
         </div>
      </main>
   );
};

export default Main;
