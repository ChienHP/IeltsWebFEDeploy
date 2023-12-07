const routes = {
    // Public routes
    home: "/",
    ieltsCourses: "/ielts-courses",
    ieltsReadingTestList: "/ielts-reading-test-list",
    ieltsListeningQuestions: "/ielts-listening-questions",

    ieltsTestList: "/ielts-test-list",

    // Login
    login: "/login",
    

    // ielts-listening-test
    ieltsListeningTestList: "/ielts-listening-test-list",
    ieltsListeningTest: "/ielts-listening-test/:testId",
    addIeltsListeningTest: "/ielts-listening-test/add-new-test",
    detailIeltsListeningTest: "/ielts-listening-test/:id",

    // ielts-reading-test
    ieltsReadingTest: "/ielts-reading-test/:testId",

    // ielts-writing-test
    ieltsWritingTest: "/ielts-writing-test/:testId",

    reviewAnswers: "/ielts-test/:testId/review-answers",


    // SingleFileUploader
    singleFileUploader: "/single-file-uploader",

    // Private routes
    ieltsTestDashboard: "/admin/ielts-test-list",
    adminIeltsListeningPart: "/admin/test/:testId/ielts-listening-parts",
    adminIeltsReadingPart: "/admin/test/:testId/ielts-reading-parts",
    adminIeltsWritingPart: "/admin/test/:testId/ielts-writing-parts",
    ieltsReadingTestDashboard: "/admin/ielts-reading-test-list",
    ieltsReadingPassageDashboard: "/admin/:testId/ielts-reading-passage",
};

export default routes;
