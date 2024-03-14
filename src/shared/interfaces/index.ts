import { CategoriesType } from "@/entities/category/model/types";

export interface IFilters {
   page_number: number;
   page_size: number;
   category: CategoriesType | null;
   keywords: string;
}

export type ParamsType = Partial<IFilters>; 

