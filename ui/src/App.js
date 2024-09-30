import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AboutPage from './pages/AboutPage';
import BootcampsPage from './pages/BootcampsPage';
import AddBootcampPage from './pages/AddBootcampPage';
import AddReviewPage from './pages/AddReviewPage';

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
          <Route path="/review" element={<AddReviewPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
