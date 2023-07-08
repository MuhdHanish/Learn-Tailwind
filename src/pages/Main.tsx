import Header from "../components/Header/Header";
import LatestRecipe from "../components/LatestRecipe/LatestRecipe";
import MainSection from "../components/MainSection/MainSection";
import MostPopular from "../components/MostPopular/MostPopular";
import NavBar from "../components/NavBar/NavBar";

const Main = () => {
  return (
    <div className="grid md:grid-cols-3">
      <div className="md:col-span-1">
        <NavBar />
      </div>
      <main className="px-16 py-6 bg-gray-100 md:col-span-2">
        <MainSection />
        <header>
          <Header />
        </header>
        <div>
          <LatestRecipe />
          <MostPopular />
          <div className="flex justify-center">
            <div className="bg-secondary">Load more</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
