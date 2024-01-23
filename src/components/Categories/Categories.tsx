import { FC } from "react";
import "./Categories.scss";

interface IProps {
   categories: string[];
   currentCategory: string;
   setCategory: (category: string) => void;
}

const Categories: FC<IProps> = ({ categories, setCategory, currentCategory }) => {
   return (
      <div className="categories">
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
};

export default Categories;
