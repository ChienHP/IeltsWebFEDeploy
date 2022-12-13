import "./style.css";
const IELTSCourses = () => {
  return (
    <div>
      <div className="card" style={{ width: 18 + "rem" }}>
        <img
          src="https://ielts-nguyenhuyen.com/wp-content/uploads/2018/01/ielts-reading-online-520x520.png"
          className="card-img-top"
          alt="IELTS"
        ></img>
        <div className="card-body">
          <h5 className="card-title">
            IELTS Reading Online
            <br></br>
            <h6>(IELTS Nguyễn Huyền)</h6>
          </h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            START
          </a>
        </div>
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://ielts-nguyenhuyen.com/wp-content/uploads/2018/09/ielts-listening-online-750x750.png.webp"
          className="card-img-top"
          alt="IELTS"
        ></img>
        <div className="card-body">
          <h5 className="card-title">
            IELTS Listening Online
            <br></br>
            <h6>(IELTS Nguyễn Huyền)</h6>
          </h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            START
          </a>
        </div>
      </div>
    </div>
  );
};
export default IELTSCourses;
