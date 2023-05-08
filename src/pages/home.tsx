import Navigation from "@/components/navigation";
import { HeroSection } from "@/components/herosection";
import Services from "@/components/services";
import Visions from "@/components/visions";
import Sponsors from "@/components/sponsors";
import Timeline from "@/components/timeline";
const Homepage=()=>{
return(
    <main>
    <HeroSection></HeroSection>
    <Services></Services>
    <Visions></Visions>
    {/* <Timeline></Timeline> */}
    <Sponsors></Sponsors>
    </main>

)
}

export default Homepage;