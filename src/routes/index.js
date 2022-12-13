import Home from "../pages/Home";
import IeltsReadingTest from "../pages/IeltsReadingTest";
import IELTSCourses from "../pages/IELTS_Courses";
const publicRoutes = [
  { path: "/", Component: Home },
  // { path: "/reading", Component: IeltsReadingTest, Layout: null },
  // { path: "/video", Component: IeltsNguyenHuyenVideo }
  {path: "/ielts-courses", Component: IELTSCourses},
  {path: "/ielts-reading-test", Component: IeltsReadingTest}
];

// const privateRoutes = [];

export { publicRoutes };
