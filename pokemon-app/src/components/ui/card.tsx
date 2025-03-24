import { Pokemon } from "@/types";
export interface PostProps {
  item: any | null;
}

const Card = ({item}: PostProps) => {
  // const itemData = await fetchOne(item.url);
  console.log(item)

  return (
    <article className="flex items-end pl-5 pb-6 text-white  min-h-116 h-116 w-full bg-cover bg-center transform duration-300 hover:-translate-y-1 cursor-pointer  hover:shadow-2xl group rounded-lg"   style={{height: '300px',backgroundImage: 'url(https://cdn.dribbble.com/uploads/47176/original/9b22cd83bde1809976bec0722d1f8923.jpeg?1685645213&format=webp&resize=546x680&vertical=center)'}}>
    <div className="flex flex-col">
        <p className="font-bold">{item.name.toUpperCase()}</p>
        <div className="labels flex flex-wrap gap-x-1 gap-y-2 mt-4">
            <div className=" px-3 py-1 rounded-full text-sm bg-orange-500">Name</div>
            <div className=" px-3 py-1 rounded-full text-sm bg-purple-500">Adventure</div>
            <div className=" px-3 py-1 rounded-full text-sm bg-emerald-500">Novel</div>
        </div>
    </div>
</article>
  );
};

export default Card;