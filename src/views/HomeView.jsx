import React from "react";
import Header from "../components/Header";
import Skip from "../components/Skip";
import Skill from "../components/Skill";
import Project from "../components/project";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Aboutme from "../components/Aboutme";
import Stack from "../components/Stack";
const HomeView = () => {
  return (
    <>
        <Skip />
        <Header />
        <Main>
          <Aboutme />
            <Stack />
          <Skill />
          <Project />
          <Contact />
        </Main>
        <Footer />
    </>
  )
}

export default HomeView