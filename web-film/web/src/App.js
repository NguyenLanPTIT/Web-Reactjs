import './App.css';
import Header from './components/Header';
import PhimBo from './components/PhimBo';
import PhimDeCu from './components/PhimDeCu';
import PhimLe from './components/Phimle';


function App() {
  
  return (
    <>
      <body>
        <Header />
        <div className='container'>
          <PhimDeCu></PhimDeCu>
          <PhimLe></PhimLe>
          <PhimBo></PhimBo>
        </div>
      </body>
    </>
  );
}

export default App;
