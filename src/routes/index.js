import DefaultLayouts from "../components/Layouts/DefaultLayouts";
import IeltsTestLayout from "../components/Layouts/IeltsTestLayout";
import SingleFileUploader from "../components/SingleFileUploader";
import configs from "../configs";
import AdminIeltsListeningPart from "../pages/Admin-IeltsListeningPart";
import AdminIeltsReadingPart from "../pages/Admin-IeltsReadingPart";
import { AdminIeltsSpeakingParts } from "../pages/Admin-IeltsSpeakingParts/AdminIeltsSpeakingParts";
import AdminIeltsWritingParts from "../pages/Admin-IeltsWritingParts/AdminIeltsWritingParts";
import Home from "../pages/Home";
import IeltsListeningQuestions from "../pages/IeltsListeningQuestions";
import IeltsListeningTest from "../pages/IeltsListeningTest";
import IeltsListeningTestDashboard from "../pages/IeltsListeningTestDashboard";
import IeltsTestList from "../pages/IeltsTestList";
import IeltsWritingTest from "../pages/IeltsWritingTest";
import { ReviewAnswers } from "../pages/ReviewAnswers/ReviewAnswers";
import SpeakingDetailWrapper from "../pages/Speaking/SpeakingDetailWrapper";
import TestResultList from "../pages/TestResultList";
import Login from "../pages/login";
import { Role } from "../shared/constant";



const publicRoutes = [
  {path: configs.routes.home, Component: Home },


  {path: configs.routes.ieltsTestList, Component: IeltsTestList},

  // Login
  {path: configs.routes.login, Component: Login},

  // ielts-listening-test
  {path: configs.routes.ieltsListeningTest, Component: IeltsListeningTest, Layout: null, role: ['user']},
  {path: configs.routes.ieltsListeningQuestions, Component: IeltsListeningQuestions},
  // ielts-reading-test
  {path: configs.routes.ieltsReadingTest, Component: IeltsListeningTest, Layout: null},
  // ielts-writing-test
  {path: configs.routes.ieltsWritingTest, Component: IeltsWritingTest, Layout: null},
  // ielts-speaking-test
  {path: configs.routes.ieltsSpeakingTest, Component: SpeakingDetailWrapper},

  {path: configs.routes.reviewAnswers, Component: ReviewAnswers, Layout: DefaultLayouts, role: [Role.User, Role.Examiner]},
  {path: configs.routes.testResultList, Component: TestResultList},
  {path: configs.routes.singleFileUploader, Component: SingleFileUploader},
];

const privateRoutes = [
  {path: configs.routes.ieltsTestDashboard, Component: IeltsListeningTestDashboard},
  {path: configs.routes.adminIeltsListeningPart, Component: AdminIeltsListeningPart},
  {path: configs.routes.adminIeltsWritingPart, Component: AdminIeltsWritingParts},
  {path: configs.routes.adminIeltsReadingPart, Component: AdminIeltsReadingPart},
  {path: configs.routes.adminIeltsSpeakingPart, Component: AdminIeltsSpeakingParts}
];

export { publicRoutes, privateRoutes };
