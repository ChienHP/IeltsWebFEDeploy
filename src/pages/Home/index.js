import { Fragment } from "react";
import HeroSection from "./HeroSection";
import PopularCourses from "./PopularCourses";
import "./style.css";
const Home = () => {
  return (
    <Fragment>
      <HeroSection></HeroSection>
      <PopularCourses></PopularCourses>
    </Fragment>
  );
};
export default Home;
