import { FC, ComponentType } from "react";
import { SkeletonTypes } from "@/shared/utils/SkeletonType";
import Skeleton from "@/shared/ui/Skeleton/Skeleton"; 

export default function withSkeleton<P extends object>(Component: ComponentType<P>, type: SkeletonTypes, count: number): FC<P & {isLoading: boolean}> {
   return function ({ isLoading, ...props }: {isLoading: boolean} & P) {
      if (isLoading) {
         return <Skeleton type={type} count={count} />;
      }
      return <Component {...(props as P)} />;
   };
}
