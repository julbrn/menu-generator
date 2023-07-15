import React from 'react';

const Pagination = ({ dishesPerPage, totalDishes, currentPage, paginate, goToNextPage, goToPrevPage }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalDishes / dishesPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <div className="pagination">
            <ul className="pagination__numbers">
                {pageNumbers.map(number => (<li onClick={() => paginate(number)} className={`pagination__cell ${currentPage === number ? "pagination__cell_active" : ""}`} key={number}>
                    <a className="pagination__number">{number}</a>
                </li>)
                )}
            </ul>
            <div className="pagination__buttons">
                <button className="pagination__button" onClick={goToPrevPage}>← prev</button>
                <button className="pagination__button" onClick={goToNextPage}>next →</button>
            </div>
        </div >
    )
}

export default Pagination