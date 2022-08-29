import Image from "next/image";
import { useEffect, useState } from "react";
import { FaArrowRight, FaPlay, FaPlus } from "react-icons/fa";
import { baseUrl } from "../../constants/movie";
import { Movie } from "../../typings";

interface Props {
  netflixOriginals: Movie[];
}

const Banner = ({ netflixOriginals }: Props) => {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)],
    );
  }, [netflixOriginals]);

  return (
    <div className="flex flex-col space-y-10 py-16 md:space-y-10 lg:h-[65vh] lg:justify-end lg:pb-12 lg:space-y-5">
      <div className="absolute top-0 left-0 -z-10  h-[95vh] w-screen">
        <Image
          layout="fill"
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          objectFit="cover"
          alt="streamix"
        />
      </div>

      <h1 className="text-2xl mt-7 font-bold md:text-4xl lg:text-6xl">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="max-w-[70%] md:max-w-[80%] text-xs text-shadow-md md:text-lg lg:max-w-[50rem] lg:text-[1rem]">
        {movie?.overview}
      </p>

      <div className="flex space-x-3 items-center">
        <div className="flex items-center space-x-3 lg:mr-5">
          <button className="playBtn bg-white">
            <FaPlay className="lg:h-4 lg:w-4 text-slate-900 md:h-7 md:w-7" />
          </button>
          <p className="font-bold cursor-pointer">START WATCHING</p>
        </div>

        <button className="addBtn bg-[gray]/40 hidden lg:inline">
          <FaPlus className="lg:h-5 lg:w-5 md:h-7 md:w-7" />
        </button>

        <button className="addBtn bg-[gray]/40 hidden lg:inline">
          <FaArrowRight className="lg:h-5 lg:w-5 md:h-7 md:w-7" />
        </button>
      </div>
    </div>
  );
};

export default Banner;
