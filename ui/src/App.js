import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AboutPage from './pages/AboutPage';
import BootcampsPage from './pages/BootcampsPage';
import AddBootcampPage from './pages/AddBootcampPage';
import AddReviewPage from './pages/AddReviewPage';
import ManageCourse from './pages/ManageCourse';

function App() {
  return (
    <Router>
      <Layout />
      <div>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/register" element={<RegisterPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/bootcamps" element={<BootcampsPage />} />
          <Route path="/bootcamps/add" element={<AddBootcampPage />} />
          <Route path="/bootcamps/:bootcampId/reviews/add" element={<AddReviewPage />} />
          <Route path="/manage-course" element={<ManageCourse />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
