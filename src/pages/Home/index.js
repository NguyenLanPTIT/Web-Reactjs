import React from 'react';
import PhimBo from './component/PhimBo';
import PhimDeCu from './component/PhimDeCu';
import PhimLe from './component/PhimLe';
import PhimChieuRap from './component/PhimChieuRap';
import "./home.scss"
import PhimThinhHanh from './component/PhimThinhHanh';
import PhimMoiSapChieu from './component/PhimMoiSapChieu';

const Home = () => {
  return (
    <div className='content'>
      <div className='container'>
        <PhimDeCu />
        <PhimLe />
        <PhimChieuRap />
        <PhimBo />
        <PhimThinhHanh />
        <PhimMoiSapChieu />
      </div>
    </div>
  );
};

export default Home;