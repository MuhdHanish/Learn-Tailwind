import Card from "../Card/Card";


const LatestRecipe = () => {
  return (
    <>
      <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
        Latest Recipes
      </h4>
      <div className="mt-8 grid lg:grid-cols-3 gap-10">
        <Card name="stew" recipe=" Bean Chilli Stew" time="25" />
        <Card name="noodles" recipe=" Mushroom noodles" time="10" />
        <Card name="curry" recipe=" Paneer butter curry" time="30" />
      </div>
    </>
  );
}

export default LatestRecipe