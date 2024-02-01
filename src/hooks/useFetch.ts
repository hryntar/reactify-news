import { useEffect, useState } from "react";

interface FetchFunction<P, T> {
   (params?: P): Promise<T>;
}

interface UseFetchResult<T> {
   data: T | null | undefined;
   isLoading: boolean;
   error: Error | null;
}

export const useFetch = <T, P>(fetchFunction: FetchFunction<P, T>, params?: P ): UseFetchResult<T> => {
   const [data, setData] = useState<T | null>(null);
   const [isLoading, setIsLoading] = useState<boolean>(true);
   const [error, setError] = useState<null | Error>(null);

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
            setError(error as Error);
         } finally {
            setIsLoading(false);
         }
      })();
   }, [fetchFunction, stringParams]);

   return { data, isLoading, error };
};
