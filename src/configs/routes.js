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

    // ielts-speaking-test
    ieltsSpeakingTest: "/ielts-speaking-test/:testId",

    reviewAnswers: "/ielts-test/review-answers/:testResultId",
    testResultList: "/test-result-list",
    userDashboard: "/user-dashboard",
    
    // SingleFileUploader
    singleFileUploader: "/single-file-uploader",

    // Private routes
    ieltsTestDashboard: "/admin/ielts-test-list",
    adminIeltsListeningPart: "/admin/test/:testId/ielts-listening-parts",
    adminIeltsReadingPart: "/admin/test/:testId/ielts-reading-parts",
    adminIeltsWritingPart: "/admin/test/:testId/ielts-writing-parts",
    adminIeltsSpeakingPart: "/admin/test/:testId/ielts-speaking-parts",
};

export default routes;
