import { Pokemon } from "@/types";
export interface PostProps {
  item: any | null;
}

const Card = ({item}: PostProps) => {

  const itemBgImage = item.details.sprites.other['official-artwork'].front_shiny || item.details.sprites.other['official-artwork'].front_default;
  console.log(item.details.types)
  const pokemonTypes =item.details.types

  const getTypeColorClass = (typeName) => {
    const typeColors = {
      poison: "bg-purple-500",
      ground: "bg-orange-500",
      fairy: "bg-pink-500",
      flying: "bg-blue-300",
      bug: "bg-black",
      grass: "bg-green-500",
      electric: "bg-yellow-500",
      fire: "bg-red-500",
      water: "bg-blue-500",
    };
  
    return typeColors[typeName] || "bg-gray-500"; // Default to grey
  };

  return (
    <article className="flex items-end pl-5 pb-6 text-white  min-h-116 h-116 w-full bg-cover bg-center transform duration-300 hover:-translate-y-1 cursor-pointer  hover:shadow-2xl group rounded-lg"   style={{height: '300px',backgroundImage: `url(${itemBgImage})`}}>
    <div className="flex flex-col pokemon-metadata">
        <p className="font-bold pokemon-name">{item.name.toUpperCase()}</p>
        <div className="labels flex flex-wrap gap-x-1 gap-y-2 mt-4">
        {pokemonTypes ? (
        pokemonTypes.map((type: unknown) => (
          <div className={`px-3 py-1 rounded-full text-sm ${getTypeColorClass(type.type.name)}`}>{type.type.name}</div>
        ))
      ) : (
        <div className="text-xl font-bold">Sorry, No Pokemnos available </div>
      )}
            {/* <div className=" px-3 py-1 rounded-full text-sm bg-orange-500">Name</div>
            <div className=" px-3 py-1 rounded-full text-sm bg-purple-500">Adventure</div>
            <div className=" px-3 py-1 rounded-full text-sm bg-emerald-500">Novel</div> */}
        </div>
    </div>
</article>
  );
};

export default Card;