import HeroBanner from "./heroBanner/HeroBanner";
import Popular from "./popular/Popular";
import TopRated from "./popular/TopRated";
import "./style.scss";
import Trending from "./trending/Trending";

const Home = () => {
  return (
    <>
      <div className="homePage">
        <HeroBanner />
        <Trending />
        <Popular />
        <TopRated />
      </div>
    </>
  );
};

export default Home;
