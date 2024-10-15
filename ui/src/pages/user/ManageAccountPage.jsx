import { useState, useEffect } from 'react';
import authService from '../../services/authService';

const ManageAccountPage = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
  });

  useEffect(() => {
    const getUser = async () => {
      const response = await authService.getMe();
      setUser(response.data);
    };
    getUser();
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.updateUser(user);
      alert('User updated successfully');
    } catch (error) {
      console.error(error);
      alert('Failed to update user. Please try again.');
    }
  };

  return (
    <section className="container mt-5">
      <div className="row">
        <div className="col-md-8 m-auto">
          <div className="card bg-white py-2 px-4">
            <div className="card-body">
              <h1 className="mb-2">Manage Account</h1>
              <form>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    name="title"
                    className="form-control"
                    placeholder="Name"
                    value={user.name || ''}
                    onChange={(e) => onChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    value={user.email || ''}
                    onChange={(e) => onChange(e)}
                  />
                </div>
                <div className="form-group">
                  <div className="row">
                    <div className="col-md-6">
                      <input type="submit" value="Save" onClick={onSubmit} className="btn btn-success btn-block" />
                    </div>
                    <div className="col-md-6">
                      <a href="update-password.html" className="btn btn-secondary btn-block">
                        Update Password
                      </a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ManageAccountPage;
