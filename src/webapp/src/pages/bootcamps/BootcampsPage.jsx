import React, { useState, useEffect } from 'react';
import { Oval } from 'react-loader-spinner';
import { Bootcamp } from '../../components';
import bootcampService from '../../services/bootcampService';
import Pagination from '../../components/Pagination';

const BootcampsPage = () => {
  const [bootcamps, setBootcamps] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [totalRec, setTotalRec] = useState();
  const [itemsPerPage, setItemsPerPage] = useState([5]);  // Default items per page
  const [currentPage, setCurrentPage] = useState([1]);
  const [pagination, setPagination] = useState([]);

  // Load bootcamps from API
  useEffect(() => {
    const fetchBootcamps = async () => {
      try {
        const fields = ['photo', 'name', 'averageRating', 'location', 'careers', 'id'];
        var page = currentPage;
        var limit = itemsPerPage;
        const res = await bootcampService.getBootcamps(fields, page, limit);
        console.log('res',res);
        setBootcamps(res.data);
        setPagination(res.pagination);
        setTotalRec(res.total)
        setFetchError(null);
      } catch (error) {
        setFetchError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBootcamps();
  }, [currentPage]);

  const handlePaginationChange = (selectedPage) => {
    const newPage = selectedPage.selected + 1;
    setCurrentPage([newPage])
    setItemsPerPage([5])
  };

  return (
    <section className="browse my-5">
      <div className="container">
        {loading ? (
          <div className="loader-container">
            <Oval height="80" width="80" color="red" ariaLabel="oval-loading" />
          </div>
        ) : fetchError ? (
          <p className="text-danger">{fetchError}</p>
        ) : (
          <div className="row">
            {bootcamps.map((bootcamp) => (
              <div key={bootcamp.id} className="col-md-6 mb-4">
                <Bootcamp {...bootcamp} />
              </div>
            ))}
          </div>
        )}
        <Pagination totalRec={totalRec} itemsPerPage={itemsPerPage} currentPage={currentPage} paginationData={pagination} onPageChange={handlePaginationChange} />
      </div>
    </section>
  );
};

export default BootcampsPage;
