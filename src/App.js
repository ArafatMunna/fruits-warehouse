import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Footer from './Pages/Shared/Footer/Footer';
import Navigation from './Pages/Shared/Navigation/Navigation';

function App() {
    return (
        <div>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            <Footer />
            <ToastContainer />
        </div>
    );
}

export default App;
