import { useState } from "react";
import { IFilters } from "../interfaces";

export const useFilters = (initialFilters: IFilters) => {
   const [filters, setFilters] = useState<IFilters>(initialFilters);

   const changeFilter = (key: string, value: number | string | null) => {
      setFilters((prev) => ({
         ...prev,
         [key]: value,
      }));
   };
   return {filters, changeFilter}
}