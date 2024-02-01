import { getCategories, getNews } from "../api/apiNews";
import NewsList from "../components/NewsList/NewsList";
import Pagination from "../components/UI/Pagination/Pagination";
import Categories from "../components/Categories/Categories";
import Search from "../components/UI/Search/Search";
import { useDebounce } from "../hooks/useDebounce";
import { PAGE_SIZE, TOTAL_PAGES } from "../constants/constants";
import { useFetch } from "../hooks/useFetch";
import { useFilters } from "../hooks/useFilters";
import LatestNews from "../components/LatestNews/LatestNews";
import Slider from "../components/Slider/Slider";
import { NewsApiResponse, ParamsType } from "../interfaces";

const Main = () => {
   const { filters, changeFilter } = useFilters({
      page_number: 1,
      page_size: PAGE_SIZE,
      category: null,
      keywords: "",
   });

   const debouncedKeywords = useDebounce(filters.keywords, 1000);

   const { data: dataCategories } = useFetch(getCategories);

   const { data, isLoading } = useFetch<NewsApiResponse, ParamsType>(getNews, {
      ...filters,
      keywords: debouncedKeywords,
   });

   return (
      <main className="main">
         <div className="main__container">
            <LatestNews />
            <div>
               {dataCategories ? (
                  <Slider>
                     <Categories
                        categories={["all", ...dataCategories.categories]}
                        currentCategory={filters.category ? filters.category : "all"}
                        setCategory={(category: string) => changeFilter("category", category)}
                     />
                  </Slider>
               ) : null}
               <Search keywords={filters.keywords} setKeywords={(keywords: string) => changeFilter("keywords", keywords)} />
               <Pagination
                  totalPages={TOTAL_PAGES}
                  setCurrentPage={(pageNumber: number) => changeFilter("page_number", pageNumber)}
                  currentPage={filters.page_number}
               />
               <NewsList isLoading={isLoading} news={data?.news} />
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
