import { useEffect, useState } from "react";
import { IGetNews } from "../api/apiNews";

export const useFetch = <T>(
   fetchFunction: (obj: IGetNews) => Promise<T>,
   params?: IGetNews
): { data: T | null; isLoading: boolean; error: unknown | null } => {
   const [data, setData] = useState<T | null>(null);
   const [isLoading, setIsLoading] = useState(true);
   const [error, setError] = useState<null | unknown>(null);
  
   const stringParams: string = params
   ? new URLSearchParams(Object.fromEntries(Object.entries(params).map(([key, value]) => [key, String(value)]))).toString()
   : "";

   useEffect(() => {
      (async () => {
         try {
            setIsLoading(true);
            const response = await fetchFunction(params!);
            setData(response);
         } catch (error) {
            setError(error);
         } finally {
            setIsLoading(false);
         }
      })();
   }, [fetchFunction, stringParams]);

   return { data, isLoading, error };
};
