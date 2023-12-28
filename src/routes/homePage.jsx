import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import AdsCard from "../components/adsCard";
const HomePage = () => {
  const featured = useLoaderData();
  return (
    <div className="max-w-8xl  mb-28 flex flex-col items-center">
      <h1 className=" text-center font-mono font-bold">
        Welcome to Vino velvet.com
      </h1>
      <div className="bg-[url('/assets/image/vinoVelvetBG.jpg')] w-full h-[60vh] bg-no-repeat bg bg-cover bg-center flex flex-col justify-center items-center">
        <h1 className=" text-white text-xl md:text-4xl font-sans py-4 tracking-wider font-bold border-b border-white">
          Holiday gift is here
        </h1>
        <p className=" text-white py-2 font-sans">
          Great gift for Everyone on your list
        </p>
        <Link
          to={"shop"}
          className="bg-red-800 border-transparent font-bold text-xs md:text-base   px-8 py-2 text-white rounded-lg hover:text-red-800 hover:bg-transparent border-2 hover:border-red-800">
          Shop Now
        </Link>
      </div>
      <div className=" flex flex-col items-center rounded-lg p-2 bg-white ">
        <div className="text-center md:text-left md:pl-8 font-semibold text-xl w-full py-2 mb-6">
          FEATURED
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {featured.map((item) => {
            return <AdsCard product={item} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
