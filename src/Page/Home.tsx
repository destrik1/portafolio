import NavBar from "../Components/NavBar";
import HeroImage from "../Components/HeroCard";
import CardSection from "../Components/CardSection";
import Footer from "../Components/Footer";
import Title from "../Components/TItle";

type Props = {};

function Home({}: Props) {
  return (
    <>
      <NavBar />
      <br/>
      <HeroImage />
      <Title
        titulo={"Haz click aqui"}/>
      <CardSection/>
      <Footer />
    </>
  );
}

export default Home;
