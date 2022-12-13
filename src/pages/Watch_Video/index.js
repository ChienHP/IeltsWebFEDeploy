import { useEffect, useState } from "react";

const IeltsNguyenHuyenVideo = () => {
  const [videos, setVideos] = useState([{
    id: 1,
    source: 'https://drive.google.com/file/d/1rp2D58eWSM5T1-klP_5Md05kgcAUCced/preview'
  }]);
  const [currentVidId, setCurrentVidId] = useState(1)
  useEffect(() => {
    fetch("http://localhost:3000/video/list")
      .then((res) => res.json())
      .then((data) => {
        setVideos(() => {
          console.log(data);
          return data;
        });
      });
  }, []);
  return( 
  <div>
  <h1>IeltsNguyenHuyenVideo</h1>
  <ul>
    {videos.map((video, index) => {
      return (
        <div key={index}> 
          <li>{video.source}</li>
          <button onClick={() => setCurrentVidId(video.id)}>Play</button>
        </div>
      )
    })}
  </ul>
    {<iframe title="video" allowFullScreen={true} src={videos[currentVidId-1].source} height="300" width="600"></iframe>}
  </div>
  )
};

export default IeltsNguyenHuyenVideo;
