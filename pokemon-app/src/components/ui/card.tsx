import { Pokemon } from "@/types";

interface Stat {
  stat: {
    name: string;
  };
  base_stat: number;
}

export interface CardProps {
  item: Pokemon;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ item, onClick }) => {
  const itemBgImage =
    item.details.sprites.other["official-artwork"].front_shiny ||
    item.details.sprites.other["official-artwork"].front_default;

  const pokemonTypes = item.details.types;
  const pokemonStats = item.details.stats;
  const isFavourite = item.favourite;

  const getTypeColorClass = (typeName: string): string => {
    const typeColors: Record<string, string> = {
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

    return typeColors[typeName] || "bg-gray-500";
  };

  return (
    <article
      className="flex items-end pl-5 pb-6 text-white min-h-116 h-116 w-full bg-cover bg-center transform duration-300 hover:-translate-y-1 cursor-pointer hover:shadow-2xl group rounded-lg"
      style={{
        borderRadius: "120px",
        marginBottom: "200px",
        height: "200px",
        backgroundImage: `url(${itemBgImage})`,
      }}
      onClick={onClick}
    >
      <div className="flex flex-col pokemon-metadata">
        <div className="font-bold flex justify-around items-center pokemon-name">
          {item.name.toUpperCase()}
          <div className={`text-2xl ${isFavourite ? "text-red-500" : "text-white"}`}>
            &#10084;
          </div>
        </div>
        <div className="labels flex flex-wrap gap-x-1 gap-y-2 mt-4">
          {pokemonStats ? (
            pokemonStats.map((stat) => (
              <span key={stat.stat.name} className="pokemon-stats">
                {stat.stat.name}: {stat.base_stat}.
              </span>
            ))
          ) : (
            <div className="text-xl font-bold">Sorry, No stats available</div>
          )}
          {pokemonTypes ? (
            pokemonTypes.map((type) => (
              <div
                key={type.type.name}
                className={`px-3 py-1 rounded-full text-sm ${getTypeColorClass(type.type.name)}`}
              >
                {type.type.name}
              </div>
            ))
          ) : (
            <div className="text-xl font-bold">Sorry, No type available</div>
          )}
        </div>
      </div>
    </article>
  );
};

export default Card;