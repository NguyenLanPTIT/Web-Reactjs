import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Categories from './pages/Categories';
import Search from './pages/Search';
import NotFound from './pages/NotFound';


function App() {
    return (
            <Router >
                <Layout >
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/movies" element={<Home />} />
                        <Route path="/movies/:id" element={<Movies />} />
                        <Route path="/categories" element={<Categories />} />
                        <Route path="/search" element={<Search />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Layout>
            </Router>
    );
}

export default App;