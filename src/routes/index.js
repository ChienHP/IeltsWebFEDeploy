import Home from "../pages/Home";
import {IeltsReadingTest} from "../pages/IeltsReadingTest";
import IELTSCourses from "../pages/IELTS_Courses";
import IeltsReadingTestDashboard from "../pages/Dashboard/IeltsReadingTestDashboard";
import { IeltsReadingTestList } from "../pages/IeltsReadingTestList";
import { IeltsReadingPassageDashboard } from "../pages/Dashboard/IeltsReadingPassageDashboard";
import Registration from "../pages/Registration";
import IeltsListeningQuestions from "../pages/IeltsListeningQuestions";
import {IeltsListeningTestDashboard} from "../pages/Dashboard/IeltsListeningTestDashboard";
import IeltsListeningTestList from "../pages/IeltsListeningTest/IeltsListeningTestList/";
import AddIeltsListeningTest from "../pages/IeltsListeningTest/AddIeltsListeningTest";
import config from "../configs"

const publicRoutes = [
  {path: config.routes.home, Component: Home },
  {path: config.routes.ieltsCourses, Component: IELTSCourses},
  {path: config.routes.ieltsReadingTestList, Component: IeltsReadingTestList},
  {path: config.routes.ieltsReadingTest, Component: IeltsReadingTest},
  {path: config.routes.registration, Component: Registration},

  // ielts-listening-test
  {path: config.routes.ieltsListeningTestList, Component: IeltsListeningTestList},
  {path: config.routes.addIeltsListeningTest, Component: AddIeltsListeningTest},
  {path: config.routes.detailIeltsListeningTest, Component: AddIeltsListeningTest},
  {path: config.routes.ieltsListeningQuestions, Component: IeltsListeningQuestions},
];

const privateRoutes = [
  {path: config.routes.ieltsReadingTestDashboard, Component: IeltsReadingTestDashboard},
  {path: config.routes.ieltsReadingPassageDashboard, Component: IeltsReadingPassageDashboard},
  {path: config.routes.ieltsListeningTestDashboard, Component: IeltsListeningTestDashboard}
];

export { publicRoutes, privateRoutes };
