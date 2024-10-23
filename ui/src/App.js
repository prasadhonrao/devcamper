import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePage, AboutPage, NotFoundPage } from './pages';
import { LoginPage, RegisterPage, ManageAccountPage, ResetPasswordPage, UpdatePasswordPage } from './pages/user';
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
import { AuthProvider } from './contexts/AuthContext';
import Layout from './components/Layout';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/user/login" element={<LoginPage />} />
            <Route path="/user/register" element={<RegisterPage />} />
            <Route path="/user/password/reset" element={<ResetPasswordPage />} />
            <Route path="/user/password/update" element={<UpdatePasswordPage />} />
            <Route path="/user/manage" element={<ManageAccountPage />} />
            <Route path="/bootcamps" element={<BootcampsPage />} />
            <Route path="/bootcamps/:bootcampId" element={<BootcampDetailsPage />} />
            <Route path="/bootcamps/add" element={<AddBootcampPage />} />
            <Route path="/bootcamps/manage" element={<ManageBootcampsPage />} />
            <Route path="/bootcamps/:bootcampId/manage" element={<ManageBootcampPage />} />
            <Route path="/bootcamps/:bootcampId/courses/add" element={<AddCoursePage />} />
            <Route path="/bootcamps/:bootcampId/courses/manage" element={<ManageCoursesPage />} />
            <Route path="/bootcamps/:bootcampId/reviews" element={<BootcampReviewsPage />} />
            <Route path="/bootcamps/:bootcampId/reviews/manage" element={<ManageReviewsPage />} />{' '}
            <Route path="/bootcamps/:bootcampId/reviews/add" element={<AddReviewPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
