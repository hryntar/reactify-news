import LatestNews from "./LatestNews/LatestNews";
import { NewsByFilters } from "./NewsByFilters/NewsByFilters";

const Main = () => {
   return (
      <main className="main">
         <div className="main__container">
            <LatestNews />
            <NewsByFilters />
         </div>
      </main>
   );
};

export default Main;
