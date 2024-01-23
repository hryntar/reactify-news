import { FC } from "react";
import { NewsType } from "../../types/NewsType";
import withSkeleton from "../../helpers/hocs/hoc/withSkeleton";
import styles from "./styles.module.scss";
import NewsBanner from "../NewsBanner/NewsBanner";

const BannersList: FC<{banners: NewsType[] | null}> = ({ banners }) => {
   return (
      <ul className={styles.banners}>
         {banners?.map((banner) => <NewsBanner key={banner?.id} news={banner} /> ) }
      </ul>
   );
};

const BannersListWithSkeleton = withSkeleton(BannersList, "banner", 6);

export default BannersListWithSkeleton;
