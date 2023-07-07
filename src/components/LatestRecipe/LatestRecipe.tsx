

const LatestRecipe = () => {
  return (
    <>
      <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">Latest Recipes</h4>
      <div className="mt-8">
        {/* card */}
        <div>
          <img src="img/stew.jpg" alt="stew" />
          <div>
            <span>5 Bean Chilli Stew</span>
            <span>Recipe by Mario</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default LatestRecipe