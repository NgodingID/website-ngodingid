import Hero from "./components/Hero";
import Sosial from "./components/sosial";
import Footer from "./components/Footer";



export default async function page(){
    const api = await fetch('https://api.github.com/orgs/NgodingID');
    const data = await api.json()

  return(
    <main className="relative">

      <Hero member={data.followers}
      projects={data.public_repos}
      />
      
      <Sosial id={'sosial'}/>
      <Footer/>
    </main>
  )
}
