const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">
                <img src="https://www.ielts.org/-/media/images/logos-and-straplines/ielts-logo.png" alt="logo" />
            </div>
            <div className="header__title">
                <h1>Listening Practice Test 1</h1>
            </div>
            <div className="header__timer">
                <h2>Time remaining: 30:00</h2>
            </div>
        </div>
    )
}

export default Header