import { Link } from "react-router-dom";
import bannerImg from "../../../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="w-full bg-primary rounded-b-3xl pt-10 pb-64">
      <div className="max-w-7xl mx-auto">
        <div className="text-center text-[#f6f6f6]">
          <h2 className="text-7xl font-semibold leading-tight">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h2>
          <p className="text-lg mt-8 max-w-5xl mx-auto">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <Link to="/dashboard">
            <button className="bg-[#f6f6f6] text-primary rounded-full py-3 px-6 mt-8 font-semibold">
              Shop Now
            </button>
          </Link>
        </div>

        <div className="relative w-full flex justify-center mt-20">
          <div
            className=" absolute
        max-w-5xl border-4 border-[#f6f6f6] p-7 rounded-3xl bg-white/30 backdrop-blur"
          >
            <img className="rounded-3xl" src={bannerImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
