type porps = {
 name: string,
 recipe: string,
 time: string
}

const Card = ({name,recipe,time}: porps) => {
  return (
    <>
      <div className="card">
        <img
          src={`img/${name}.jpg`}
          alt="stew"
          className="w-full h-40 sm:h-60 object-cover"
        />
        <div className="m-4">
      <span className="font-bold">{recipe}</span>
          <span className="block text-gray-500 text-sm">Recipe by Mario</span>
        </div>
        <div className="badge">
          <span>{time} min</span>
        </div>
      </div>
    </>
  );
};

export default Card;
