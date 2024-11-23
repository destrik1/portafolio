import NavBar from "../Components/NavBar";
import HeroImage from "../Components/HeroCard";
import CardSection from "../Components/CardSection";
import Footer from "../Components/Footer";
import Title from "../Components/TItle";

type Props = {};

function Home({}: Props) {
  return (
    <>
      <div className="bg-gradient-to-b bg-violet-600 from-black">
        <NavBar />
        <br />
      </div>
      <div className="bg-gradient-to-b bg-black from-violet-600">
        <HeroImage />
        <Title titulo={"Haz click aqui"} />
        <CardSection />
        <br />
        <Footer />
      </div>
    </>
  );
}

export default Home;
