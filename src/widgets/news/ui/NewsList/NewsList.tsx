import { PAGE_SIZE } from "@/shared/constants/constants";
import "./NewsList.scss";
import { INews } from "@/entities/news";
import { formatTimeAgo } from "@/shared/utils/formatTimeAgo";
import withSkeleton from "@/shared/hocs/hoc/withSkeleton";

interface Props {
   news?: INews[];
}

const NewsList = ({ news }: Props) => {
   return (
      <ul className="newsList">
         {news
            ? news.map((article) => (
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
              ))
            : null}
      </ul>
   );
};

const NewsListWithSkeleton = withSkeleton(NewsList, "item", PAGE_SIZE);

export default NewsListWithSkeleton;
