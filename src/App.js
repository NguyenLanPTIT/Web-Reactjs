import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import MovieDetailPage from './pages/MovieDetailPage';
import Categories from './pages/Categories';
import Watch from './pages/Watch';
import Search from './pages/Search';
import NotFound from './pages/NotFound';


function App() {
    return (
        <Router >
            <Layout >
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movies" element={<Home />} />
                    <Route path="/movies/:slug" element={<MovieDetailPage />} />
                    <Route path="/categories/:category" element={<Categories />} />
                    <Route path="/xem/:slug" element={<Watch />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;