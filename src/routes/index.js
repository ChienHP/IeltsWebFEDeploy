import IeltsTestLayout from "../components/Layouts/IeltsTestLayout";
import SingleFileUploader from "../components/SingleFileUploader";
import configs from "../configs";
import AdminIeltsListeningPart from "../pages/Admin-IeltsListeningPart";
import AdminIeltsReadingPart from "../pages/Admin-IeltsReadingPart";
import IeltsReadingTestDashboard from "../pages/Dashboard/IeltsReadingTestDashboard";
import Home from "../pages/Home";
import IELTSCourses from "../pages/IELTS_Courses";
import IeltsListeningQuestions from "../pages/IeltsListeningQuestions";
import IeltsListeningTest from "../pages/IeltsListeningTest";
import IeltsListeningTestDashboard from "../pages/IeltsListeningTestDashboard";
import IeltsTestList from "../pages/IeltsTestList";
import IeltsWritingTest from "../pages/IeltsWritingTest";
import Login from "../pages/login";



const publicRoutes = [
  {path: configs.routes.home, Component: Home },
  {path: configs.routes.ieltsCourses, Component: IELTSCourses},


  {path: configs.routes.ieltsTestList, Component: IeltsTestList},

  // Login
  {path: configs.routes.login, Component: Login},

  // ielts-listening-test
  {path: configs.routes.ieltsListeningTest, Component: IeltsListeningTest, Layout: null, role: ['user']},
  {path: configs.routes.ieltsListeningQuestions, Component: IeltsListeningQuestions},

    {path: configs.routes.testSpeaking, Component: SpeakingDetailWrapper},

  // ielts-reading-test
  {path: configs.routes.ieltsReadingTest, Component: IeltsListeningTest, Layout: null},

  // ielts-writing-test
  {path: configs.routes.ieltsWritingTest, Component: IeltsWritingTest, Layout: null},

  {path: configs.routes.singleFileUploader, Component: SingleFileUploader},
];

const privateRoutes = [
  {path: configs.routes.ieltsListeningTestDashboard, Component: IeltsListeningTestDashboard},
  {path: configs.routes.adminIeltsListeningPart, Component: AdminIeltsListeningPart},
  {path: configs.routes.adminIeltsReadingPart, Component: AdminIeltsReadingPart},
  {path: configs.routes.ieltsReadingTestDashboard, Component: IeltsReadingTestDashboard},
];

export { publicRoutes, privateRoutes };
