const Card = () => {
  return (
    <>
      <div className="bg-white rounded overflow-hidden shadow-2xl relative">
        <img
          src="img/stew.jpg"
          alt="stew"
          className="w-full h-40 sm:h-60 object-cover"
        />
        <div className="m-4">
          <span className="font-bold">5 Bean Chilli Stew</span>
          <span className="block text-gray-500 text-sm">Recipe by Mario</span>
        </div>
        <div className="bg-green-400 text-gray-600 text-xs uppercase font-bold rounded-full p-2 absolute top-0 ml-2 mt-2">
          <span>25 min</span>
        </div>
      </div>
    </>
  );
};

export default Card;
