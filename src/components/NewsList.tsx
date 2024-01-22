import { FC } from "react";
import { NewsType } from "../types/NewsType";
import { formatTimeAgo } from "../utils/formatTimeAgo";
import withSkeleton from "../helpers/hocs/hoc/withSkeleton";
import { PAGE_SIZE } from "../constants/constants";

const NewsList: FC<{ news: NewsType[] | null }> = ({ news }) => {
   return (
      <ul className="newsList">
         {news ? news.map((article) => (
            <li className="newsList__item item-newsList" key={article?.id}>
               <div className="item-newsList__img-ibg">
                  {article?.image == "None" ? <div className="image-plug"></div> : <img src={article?.image} alt="News image" />}
               </div>
               <div className="item-newsList__body">
                  <h3 className="item-newsList__title">{article?.title}</h3>
                  <p className="item-newsList__info">
                     {formatTimeAgo(article ? article?.published : "0")} · by {article?.author}
                  </p>
               </div>
            </li>
         )) : null}
      </ul>
   );
};

const NewsListWithSkeleton = withSkeleton(NewsList, "item", PAGE_SIZE);

export default NewsListWithSkeleton;
