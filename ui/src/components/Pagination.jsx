import React, { useEffect, useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';

const Pagination = (total) => {

  const [pageNo, setPageNo] = useState(1);
  const [totalRec, setTotalrec] = useState(total.TotalCount);

  const pagginationHandler = (page) => {
    const currentPage = page.selected + 1;
    setPageNo(currentPage);
  };

  useEffect(() => {
    setTotalrec(total.TotalCount);
  }, [total.TotalCount])

  return (
    <div className=''>
      <Row>
        <Col md={4}>
          <ReactPaginate
            // nextLabel={<FontAwesomeIcon icon="chevron-right" size="sm" className="m-auto" />}
            onPageChange={pagginationHandler}
            pageRangeDisplayed={1}
            marginPagesDisplayed={1}
            pageCount={totalRec}
            forcePage={1}
            // previousLabel={<FontAwesomeIcon icon="chevron-left" size="sm" className="m-auto" />}
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
            activeClassName="active"
            renderOnZeroPageCount={null}
          />
        </Col>
      </Row>

    </div>
  );
};

export default Pagination;
