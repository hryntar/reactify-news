import NewsList from "../components/NewsList/NewsList";
import Pagination from "../components/UI/Pagination/Pagination";
import Categories from "../components/Categories/Categories";
import Search from "../components/UI/Search/Search";
import { useDebounce } from "../hooks/useDebounce";
import { TOTAL_PAGES } from "../constants/constants";
import LatestNews from "../components/LatestNews/LatestNews";
import Slider from "../components/Slider/Slider";
import { useGetCategoriesQuery, useGetNewsQuery } from "../store/services/newsApi";
import { useAppDispatch, useAppSelector } from "../store";
import { getFilters } from "../store/slices/newsSlice";

const Main = () => { 
   const dispatch = useAppDispatch();

   const filters = useAppSelector((state) => state.news.filters);

   const debouncedKeywords = useDebounce(filters.keywords, 1000);

   const { data: dataCategories } = useGetCategoriesQuery(); 

   const { data, isLoading } = useGetNewsQuery({ ...filters, keywords: debouncedKeywords })

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
                        setCategory={(category: string) => dispatch(getFilters({key: "category",value: category}))}
                     />
                  </Slider>
               ) : null}
               <Search keywords={filters.keywords} setKeywords={(keywords: string) => dispatch(getFilters({key: "keywords",value: keywords}))} />
               <Pagination
                  totalPages={TOTAL_PAGES}
                  setCurrentPage={(pageNumber: number) => dispatch(getFilters({key: "page_number",value: pageNumber}))}
                  currentPage={filters.page_number}
               />
               <NewsList isLoading={isLoading} news={data?.news} />
               <Pagination
                  totalPages={TOTAL_PAGES}
                  setCurrentPage={(pageNumber: number) => dispatch(getFilters({key: "page_number",value: pageNumber}))}
                  currentPage={filters.page_number}
               />
            </div>
         </div>
      </main>
   );
};

export default Main;
