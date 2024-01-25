import "./style.css";
import TextToSpeech from "../../../components/TextToSpeech";
const HeroSection = () => {
  return (
    <section id="hero" className="hero d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <h1 data-aos="fade-up">WE TAKE YOUR <br></br>IELTS SCORE HIGHER</h1>
            <h2 data-aos="fade-up" data-aos-delay="400">
              Get ready for your 2024 IELTS exam by practicing our 100+ IELTS
              mock tests for FREE.
            </h2>
            <div data-aos="fade-up" data-aos-delay="600">
              <div className="text-center text-lg-start">
                  <button className="my-button-74 px-8 py-2">Get Started</button>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 hero-img"
            data-aos="zoom-out"
            data-aos-delay="200"
          >
            <img
              src="https://bootstrapmade.com/demo/templates/FlexStart/assets/img/hero-img.png"
              className="img-fluid"
              alt=""
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
