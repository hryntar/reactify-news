import { FC } from "react";
import { formatTimeAgo } from "../../utils/formatTimeAgo";
import { NewsType } from "../../types/NewsType";
import "./NewsBanner.scss";

const NewsBanner: FC<{ news: NewsType }> = ({ news }) => {
   return (
      <>
         {news ? (
            <div className="newsBanner">
               <div className="newsBanner__img-ibg">
                  <img src={news.image} alt="News image" />
               </div>
               <div className="newsBanner__body">
                  <h3 className="newsBanner__title">{news.title.substring(0, 70)}...</h3>
                  <p className="newsBanner__info">
                     {formatTimeAgo(news.published)} · by {news.author.substring(0, 20)}
                  </p>
               </div>
            </div>
         ) : null}
      </>
   );
}; 

export default NewsBanner;
