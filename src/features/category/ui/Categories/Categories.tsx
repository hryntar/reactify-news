import { FC, forwardRef } from "react";
import "./Categories.scss";

interface IProps {
   categories: string[];
   currentCategory: string;
   setCategory: (category: string) => void;
}

const Categories: FC<IProps> = forwardRef<HTMLDivElement, IProps>(({ categories, setCategory, currentCategory }, ref) => {
   return (
      <div ref={ref} className="categories">
         {categories.map((category) => (
            <button
               onClick={() => setCategory(category)}
               className={`categories__item ${category === currentCategory ? `_active` : ''}`}
               key={category}
            >
               {category}
            </button>
         ))}
      </div>
   );
});

Categories.displayName = "Categories";

export default Categories;
