import React, { useEffect, useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import Pagination from 'react-bootstrap/Pagination';

function PaginationComponent({ totalRec, itemsPerPage, currentPage, paginationData, onPageChange }) {

  const [pageCount, setPageCount] = useState(Math.ceil(totalRec / itemsPerPage));

  // useEffect(() => {
  //   setPageCount(Math.ceil(totalRec / itemsPerPage));
  // }, [totalRec, itemsPerPage]);


  const totalPages = Math.ceil(totalRec / itemsPerPage);

  const items = [];
  for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
    items.push(
      <Pagination.Item key={pageNumber} active={pageNumber === currentPage[0]} onClick={() => onPageChange(pageNumber)}>
        {pageNumber}
      </Pagination.Item>
    );
  }

  return (
    <div className=''>
      <Row>
        <Col md={4}>
          {/* <ReactPaginate
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
          /> */}
          <div>
            <Pagination>
              <Pagination.First onClick={() => onPageChange(1)} disabled={currentPage[0] > 1 ? false : true } />
              <Pagination.Prev onClick={() => onPageChange(currentPage[0] - 1)} disabled={currentPage[0] > 1 ? false : true } />
              {items}
              <Pagination.Next onClick={() => onPageChange(currentPage[0] + 1)} disabled={currentPage[0] < totalPages ? false : true } />
              <Pagination.Last onClick={() => onPageChange(totalPages)} disabled={currentPage[0] < totalPages ? false : true } />
            </Pagination>
          </div>
        </Col>
      </Row>

    </div>
  );
};

export default PaginationComponent;
