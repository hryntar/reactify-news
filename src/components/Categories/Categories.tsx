import { FC } from "react";
import "./Categories.scss"

interface IProps {
   categories: string[];
   currentCategory: number;
   setCurrentCategory: React.Dispatch<React.SetStateAction<number>>;
}

const Categories: FC<IProps> = ({ categories, currentCategory, setCurrentCategory }) => {
   return (
      <div className="categories">
         <ul className="categories__list">
            {categories.map((category, idx) => (
               <li onClick={() => setCurrentCategory(idx)} className={`categories__item ${currentCategory === idx ? `_active` : null}`} key={idx}>
                  {category}
               </li>
            ))}
         </ul>
      </div>
   );
};

export default Categories;
