import Card from "../Card/Card";


const LatestRecipe = () => {
  return (
    <>
      <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
        Latest Recipes
      </h4>
      <div className="mt-8">
        <Card />
      </div>
    </>
  );
}

export default LatestRecipe