import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Header, Footer } from './components';
import { HomePage, AboutPage, NotFoundPage } from './pages';
import { LoginPage, RegisterPage, ManageAccountPage } from './pages/user';
import {
  AddBootcampPage,
  AddCoursePage,
  AddReviewPage,
  BootcampDetailsPage,
  BootcampReviewsPage,
  BootcampsPage,
  ManageBootcampPage,
  ManageBootcampsPage,
  ManageCoursesPage,
  ManageReviewsPage,
} from './pages/bootcamps';

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
    <BrowserRouter>
      <Header />
      <main>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/register" element={<RegisterPage />} />
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
          <Route path="/bootcamps/manage" element={<ManageBootcampsPage />} />
          <Route
            path="/bootcamps/:bootcampId/manage"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <ManageBootcampPage />
              </ProtectedRoute>
            }
          />
          <Route path="/bootcamps/:bootcampId/courses/add" element={<AddCoursePage />} />
          <Route path="/bootcamps/:bootcampId/courses/manage" element={<ManageCoursesPage />} />
          <Route path="/bootcamps/:bootcampId/reviews" element={<BootcampReviewsPage />} />
          <Route path="/bootcamps/:bootcampId/reviews/manage" element={<ManageReviewsPage />} />{' '}
          <Route
            path="/bootcamps/:bootcampId/reviews/add"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <AddReviewPage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
