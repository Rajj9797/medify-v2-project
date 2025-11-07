import Hero from "../../Components/Hero/Hero"
import Specialization from "../../Components/Specialization/Specialization"
import LatestNews from "../../Components/LatestNews/LatestNews"
import Faq from "../../Components/FAQ/Faq"
import { useOutletContext } from "react-router-dom"

function Home() {

    const {stateData, selectedState, setSelectedState,
        cityData, selectedCity, setSelectedCity, isMobile
    } = useOutletContext();


    return (
        <div>
            {/* <Navbar home /> */}
            <Hero stateData={stateData} selectedState={selectedState} setSelectedState={setSelectedState} 
                cityData={cityData} selectedCity={selectedCity} setSelectedCity={setSelectedCity}
            />
            <Specialization isMobile={isMobile} />
            <LatestNews isMobile={isMobile} />
            <Faq isMobile={isMobile} />
        </div>
    )
}

export default Home; 