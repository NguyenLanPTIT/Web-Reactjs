import React, { useState, useEffect } from 'react';
import PhimBo from './component/PhimBo';
import PhimDeCu from './component/PhimDeCu';
import PhimLe from './component/PhimLe';
import PhimChieuRap from './component/PhimChieuRap';
import "./home.scss"
import PhimThinhHanh from './component/PhimThinhHanh';
import PhimMoiSapChieu from './component/PhimMoiSapChieu';
const Home = () => {
  const [fimlData, setFimlData] = useState(
    {
      decu: [],
      phimBo: [],
      phimLe: [],
      phimChieuRap :[],
      phimThinhHanh :[],
      phimMoiSapChieu :[],
    }
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const [responseOne, responseTwo, responseThree, responseFour] = await Promise.all([
          fetch('https://phimapi.com/v1/api/danh-sach/phim-le?skip=1&limit=64'),
          fetch('https://phimapi.com/v1/api/danh-sach/phim-bo?skip=1&limit=64'),
          fetch('https://phimapi.com/v1/api/danh-sach/hoat-hinh?skip=1&limit=64'),
          fetch('https://phimapi.com/v1/api/danh-sach/tv-shows?skip=1&limit=64')
        ]);

        const phimLeData = await responseOne.json();
        const phimBoData = await responseTwo.json();
        const phimHoatHinhData = await responseThree.json();
        const tvShowData = await responseFour.json();
        const featureMovies = phimLeData.data.items.map(movie => ({
          ...movie,
          titlePage: phimLeData.data.titlePage
      }));

      const seriesMovies = phimBoData.data.items.map(movie => ({
        ...movie,
        titlePage: phimBoData.data.titlePage
    }));



        const combinedMovies = [...phimLeData.data.items, ...phimBoData.data.items, ...phimHoatHinhData.data.items, ...tvShowData.data.items];
        const shuffledMovies = combinedMovies.sort(() => 0.5 - Math.random());

        const mixMovies = [...featureMovies, ...seriesMovies];


        setFimlData({
          phimBo: phimBoData,
          phimLe: phimLeData,
          deCu: shuffledMovies,
          phimChieuRap :tvShowData,
          phimThinhHanh :mixMovies,
          phimMoiSapChieu :phimHoatHinhData,

        })
        setLoading(false);

      } catch (error) {
      }
      finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    loading ? <div>Loading...</div> : <>
      <div className='content'>
        <div className='container'>
          <PhimDeCu data={fimlData.deCu} />
          <PhimLe  data={fimlData.phimLe}/>
          <PhimChieuRap data={fimlData.phimChieuRap} />
          <PhimBo  data={fimlData.phimBo}/>
          <PhimThinhHanh data={fimlData.phimThinhHanh}/>
          <PhimMoiSapChieu data={fimlData.phimMoiSapChieu}/>
        </div>
      </div>
    </>

  );
};

export default Home;