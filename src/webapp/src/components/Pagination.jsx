import React, { useEffect, useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import Pagination from 'react-bootstrap/Pagination';
import { Link } from 'react-router-dom';

function PaginationComponent({ totalRec, itemsPerPage, currentPage, paginationData, onPageChange, isAdmin, keyword = ''}) {

  const totalPages = Math.ceil(totalRec / itemsPerPage);

  return (

    totalPages > 1 && (
      <Pagination>
        {[...Array(totalPages).keys()].map((x) => (
          <Pagination.Item
            as={Link}
            key={x + 1}
            to={`/bootcamps?page=${x + 1}&limit=5`}
            active={x + 1 === totalRec}
            onClick={() => onPageChange(x + 1)}
          >
            {x + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    )
  );
};

export default PaginationComponent;
