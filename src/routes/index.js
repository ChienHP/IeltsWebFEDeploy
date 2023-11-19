import IeltsTestLayout from "../components/Layouts/IeltsTestLayout";
import configs from "../configs";
import AdminIeltsListeningPart from "../pages/Admin-IeltsListeningPart";
import { IeltsReadingPassageDashboard } from "../pages/Dashboard/IeltsReadingPassageDashboard";
import IeltsReadingTestDashboard from "../pages/Dashboard/IeltsReadingTestDashboard";
import Home from "../pages/Home";
import IELTSCourses from "../pages/IELTS_Courses";
import IeltsListeningQuestions from "../pages/IeltsListeningQuestions";
import IeltsListeningTest from "../pages/IeltsListeningTest";
import IeltsListeningTestDashboard from "../pages/IeltsListeningTestDashboard";
import { IeltsReadingTest } from "../pages/IeltsReadingTest";
import { IeltsReadingTestList } from "../pages/IeltsReadingTestList";
import Registration from "../pages/Registration";



const publicRoutes = [
  {path: configs.routes.home, Component: Home },
  {path: configs.routes.ieltsCourses, Component: IELTSCourses},
  {path: configs.routes.ieltsReadingTestList, Component: IeltsReadingTestList},
  {path: configs.routes.ieltsReadingTest, Component: IeltsReadingTest},
  {path: configs.routes.registration, Component: Registration},

  // ielts-listening-test
  {path: configs.routes.ieltsListeningTest, Component: IeltsListeningTest, Layout: IeltsTestLayout},

  {path: configs.routes.ieltsListeningQuestions, Component: IeltsListeningQuestions},
];

const privateRoutes = [
  {path: configs.routes.ieltsListeningTestDashboard, Component: IeltsListeningTestDashboard},
  {path: configs.routes.adminIeltsListeningPart, Component: AdminIeltsListeningPart},
  {path: configs.routes.ieltsReadingTestDashboard, Component: IeltsReadingTestDashboard},
  {path: configs.routes.ieltsReadingPassageDashboard, Component: IeltsReadingPassageDashboard},
];

export { publicRoutes, privateRoutes };
