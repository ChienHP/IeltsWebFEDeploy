const routes = {
    // Public routes
    home: "/",
    ieltsCourses: "/ielts-courses",
    ieltsReadingTestList: "/ielts-reading-test-list",
    ieltsReadingTest: "/ielts-reading-test/:testId",
    registration: "/registration",
    ieltsListeningQuestions: "/ielts-listening-questions",

    ieltsTestList: "/ielts-test-list",
    // ielts-listening-test
    ieltsListeningTestList: "/ielts-listening-test-list",
    ieltsListeningTest: "/ielts-listening-test/:testId",
    addIeltsListeningTest: "/ielts-listening-test/add-new-test",
    detailIeltsListeningTest: "/ielts-listening-test/:id",


    // ielts-listening-test
    detailIeltsReadingTest: "/ielts-reading-test-detail/:id",


    // SingleFileUploader
    singleFileUploader: "/single-file-uploader",

    // Private routes
    ieltsListeningTestDashboard: "/admin/ielts-listening-test",
    adminIeltsListeningPart: "/admin/test/:testId/ielts-listening-parts",
    adminIeltsReadingPart: "/admin/test/:testId/ielts-reading-parts",
    ieltsReadingTestDashboard: "/admin/ielts-reading-test",
    ieltsReadingPassageDashboard: "/admin/:testId/ielts-reading-passage",
};

export default routes;
