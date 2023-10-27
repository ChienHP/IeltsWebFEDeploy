import Home from "../pages/Home";
import {IeltsReadingTest} from "../pages/IeltsReadingTest";
import IELTSCourses from "../pages/IELTS_Courses";
import IeltsReadingTestDashboard from "../pages/Dashboard/IeltsReadingTestDashboard";
import { IeltsReadingTestList } from "../pages/IeltsReadingTestList";
import { IeltsReadingPassageDashboard } from "../pages/Dashboard/IeltsReadingPassageDashboard";
import Registration from "../pages/Registration";
import IeltsListeningQuestions from "../pages/IeltsListeningQuestions";
import {IeltsListeningTestDashboard} from "../pages/Dashboard/IeltsListeningTestDashboard";
import IeltsListeningTest from "../pages/IeltsListeningTest";

const publicRoutes = [
  {path: "/", Component: Home },
  {path: "/ielts-courses", Component: IELTSCourses},
  {path: "/ielts-reading-test-list", Component: IeltsReadingTestList},
  {path: "/ielts-reading-test/:testId", Component: IeltsReadingTest},
  {path: "/registration", Component: Registration},
  {path: "/ielts-listening-questions", Component: IeltsListeningQuestions},
  {path: "/ielts-listening-test", Component: IeltsListeningTest}
];

const privateRoutes = [
  {path: "/admin/ielts-reading-test", Component: IeltsReadingTestDashboard},
  {path: "/admin/:testId/ielts-reading-passage", Component: IeltsReadingPassageDashboard},
  {path: "/admin/:testId/ielts-listening-test", Component: IeltsListeningTestDashboard}
];

export { publicRoutes, privateRoutes };
