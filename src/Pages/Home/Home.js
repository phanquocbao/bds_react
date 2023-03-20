import RealEstateSell from "../../components/RealEstateSell/RealEstateSell";
import News from "../../components/News/News";
import RealEstate from "../../components/RealEstate/RealEstate";
import Showresultsearch from "../../components/Showresultsearch/Showresultsearch";

function Home() {
  return (
    <>
      <News />
      <RealEstateSell />
      <RealEstate />
    </>
  );
}

export default Home;
