import withSkeleton from "../../helpers/hocs/hoc/withSkeleton";
import styles from "./styles.module.scss";
import NewsBanner from "../NewsBanner/NewsBanner";
import { INews } from "../../interfaces";

interface Props {
   banners?: INews[] | null;
}

const BannersList = ({ banners }: Props) => {
   return (
      <ul className={styles.banners}>
         {banners?.map((banner) => <NewsBanner key={banner?.id} news={banner} /> ) }
      </ul>
   );
};

const BannersListWithSkeleton = withSkeleton(BannersList, "banner", 6);

export default BannersListWithSkeleton;
