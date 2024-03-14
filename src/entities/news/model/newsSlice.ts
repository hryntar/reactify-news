import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IFilters } from "@/shared/interfaces";
import { PAGE_SIZE } from "@/shared/constants/constants";
import { INews } from "..";

interface IState {
   news: INews[];
   filters: IFilters;
}

const initialState: IState = {
   news: [],
   filters: {
      page_number: 1,
      page_size: PAGE_SIZE,
      category: null,
      keywords: "",
   }
};

export const newsSlice = createSlice({
   name: "news",
   initialState,
   reducers: {
      getNews: (state, action: PayloadAction<INews[]>) => {
         state.news = action.payload;
      },
      getFilters: (state, action: PayloadAction<{key: string; value: string | null | number}>) => {
         const {key, value} = action.payload;
         state.filters = {...state.filters, [key]: value};
      }
   },
});

export const { getNews, getFilters } = newsSlice.actions;
export default newsSlice.reducer;
