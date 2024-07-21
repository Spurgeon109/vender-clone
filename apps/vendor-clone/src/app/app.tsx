import * as React from 'react';
import { Header } from '@vendr-clone/header'
import  Home  from '../components/home/home'
import { Link, Route, Routes } from 'react-router-dom';

// const Marketplace = React.lazy(() => import('marketplace/Module'));

// const Procurement = React.lazy(() => import('procurement/Module'));

// const Intelligence = React.lazy(() => import('intelligence/Module'));

export function App() {
  return (
    <div>
    <Header></Header>
    <React.Suspense fallback={null}>

      <Routes>
        <Route path="/" element={<Home></Home>}/>

        {/* <Route path="/marketplace" element={<Marketplace />} />

        <Route path="/procurement" element={<Procurement />} />

        <Route path="/intelligence" element={<Intelligence />} /> */}
      </Routes>
    </React.Suspense>
    </div>
  );
}

export default App;
