import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Footer from './Pages/Shared/Footer/Footer';
import Navigation from './Pages/Shared/Navigation/Navigation';
import AddItem from './Pages/Home/AddItem/AddItem';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import ItemUpdate from './Pages/Home/ItemUpdate/ItemUpdate';


function App() {
    return (
        <div className="App">
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/additem"
                    element={
                        <RequireAuth>
                            <AddItem />
                        </RequireAuth>
                    }
                />
                <Route
                    path="/inventory/:itemId"
                    element={
                        <RequireAuth>
                            <ItemUpdate />
                        </RequireAuth>
                    }
                />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
            <Footer />
            <ToastContainer />
        </div>
    );
}

export default App;
