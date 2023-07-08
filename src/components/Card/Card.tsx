import { AiOutlineClockCircle } from "react-icons/ai";

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
        <div className="badge items-center flex gap-1">
          <span>{time} min</span>
          <AiOutlineClockCircle style={{ fontSize: "14" }} />
        </div>
      </div>
    </>
  );
};

export default Card;
