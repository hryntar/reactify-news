import { useAppDispatch, useAppSelector } from "@/app/appStore";
import { TOTAL_PAGES } from "@/shared/constants/constants";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { useGetNewsQuery } from "@/entities/news/api/newsApi";
import { getFilters } from "@/entities/news/model/newsSlice";
import NewsList from "@/widgets/news/ui/NewsList/NewsList";
import Pagination from "@/features/pagination/ui/Pagination/Pagination";
import { NewsFilters } from "@/pages/main/ui/NewsFilters/NewsFilters";

export const NewsByFilters = () => {
   const dispatch = useAppDispatch();

   const filters = useAppSelector((state) => state.news.filters);

   const debouncedKeywords = useDebounce(filters.keywords, 1000);

   const { data, isLoading } = useGetNewsQuery({ ...filters, keywords: debouncedKeywords });

   return (
      <div>
         <NewsFilters filters={filters} />
         <Pagination
            totalPages={TOTAL_PAGES}
            setCurrentPage={(pageNumber: number) => dispatch(getFilters({ key: "page_number", value: pageNumber }))}
            currentPage={filters.page_number}
         />
         <NewsList isLoading={isLoading} news={data?.news} />
         <Pagination
            totalPages={TOTAL_PAGES}
            setCurrentPage={(pageNumber: number) => dispatch(getFilters({ key: "page_number", value: pageNumber }))}
            currentPage={filters.page_number}
         />
      </div>
   );
};
