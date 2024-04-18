import HeroBanner from "./heroBanner/HeroBanner";
import "./style.scss";

const Home = () => {
  return (
    <>
      <div className="homePage">
        <h1>Home</h1>
        <HeroBanner />
      </div>
    </>
  );
};

export default Home;
