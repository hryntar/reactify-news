import axios from "axios";
import { NewsType } from "../types/NewsType";
const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export interface NewsResponse {
   status: string;
   news: NewsType[];
   page: number;
}
export interface CategoriesResponse {
   status: string;
   categories: string[];
   description: string; 
} 

export interface IGetNews {
   page_number: number;
   page_size: number;
   category: string;
   keywords: string;
}

export const getNews = async ({ page_number = 1, page_size = 10, category, keywords }: IGetNews) => {
   try {
      const response = await axios.get(BASE_URL + "/search", {
         params: {
            apiKey: API_KEY,
            page_number,
            page_size,
            category,
            keywords,
         },
      });
      return response.data;
   } catch (error) {
      console.error(error);
   }
};

export const getCategories = async () => {
   try {
      const response = await axios.get(BASE_URL + "/available/categories", {
         params: {
            apiKey: API_KEY,
         },
      });
      return response.data;
   } catch (error) {
      console.error(error);
   }
};
