import Slider from "@/features/slider/ui/Slider/Slider";
import Search from "@/features/search/ui/Search/Search";
import { IFilters } from "@/shared/interfaces";
import Categories from "@/features/category/ui/Categories/Categories";
import { useAppDispatch } from "@/app/appStore";
import { getFilters } from "@/entities/news/model/newsSlice";
import { useGetCategoriesQuery } from "@/entities/category/api/categoryApi";

interface Props {
   filters: IFilters;
}

export const NewsFilters = ({ filters }: Props) => {
   const dispatch = useAppDispatch();
   const { data: dataCategories } = useGetCategoriesQuery();

   return (
      <>
         {dataCategories ? (
            <Slider>
               <Categories
                  categories={["all", ...dataCategories.categories]}
                  currentCategory={filters.category ? filters.category : "all"}
                  setCategory={(category: string) => dispatch(getFilters({ key: "category", value: category }))}
               />
            </Slider>
         ) : null}
         <Search keywords={filters.keywords} setKeywords={(keywords: string) => dispatch(getFilters({ key: "keywords", value: keywords }))} />
      </>
   );
};
