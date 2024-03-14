import { CategoriesType } from "@/entities/category";

export interface INews {
   id: string;
   author: string;
   image: string;
   title: string;
   category: CategoriesType[];
   published: string;
   description: string;
   language: string;
   url: string;
}

export interface NewsApiResponse {
   news: INews[];
   page: number;
   status: string;
} 