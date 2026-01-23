import React from "react";
import { Routes, Route } from "react-router-dom";
import NetflixTitle from "./NetflixTitle";
import ProfilePage from "./profilePage/profilePage";
import Browse from "./browse/browse";
import WorkPermit from "./pages/WorkPermit";
import WorkExperience from "./pages/WorkExperience";
import Recommendations from "./pages/Recommendations";
import Skillsnew from "./pages/Skillsnew";
import Projects from "./pages/Projects";
import Layout from "./Layout";
import Music from "./pages/Music";
import Reading from "./pages/Reading";
import Blogs from "./pages/Blogs";
import Certifications from "./pages/Certifications";
import HireMePage2 from "./pages/HireMePage2";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<NetflixTitle />} />
      <Route path="/browse" element={<Browse />} />
      <Route
        path="/profile/:profileName"
        element={
          <Layout>
            <ProfilePage />
          </Layout>
        }
      />
      <Route
        path="/work-permit"
        element={
          <Layout>
            <WorkPermit />
          </Layout>
        }
      />
      <Route
        path="/work-experience"
        element={
          <Layout>
            <WorkExperience />
          </Layout>
        }
      />
      <Route
        path="/recommendations"
        element={
          <Layout>
            <Recommendations />
          </Layout>
        }
      />
      <Route
        path="/Skillsnew"
        element={
          <Layout>
            <Skillsnew />
          </Layout>
        }
      />
      <Route
        path="/projects"
        element={
          <Layout>
            <Projects />
          </Layout>
        }
      />
      <Route
        path="/music"
        element={
          <Layout>
            <Music />
          </Layout>
        }
      />
      <Route
        path="/reading"
        element={
          <Layout>
            <Reading />
          </Layout>
        }
      />
      <Route
        path="/blogs"
        element={
          <Layout>
            <Blogs />
          </Layout>
        }
      />
      <Route
        path="/certifications"
        element={
          <Layout>
            <Certifications />
          </Layout>
        }
      />
      <Route
        path="/hire-me-v2"
        element={
          <Layout>
            <HireMePage2 />
          </Layout>
        }
      />
    </Routes>
  );
};

export default App;
