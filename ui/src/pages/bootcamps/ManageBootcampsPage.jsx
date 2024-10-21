import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import bootcampService from '../../services/bootcampService';

const ManageBootcampsPage = () => {
  const { publisherId } = useParams();
  const [bootcamps, setBootcamps] = useState([]);

  useEffect(() => {
    const fetchBootcamp = async () => {
      const res = await bootcampService.getBootcampsByPublisher(publisherId);
      setBootcamps(res.data);
    };
    fetchBootcamp();
  }, [publisherId]);

  return (
    <section className="container mt-5">
      <div className="row">
        <div className="col-md-8 m-auto">
          <div className="card bg-white py-2 px-4">
            <div className="card-body">
              <h1 className="mb-4">Manage Bootcamps</h1>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Bootcamp</th>
                    <th scope="col">Rating</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {bootcamps.map((b) => (
                    <tr>
                      <td>{b.name}</td>
                      <td>{b.rating}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManageBootcampsPage;
