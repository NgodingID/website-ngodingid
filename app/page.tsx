import { AuroraBackground } from "@/components/ui/aurora-background";
import Hero from "./components/Hero";
import Sosial from "./components/sosial";
import Footer from "./components/Footer";


export default async function page(){
    const api = await fetch('https://api.github.com/orgs/NgodingID');
    const data = await api.json()

  return(
    <main className="relative">

      <AuroraBackground className="h-screen -z-50 w-full">
      <Hero member={data.followers}
      projects={data.public_repos}
      />
    </AuroraBackground>

      <Sosial id={'sosial'}/>
      <Footer/>
    </main>
  )
}
