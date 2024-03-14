import styles from "./styles.module.scss";
import NewsBanner from "@/entities/news/ui/NewsBanner/NewsBanner";
import withSkeleton from "@/shared/hocs/hoc/withSkeleton";
import { INews } from "@/entities/news";

interface Props {
   banners?: INews[] | null;
}

const BannersList = ({ banners }: Props) => {
   return (
      <ul className={styles.banners}>
         {banners?.map((banner) => (
            <NewsBanner key={banner?.id} news={banner} />
         ))}
      </ul>
   );
};

const BannersListWithSkeleton = withSkeleton(BannersList, "banner", 6);

export default BannersListWithSkeleton;
