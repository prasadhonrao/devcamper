import React, { useEffect, useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';

function Pagination({ totalRec, itemsPerPage, currentPage, paginationData, onPageChange }) {

  const [pageCount, setPageCount] = useState(Math.ceil(totalRec / itemsPerPage));

  useEffect(() => {
    setPageCount(Math.ceil(totalRec / itemsPerPage));
  }, [totalRec, itemsPerPage]);

  return (
    <div className=''>
      <Row>
        <Col md={4}>
          <ReactPaginate
            pageCount={pageCount}
            onPageChange={onPageChange}
            activeClassName="active"
            pageRangeDisplayed={1}
            marginPagesDisplayed={1}
            forcePage={currentPage - 1}
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination justify-content-between d-flex "
            renderOnZeroPageCount={null}
          />
        </Col>
      </Row>

    </div>
  );
};

export default Pagination;
