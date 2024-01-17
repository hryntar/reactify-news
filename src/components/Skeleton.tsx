import { FC } from "react";
import { SkeletonProps } from "../types/SkeletonProps";

const Skeleton: FC<SkeletonProps> = ({ count = 1, type }) => {
   return (
      <>
         {count > 1 ? (
            <ul className="list">{[...Array(count)].map((_, idx) => <li key={idx} className={type === "banner" ? "banner" : "item"}></li>)}</ul>
         ) : (
            <li className={type === "banner" ? "banner" : "item"}></li>
         )}
      </>
   );
};

export default Skeleton;
