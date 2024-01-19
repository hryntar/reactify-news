import { FC } from "react";

interface IProps {
   totalPages: number;
   setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
   currentPage: number;
}

const Pagination: FC<IProps> = ({ totalPages, setCurrentPage, currentPage }) => {
   const handlePageClick = (pageNumber: number) => {
      if (pageNumber < 1 || pageNumber > totalPages) return;
      setCurrentPage(pageNumber);
   };

   return (
      <div className="pagination__container">
         <ul className="pagination__list">
            <button onClick={() => handlePageClick(currentPage - 1)} className="pagination__button">
               {"<"}
            </button> 
            {[...Array(totalPages)].map((_, idx) => (
               <li className="pagination__item" key={idx}>
                  <button onClick={() => setCurrentPage(idx + 1)} className={`pagination__button ${currentPage === idx + 1 ? `_current` : null}`}>
                     {idx + 1}
                  </button>
               </li>
            ))}
            <button onClick={() => handlePageClick(currentPage + 1)} className="pagination__button">
               {">"}
            </button>
         </ul> 
      </div>
   );
};

export default Pagination;
