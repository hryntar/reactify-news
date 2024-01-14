import { FC } from "react";
import { formatTimeAgo } from "../utils/formatTimeAgo";
import { NewsType } from "../types/NewsType";

const NewsBanner: FC<{news: NewsType}> = ({news}) => {
   return (
      <div className="newsBanner">
         <div  className="newsBanner__img-ibg"><img src={news.image} alt="News image" /></div>
         <div className="newsBanner__body">
            <h3 className="newsBanner__title">{news.title}</h3>
            <p className="newsBanner__info">{formatTimeAgo(news.published)} · by {news.author}</p>
         </div>
      </div>
   );
};

export default NewsBanner;
