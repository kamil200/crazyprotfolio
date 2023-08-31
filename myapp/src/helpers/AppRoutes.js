import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import About from '../page/About';
import Connect from '../page/Connect';
import Work from '../page/Work';
import Construction from '../components/Construction';
import AGif from '../components/AGif';
import RealResume from '../components/RealResume';
import Instagram from '../components/Instagram';
import Snapchat from '../components/Snapchat';
import Resume from '../page/Resume';
import Facebook from '../components/Facebook';
import Projects from '../page/Projects';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Construction /></Layout>} />
      <Route path="/about" element={<Layout><About /></Layout>} />
      <Route path="/work" element={<Layout><Work /></Layout>} />
      <Route path="/connect" element={<Layout><Connect /></Layout>} />
      <Route path="/AGif" element={<Layout><AGif /></Layout>} />
      <Route path="/Rresume" element={<Layout><RealResume /></Layout>} />
      <Route path="/insta" element={<Instagram /> }/>
      <Route path="/snapchat" element={<Layout><Snapchat /></Layout>} />
      <Route path="/resume" element={<Layout><Resume /></Layout>} />
      <Route path="/facebook" element={<Facebook />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}

export default AppRoutes;
