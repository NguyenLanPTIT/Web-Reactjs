import React from 'react';
import PhimBo from './component/PhimBo';
import PhimDeCu from './component/PhimDeCu';
import PhimLe from './component/PhimLe';
import PhimChieuRap from './component/PhimChieuRap';
import "./home.scss"
import PhimThinhHanh from './component/PhimThinhHanh';

const Home = () => {
  return (
    <div className='container'>
      <PhimDeCu />
      <PhimLe />
      <PhimChieuRap />
      <PhimBo />
      <PhimThinhHanh />
    </div>
  );
};

export default Home;