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
            {categories.map((category) => (
               <li
                  onClick={() => setCategory(category)}
                  className={`categories__item ${category === currentCategory ? `_active` : null}`}
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
