import React, { useState, useEffect } from 'react';
import bootcampService from '../../services/bootcampService';
import { useAuth } from '../../contexts/AuthContext';

const ManageBootcampsPage = () => {
  const { user } = useAuth();
  const [bootcamps, setBootcamps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBootcamps = async () => {
      try {
        const res = await bootcampService.getBootcampsByPublisher(user.id);
        setBootcamps(res.data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchBootcamps();
    }
  }, [user]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

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
                  </tr>
                </thead>
                <tbody>
                  {bootcamps.map((b) => (
                    <tr key={b.id}>
                      <td>{b.name}</td>
                      <td>{b.averageRating}</td>
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
