import React from "react";
import ReactPaginate from 'react-paginate';
import {useDispatch, useSelector} from "react-redux";
import {getMoviesByPage} from "../redux/actions/movieAction";

function Paging() {

    // redux state
    const {pageCount, word} = useSelector(state => state);

    // redux dispatch
    const dispatch = useDispatch();

    const handlePageClick = (data) => {
        dispatch(getMoviesByPage(data.selected + 1, word));
    }

    return (
        <>
        <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            containerClassName={"pagination justify-content-center py-5"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
        />
        </>
    );
}

export default Paging;