import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';

import LoginPage from './pages/user/LoginPage';
import UpdatePasswordPage from './pages/user/UpdatePasswordPage';
import ResetPasswordPage from './pages/user/ResetPasswordPage';

import RegisterPage from './pages/user/RegisterPage';
import ManageAccountPage from './pages/user/ManageAccountPage';

import BootcampsPage from './pages/bootcamps/BootcampsPage';
import BootcampDetailsPage from './pages/bootcamps/BootcampDetailsPage';

import ManageBootcampPage from './pages/bootcamps/ManageBootcampPage';
import AddBootcampPage from './pages/bootcamps/AddBootcampPage';

import ManageCoursesPage from './pages/bootcamps/ManageCoursesPage';
import AddCoursePage from './pages/bootcamps/AddCoursePage';

import BootcampReviewsPage from './pages/bootcamps/BootcampReviewsPage';
import ManageReviewsPage from './pages/bootcamps/ManageReviewsPage';
import AddReviewPage from './pages/bootcamps/AddReviewPage';

import ProtectedRoute from './routes/ProtectedRoute';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Router>
      <Layout isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/updatepassword" element={<UpdatePasswordPage/>} />
          <Route path="/resetpassword" element={<ResetPasswordPage/>} />
          <Route
            path="/account/manage"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <ManageAccountPage />
              </ProtectedRoute>
            }
          />
          <Route path="/bootcamps" element={<BootcampsPage />} />
          <Route path="/bootcamps/:bootcampId" element={<BootcampDetailsPage />} />
          <Route path="/bootcamps/add" element={<AddBootcampPage />} />
          <Route path="/bootcamps/:bootcampId/manage" element={<ManageBootcampPage />} />
          <Route path="/bootcamps/:bootcampId/courses/add" element={<AddCoursePage />} />
          <Route path="/bootcamps/:bootcampId/courses/manage" element={<ManageCoursesPage />} />
          <Route path="/bootcamps/:bootcampId/reviews" element={<BootcampReviewsPage />} />
          <Route path="/bootcamps/:bootcampId/reviews/manage" element={<ManageReviewsPage />} />{' '}
          <Route path="/bootcamps/:bootcampId/reviews/add" element={<AddReviewPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
