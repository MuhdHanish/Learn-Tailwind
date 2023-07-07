import Header from "../components/Header/Header";
import LatestRecipe from "../components/LatestRecipe/LatestRecipe";
import MainSection from "../components/MainSection/MainSection";
import MostPopular from "../components/MostPopular/MostPopular";
import NavBar from "../components/NavBar/NavBar";

const Main = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <main>
        <MainSection />
        <header>
          <Header />
        </header>
        <div>
          <LatestRecipe />
          <MostPopular />
          <div>
            <div>Load more</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
