import React, { useState, useEffect } from 'react';
import PhimBo from './component/PhimBo';
import PhimDeCu from './component/PhimDeCu';
import PhimLe from './component/PhimLe';
import PhimChieuRap from './component/PhimChieuRap';
import "./home.scss"
import PhimThinhHanh from './component/PhimThinhHanh';
import PhimMoiSapChieu from './component/PhimMoiSapChieu';
import { getData } from '../customHook';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

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
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getData();
        
        setFimlData({
          phimBo: data.phimBoData,
          phimLe: data.phimLeData,
          decu: data.shuffledMovies,
          phimChieuRap: data.tvShowData,
          phimThinhHanh: data.mixMovies,
          phimMoiSapChieu :data.phimHoatHinhData
        });
        setLoading(false);

      } catch (error) {
      }
      finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    loading ? <div>Loading...</div> : <>
      <div className='content'>
        <div className='container'>
        {loading ? (
          <>
            <Skeleton height={200} width={`100%`} count={1} />
            <Skeleton height={200} width={`100%`} count={1} />
            <Skeleton height={200} width={`100%`} count={1} />
            <Skeleton height={200} width={`100%`} count={1} />
            <Skeleton height={200} width={`100%`} count={1} />
            <Skeleton height={200} width={`100%`} count={1} />
          </>
        ) : (
          <>
            <PhimDeCu data={fimlData.decu} />
            <PhimLe data={fimlData.phimLe} />
            <PhimChieuRap data={fimlData.phimChieuRap} />
            <PhimBo data={fimlData.phimBo} />
            <PhimThinhHanh data={fimlData.phimThinhHanh} />
            <PhimMoiSapChieu data={fimlData.phimMoiSapChieu} />
          </>
        )}
        </div>
      </div>
    </>

  );
};

export default Home;