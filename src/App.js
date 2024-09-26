import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import MovieDetailPage from './pages/MovieDetailPage';
import Categories from './pages/Categories';
import Watch from './pages/Watch';
import FootLink from './pages/FootLink';


function App() {
    return (
        <Router >
            <Layout >
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movies" element={<Home />} />
                    <Route path="/movies/:slug" element={<MovieDetailPage />} />
                    <Route path="/categories/:category" element={<Categories />} />
                    <Route path="/xem/:slug/:episodeName?" element={<Watch />} />
                    <Route path="/post/:info" element={<FootLink />} />
                    <Route path="/categories/:category/page/:pageNumber" element={<Categories />} /> 
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;