const IeltsTestList = () => {
    return (
        <div>
            <div className="container mx-auto p-6">
                <div className="bg-white rounded-lg shadow p-6">
                    {/* <!-- Skills Filter --> */}
                    <div className="flex space-x-4 mb-6">
                        <button className="bg-gray-200 text-gray-700 rounded-full px-6 py-2 text-sm focus:outline-none">
                            All Skills
                        </button>
                        <button className="text-blue-600 bg-blue-100 rounded-full px-6 py-2 text-sm focus:outline-none">
                            Listening
                        </button>
                        <button className="text-gray-700 bg-gray-200 rounded-full px-6 py-2 text-sm focus:outline-none">
                            Reading
                        </button>
                        <button className="text-gray-700 bg-gray-200 rounded-full px-6 py-2 text-sm focus:outline-none">
                            Writing
                        </button>
                        <button className="text-gray-700 bg-gray-200 rounded-full px-6 py-2 text-sm focus:outline-none">
                            Speaking
                        </button>
                    </div>
                    {/* <!-- Search and Sort --> */}
                    <div className="flex items-center mb-6">
                        <div className="flex border-2 rounded">
                            <input
                                className="px-4 py-2 w-80"
                                placeholder="Enter test name"
                                type="text"
                            />
                            <button className="flex items-center justify-center px-4 border-l">
                                <i className="text-gray-600 fas fa-search"></i>
                            </button>
                        </div>
                        <div className="ml-4 relative">
                            <select className="rounded overflow-hidden border-gray-300 text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                                <option>Newest</option>
                                <option>Oldest</option>
                            </select>
                            <div className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                <i className="fas fa-chevron-down"></i>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Test Cards --> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* <!-- Card 1 --> */}
                        <div className="bg-white rounded-lg p-4 flex flex-col items-center shadow">
                            <img
                                alt="IELTS Mock Test 2023 book cover"
                                className="h-32"
                                height="100"
                                src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-7KSL76HaYfbpw2BnaR3HPmLc/user-8QMgi6z75XQ2xgdeX0j81IJ1/img-8dDCrFh3KAJc0XswOEqwcQFR.png?st=2023-11-25T18%3A28%3A58Z&amp;se=2023-11-25T20%3A28%3A58Z&amp;sp=r&amp;sv=2021-08-06&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2023-11-25T00%3A54%3A01Z&amp;ske=2023-11-26T00%3A54%3A01Z&amp;sks=b&amp;skv=2021-08-06&amp;sig=IG8OWm9FitdN0mwdTkHlaPvZIHPP%2Bm%2BoUOUp0nHbKls%3D"
                                width="100"
                            />
                            <h3 className="mt-4 text-lg font-semibold text-gray-700">
                                IELTS Mock Test 2023
                            </h3>
                            <p className="text-sm text-gray-500">January</p>
                            <p className="mt-2 text-sm text-gray-600">
                                January Listening Practice Test 1
                            </p>
                            <p className="text-sm text-gray-500">
                                431,043 tests taken
                            </p>
                            <div className="mt-4 w-full bg-gray-200 rounded-full h-2.5">
                                <div
                                    className="bg-blue-600 h-2.5 rounded-full"
                                    style={{"width": "0%;"}}
                                ></div>
                            </div>
                            <span className="text-sm font-semibold text-blue-600">
                                0.0%
                            </span>
                        </div>
                        {/* <!-- Card 2 --> */}
                        <div className="bg-white rounded-lg p-4 flex flex-col items-center shadow">
                            <img
                                alt="IELTS Mock Test 2023 book cover"
                                className="h-32"
                                height="100"
                                src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-7KSL76HaYfbpw2BnaR3HPmLc/user-8QMgi6z75XQ2xgdeX0j81IJ1/img-8dDCrFh3KAJc0XswOEqwcQFR.png?st=2023-11-25T18%3A28%3A58Z&amp;se=2023-11-25T20%3A28%3A58Z&amp;sp=r&amp;sv=2021-08-06&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2023-11-25T00%3A54%3A01Z&amp;ske=2023-11-26T00%3A54%3A01Z&amp;sks=b&amp;skv=2021-08-06&amp;sig=IG8OWm9FitdN0mwdTkHlaPvZIHPP%2Bm%2BoUOUp0nHbKls%3D"
                                width="100"
                            />
                            <h3 className="mt-4 text-lg font-semibold text-gray-700">
                                IELTS Mock Test 2023
                            </h3>
                            <p className="text-sm text-gray-500">January</p>
                            <p className="mt-2 text-sm text-gray-600">
                                January Listening Practice Test 2
                            </p>
                            <p className="text-sm text-gray-500">
                                202,256 tests taken
                            </p>
                            <div className="mt-4 w-full bg-gray-200 rounded-full h-2.5">
                                <div
                                    className="bg-blue-600 h-2.5 rounded-full"
                                    style={{"width": "0%;"}}
                                ></div>
                            </div>
                            <span className="text-sm font-semibold text-blue-600">
                                0%
                            </span>
                        </div>
                        {/* <!-- Card 3 --> */}
                        <div className="bg-white rounded-lg p-4 flex flex-col items-center shadow">
                            <img
                                alt="IELTS Mock Test 2023 book cover"
                                className="h-32"
                                height="100"
                                src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-7KSL76HaYfbpw2BnaR3HPmLc/user-8QMgi6z75XQ2xgdeX0j81IJ1/img-8dDCrFh3KAJc0XswOEqwcQFR.png?st=2023-11-25T18%3A28%3A58Z&amp;se=2023-11-25T20%3A28%3A58Z&amp;sp=r&amp;sv=2021-08-06&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2023-11-25T00%3A54%3A01Z&amp;ske=2023-11-26T00%3A54%3A01Z&amp;sks=b&amp;skv=2021-08-06&amp;sig=IG8OWm9FitdN0mwdTkHlaPvZIHPP%2Bm%2BoUOUp0nHbKls%3D"
                                width="100"
                            />
                            <h3 className="mt-4 text-lg font-semibold text-gray-700">
                                IELTS Mock Test 2023
                            </h3>
                            <p className="text-sm text-gray-500">January</p>
                            <p className="mt-2 text-sm text-gray-600">
                                January Listening Practice Test 3
                            </p>
                            <p className="text-sm text-gray-500">
                                144,992 tests taken
                            </p>
                            <div className="mt-4 w-full bg-gray-200 rounded-full h-2.5">
                                <div
                                    className="bg-blue-600 h-2.5 rounded-full"
                                    style={{"width": "0%;"}}
                                ></div>
                            </div>
                            <span className="text-sm font-semibold text-blue-600">
                                0%
                            </span>
                        </div>
                        {/* <!-- Card 4 --> */}
                        <div className="bg-white rounded-lg p-4 flex flex-col items-center shadow">
                            <img
                                alt="IELTS Mock Test 2023 book cover"
                                className="h-32"
                                height="100"
                                src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-7KSL76HaYfbpw2BnaR3HPmLc/user-8QMgi6z75XQ2xgdeX0j81IJ1/img-8dDCrFh3KAJc0XswOEqwcQFR.png?st=2023-11-25T18%3A28%3A58Z&amp;se=2023-11-25T20%3A28%3A58Z&amp;sp=r&amp;sv=2021-08-06&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2023-11-25T00%3A54%3A01Z&amp;ske=2023-11-26T00%3A54%3A01Z&amp;sks=b&amp;skv=2021-08-06&amp;sig=IG8OWm9FitdN0mwdTkHlaPvZIHPP%2Bm%2BoUOUp0nHbKls%3D"
                                width="100"
                            />
                            <h3 className="mt-4 text-lg font-semibold text-gray-700">
                                IELTS Mock Test 2023
                            </h3>
                            <p className="text-sm text-gray-500">January</p>
                            <p className="mt-2 text-sm text-gray-600">
                                January Listening Practice Test 4
                            </p>
                            <p className="text-sm text-gray-500">
                                109,329 tests taken
                            </p>
                            <div className="mt-4 w-full bg-gray-200 rounded-full h-2.5">
                                <div
                                    className="bg-blue-600 h-2.5 rounded-full"
                                    style={{"width": "0%;"}}
                                ></div>
                            </div>
                            <span className="text-sm font-semibold text-blue-600">
                                0%
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IeltsTestList;
