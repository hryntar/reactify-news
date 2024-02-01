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

export interface IFilters {
   page_number: number;
   page_size: number;
   category: CategoriesType | null;
   keywords: string;
}

export type ParamsType = Partial<IFilters>;

export interface NewsApiResponse {
   news: INews[];
   page: number;
   status: string;
} 

export interface CategoriesApiResponse {
   categories: CategoriesType[];
   description: string;
   status: string;
} 

export type CategoriesType = 
   | "regional"
   | "technology"
   | "lifestyle"
   | "business"
   | "general"
   | "programming"
   | "science"
   | "entertainment"
   | "world"
   | "sports"
   | "finance"
   | "academia"
   | "politics"
   | "health"
   | "opinion"
   | "travel"
   | "food"
   | "game"
   | "fashion"
   | "academic"
   | "crap"
   | "travel"
   | "culture"
   | "economy"
   | "environment"
   | "art"
   | "music"
   | "notsure"
   | "CS"
   | "education"
   | "redundant"
   | "television"
   | "commodity"
   | "movie"
   | "entrepreneur"
   | "review"
   | "auto"
   | "energy"
   | "celebrity"
   | "medical"
   | "gadgets"
   | "design"
   | "EE"
   | "security"
   | "mobile"
   | "estate"
   | "funny";
