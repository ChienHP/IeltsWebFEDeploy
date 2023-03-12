import Home from "../pages/Home";
import {IeltsReadingTest} from "../pages/IeltsReadingTest";
import IELTSCourses from "../pages/IELTS_Courses";
import IeltsReadingTestDashboard from "../pages/Dashboard/IeltsReadingTestDashboard";
import { IeltsReadingTestList } from "../pages/IeltsReadingTestList";
import { IeltsReadingPassageDashboard } from "../pages/Dashboard/IeltsReadingPassageDashboard";


const publicRoutes = [
  {path: "/", Component: Home },
  {path: "/ielts-courses", Component: IELTSCourses},
  {path: "/ielts-reading-test-list", Component: IeltsReadingTestList},
  {path: "/ielts-reading-test/:testId", Component: IeltsReadingTest},
];

const privateRoutes = [
  {path: "/admin/ielts-reading-test", Component: IeltsReadingTestDashboard},
  {path: "/admin/:testId/ielts-reading-passage", Component: IeltsReadingPassageDashboard}
];

export { publicRoutes, privateRoutes };
