import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faTiktok,
  faRedditAlien,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center text-black pt-8 bg-slate-100 py-4 border-l-[1.7rem] border-red-800">
      <h1 className=" text-lg font-sans font-semibold text-red-800">
        Vino Velvet
      </h1>
      <p className=" max-w-[90ch] text-center text-xs pb-5 font-sans px-4">
        Vino Velvet where each bottle is a celebration of refined indulgence.
        Our curated collection of wines invites you to savor the artistry of
        winemaking in every sip. From velvety reds to crisp whites, our wines
        tell stories of craftsmanship and dedication.
        <br />
        Sip. Savor. Celebrate. Vino Velvet - Where Elegance Meets Every Pour.
      </p>
      <div className=" flex gap-4">
        <a href="https://github.com/RemyJohnny/">
          <FontAwesomeIcon
            icon={faGithub}
            className=" w-5 h-5 border p-2 rounded-[50%]"
          />
        </a>
        <a href="https://www.instagram.com/remy_xle/">
          <FontAwesomeIcon
            icon={faInstagram}
            className=" w-5 h-5 border p-2 rounded-[50%]"
          />
        </a>
        <a href="https://www.tiktok.com/@remy_xle?_t=8clEJOwqYNi&_r=1">
          <FontAwesomeIcon
            icon={faTiktok}
            className=" w-5 h-5 border p-2 rounded-[50%]"
          />
        </a>
        <a href="https://www.reddit.com/u/InfamousInterview107/s/bViFBReRCW">
          <FontAwesomeIcon
            icon={faRedditAlien}
            className=" w-5 h-5 border p-2 rounded-[50%]"
          />
        </a>
        <a href="https://twitter.com/remy_will">
          <FontAwesomeIcon
            icon={faXTwitter}
            className=" w-5 h-5 border p-2 rounded-[50%]"
          />
        </a>
      </div>
      <p className=" font-mono">copyright &copy; RemyJohnny 2023</p>
    </footer>
  );
};

export default Footer;
