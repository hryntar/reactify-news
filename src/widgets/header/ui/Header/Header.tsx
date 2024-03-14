import { formatDate } from "@/shared/utils/formatDate";
import "./Header.scss";

const Header = () => {
   return (
      <header className="header">
         <div className="header__container">
            <h1 className="header__title">Reactify News</h1>
            <p className="header__date">{formatDate(new Date())}</p>
         </div>
      </header>
   );
};

export default Header;
