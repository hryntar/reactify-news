import { FC } from "react";
import { NewsType } from "../types/NewsType";
import { formatTimeAgo } from "../utils/formatTimeAgo";

const NewsList: FC<{ news: NewsType[] }> = ({ news }) => {
   return (
      <ul className="newsList">
         {news.map((article) => (
            <li className="newsList__item item-newsList" key={article.id}>
               <div className="item-newsList__img-ibg"><img src={article.image} alt="News image"/></div>
               <div className="item-newsList__body">
                  <h3 className="item-newsList__title">{article.title}</h3>
                  <p className="item-newsList__info">{formatTimeAgo(article.published)} · by {article.author}</p>
               </div>
            </li>
         ))}
      </ul>
   );
};

export default NewsList;
