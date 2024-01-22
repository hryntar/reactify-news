import { useState } from "react";
import { IGetNews } from "../api/apiNews";

export const useFilters = (initialFilters: IGetNews) => {
   const [filters, setFilters] = useState(initialFilters);

   const changeFilter = (key: string, value: number | string) => {
      setFilters((prev) => ({
         ...prev,
         [key]: value,
      }));
   };
   return {filters, changeFilter}
}