import { FC } from "react";
import { formatTimeAgo } from "../utils/formatTimeAgo";
import { NewsType } from "../types/NewsType";
import withSkeleton from "../helpers/hocs/hoc/withSkeleton";

const NewsBanner: FC<{news: NewsType}> = ({news}) => {
   return (
      <>
         {news ? (
            <div className="newsBanner">
            <div  className="newsBanner__img-ibg"><img src={news.image} alt="News image" /></div>
            <div className="newsBanner__body">
               <h3 className="newsBanner__title">{news.title}</h3>
               <p className="newsBanner__info">{formatTimeAgo(news.published)} · by {news.author}</p>
            </div>
         </div>
         ) : null }
      </>
      
   );
};

const NewsBannerWithSkeleton = withSkeleton(NewsBanner, "banner", 1)

export default NewsBannerWithSkeleton;
