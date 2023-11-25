const routes = {
    // Public routes
    home: "/",
    ieltsCourses: "/ielts-courses",
    ieltsReadingTestList: "/ielts-reading-test-list",
    ieltsReadingTest: "/ielts-reading-test/:testId",
    registration: "/registration",
    ieltsListeningQuestions: "/ielts-listening-questions",

    // ielts-listening-test
    ieltsListeningTestList: "/ielts-listening-test-list",
    ieltsListeningTest: "/ielts-listening-test/:testId",
    addIeltsListeningTest: "/ielts-listening-test/add-new-test",
    detailIeltsListeningTest: "/ielts-listening-test/:id",
    
    // SingleFileUploader
    singleFileUploader: "/single-file-uploader",
    
    // Private routes
    ieltsListeningTestDashboard: "/admin/ielts-listening-test",
    adminIeltsListeningPart: "/admin/test/:testId/ielts-listening-parts",
    ieltsReadingTestDashboard: "/admin/ielts-reading-test",
    ieltsReadingPassageDashboard: "/admin/:testId/ielts-reading-passage",
}

export default routes;
