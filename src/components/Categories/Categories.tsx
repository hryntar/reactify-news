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
         <ul className="categories__list">
            {categories.map((category, idx) => (
               <li
                  onClick={() => setCategory(category)}
                  className={`categories__item ${categories[idx] === currentCategory ? `_active` : null}`}
                  key={category}
               >
                  {category}
               </li>
            ))}
         </ul>
      </div>
   );
};

export default Categories;
