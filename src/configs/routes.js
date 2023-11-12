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
    
    // Private routes
    ieltsReadingTestDashboard: "/admin/ielts-reading-test",
    ieltsReadingPassageDashboard: "/admin/:testId/ielts-reading-passage",
    ieltsListeningTestDashboard: "/admin/:testId/ielts-listening-test",
}

export default routes;
