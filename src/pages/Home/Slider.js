import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img src="https://ielts.s3.ap-southeast-2.amazonaws.com/ieltsImage1124.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaDmFwLXNvdXRoZWFzdC0xIkcwRQIgI3wwC3dIoFXrbP78MOW0q0VT4BpHhYJnaKvLp5%2BuiHACIQD19oMKdk7ReYkEws8AAVAN%2Bzr%2FSafntWq7%2FScWXh4K6irkAggSEAAaDDIwMTgzMzAzNjg3NyIMb0ngWsyljS9pJK33KsECg%2BlPiSdsHDCmgrOIl%2BFH7C8VtnD0hyj3e%2FSqu7ywZMDq72rkMZi5%2BUpTBC%2Bw5GLWJMJlxys6jyjWlx7I%2FJ2g%2FPldOupN0MDa7na1fJRYb69jFmnWa05bH41UegPWtwpD6q2YfqmPnJ9fQ1mvlFRua4rdr5brcbOsxpgr84Ck0Gtk63XVPE73zXv07YFeIngyLvsR0Z97Vg3Atw4W0TTHnrMiOIdyxN91%2Fp0vX7yPANVJUVDS3Q7gSEAgbXad0KoNl7xPOHkKXWC%2BxwRZkpcITclD6xGdc%2Bj6o4si9rFLoFnnHDuI%2B18k35HpZi4l2T1UDwaFgxJHT6ZvV6293FSv5np8KFI4ryA34YmSunys6ftMc7k3jEjLbmacEtSGCEm425XjFWgIqq6tXqaYC7qPLwrq5SFgUKctuiHQ1ltf8BFnMNe9%2BawGOrMC9xCV50egXR6T35SFJVZ12WjtXGTOEoVhZjyA3427wyRVhumSI4tq1j6eAPOi3T8jJwSM5Yd9CK%2FbXBURnIrOk6r6UMuqn%2FBWQFZ4FGaZGXRoW6CX4zeRiK2r4cB0LBFNzaH%2F9Krpep2gxszImOtltYbzy63ZRUHT566JQ7k1UZIQNEo2iPkM%2FGB5qkhrifpaoLaGuDBaOZAXfSre8aEM9oSaYJt8GOmqhSxM9pLNUWTYF%2BR%2B9pXpwKHp54JFJYI3wGYk5SqwJyX6uH012L3KAVBuavr7%2BXRETCkU8Aywjb4o8orwmH5k%2BjpNYSMiLThb4FT22LnnPuX0Mjg6XxBK0846Dwt0F6jypRLRqOdqjX4Q%2B0QJyKneZkVp466eL5dkjDITC8YA3sHp8Ky3%2BX8NxkbCAA%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240110T092822Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAS57RPXRGQEI373JP%2F20240110%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Signature=efd25e6f410d17e03f7f824e72c1fca2212268971b433acd21aaa09415a8ba3d"></img>
            </Carousel.Item>
            <Carousel.Item>
                <a href="https://keithspeakingacademy.com/ielts-speaking-vocabulary-words-topics/" target="_blank">
                    <img src="https://ielts.s3.ap-southeast-2.amazonaws.com/ieltsImage.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaDmFwLXNvdXRoZWFzdC0xIkcwRQIgI3wwC3dIoFXrbP78MOW0q0VT4BpHhYJnaKvLp5%2BuiHACIQD19oMKdk7ReYkEws8AAVAN%2Bzr%2FSafntWq7%2FScWXh4K6irkAggSEAAaDDIwMTgzMzAzNjg3NyIMb0ngWsyljS9pJK33KsECg%2BlPiSdsHDCmgrOIl%2BFH7C8VtnD0hyj3e%2FSqu7ywZMDq72rkMZi5%2BUpTBC%2Bw5GLWJMJlxys6jyjWlx7I%2FJ2g%2FPldOupN0MDa7na1fJRYb69jFmnWa05bH41UegPWtwpD6q2YfqmPnJ9fQ1mvlFRua4rdr5brcbOsxpgr84Ck0Gtk63XVPE73zXv07YFeIngyLvsR0Z97Vg3Atw4W0TTHnrMiOIdyxN91%2Fp0vX7yPANVJUVDS3Q7gSEAgbXad0KoNl7xPOHkKXWC%2BxwRZkpcITclD6xGdc%2Bj6o4si9rFLoFnnHDuI%2B18k35HpZi4l2T1UDwaFgxJHT6ZvV6293FSv5np8KFI4ryA34YmSunys6ftMc7k3jEjLbmacEtSGCEm425XjFWgIqq6tXqaYC7qPLwrq5SFgUKctuiHQ1ltf8BFnMNe9%2BawGOrMC9xCV50egXR6T35SFJVZ12WjtXGTOEoVhZjyA3427wyRVhumSI4tq1j6eAPOi3T8jJwSM5Yd9CK%2FbXBURnIrOk6r6UMuqn%2FBWQFZ4FGaZGXRoW6CX4zeRiK2r4cB0LBFNzaH%2F9Krpep2gxszImOtltYbzy63ZRUHT566JQ7k1UZIQNEo2iPkM%2FGB5qkhrifpaoLaGuDBaOZAXfSre8aEM9oSaYJt8GOmqhSxM9pLNUWTYF%2BR%2B9pXpwKHp54JFJYI3wGYk5SqwJyX6uH012L3KAVBuavr7%2BXRETCkU8Aywjb4o8orwmH5k%2BjpNYSMiLThb4FT22LnnPuX0Mjg6XxBK0846Dwt0F6jypRLRqOdqjX4Q%2B0QJyKneZkVp466eL5dkjDITC8YA3sHp8Ky3%2BX8NxkbCAA%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240110T092940Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAS57RPXRGQEI373JP%2F20240110%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Signature=b85dd4f9934f740b5cf8c0bac1a4b08f9bb7ca46df06cede672814edf3f7ac8b"></img>
                </a>
            </Carousel.Item>
            <Carousel.Item>
                <a href="https://ieltstutorials.online/blog/ielts-band-score-requirement" target="_blank">
                    <img src="https://ielts.s3.ap-southeast-2.amazonaws.com/example13312.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaDmFwLXNvdXRoZWFzdC0xIkcwRQIgI3wwC3dIoFXrbP78MOW0q0VT4BpHhYJnaKvLp5%2BuiHACIQD19oMKdk7ReYkEws8AAVAN%2Bzr%2FSafntWq7%2FScWXh4K6irkAggSEAAaDDIwMTgzMzAzNjg3NyIMb0ngWsyljS9pJK33KsECg%2BlPiSdsHDCmgrOIl%2BFH7C8VtnD0hyj3e%2FSqu7ywZMDq72rkMZi5%2BUpTBC%2Bw5GLWJMJlxys6jyjWlx7I%2FJ2g%2FPldOupN0MDa7na1fJRYb69jFmnWa05bH41UegPWtwpD6q2YfqmPnJ9fQ1mvlFRua4rdr5brcbOsxpgr84Ck0Gtk63XVPE73zXv07YFeIngyLvsR0Z97Vg3Atw4W0TTHnrMiOIdyxN91%2Fp0vX7yPANVJUVDS3Q7gSEAgbXad0KoNl7xPOHkKXWC%2BxwRZkpcITclD6xGdc%2Bj6o4si9rFLoFnnHDuI%2B18k35HpZi4l2T1UDwaFgxJHT6ZvV6293FSv5np8KFI4ryA34YmSunys6ftMc7k3jEjLbmacEtSGCEm425XjFWgIqq6tXqaYC7qPLwrq5SFgUKctuiHQ1ltf8BFnMNe9%2BawGOrMC9xCV50egXR6T35SFJVZ12WjtXGTOEoVhZjyA3427wyRVhumSI4tq1j6eAPOi3T8jJwSM5Yd9CK%2FbXBURnIrOk6r6UMuqn%2FBWQFZ4FGaZGXRoW6CX4zeRiK2r4cB0LBFNzaH%2F9Krpep2gxszImOtltYbzy63ZRUHT566JQ7k1UZIQNEo2iPkM%2FGB5qkhrifpaoLaGuDBaOZAXfSre8aEM9oSaYJt8GOmqhSxM9pLNUWTYF%2BR%2B9pXpwKHp54JFJYI3wGYk5SqwJyX6uH012L3KAVBuavr7%2BXRETCkU8Aywjb4o8orwmH5k%2BjpNYSMiLThb4FT22LnnPuX0Mjg6XxBK0846Dwt0F6jypRLRqOdqjX4Q%2B0QJyKneZkVp466eL5dkjDITC8YA3sHp8Ky3%2BX8NxkbCAA%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240110T093417Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAS57RPXRGQEI373JP%2F20240110%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Signature=ae6215a4a3924bf6494ed4acf4403d52bfb0197c0ad60a9fdcd0a16769615439"></img>
                </a>
            </Carousel.Item>
        </Carousel>
    );
}

export default ControlledCarousel;
