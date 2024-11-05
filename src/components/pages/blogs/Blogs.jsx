import { Helmet } from "react-helmet";
import bannerImg from "../../../assets/blog-banner.webp";
import { useLoaderData } from "react-router-dom";
import BlogCards from "./BlogCards";
import BlogAd from "./BlogAd";
import banner from "../../../assets/blog-banner2.webp";

const Blogs = () => {
  const data = useLoaderData();
  return (
    <>
      <Helmet>
        <title>Blogs | Gadget Heaven</title>
      </Helmet>
      <section className="pb-16 px-5">
        <div className="max-w-7xl mx-auto py-12">
          <div className="relative w-full">
            <img className="w-full" src={bannerImg} alt="" />
            <div className="absolute lg:bottom-10 bottom-2 left-2 lg:left-10">
              <button className="bg-primary lg:py-2 py-1 lg:px-6 px-2 mb-3 text-white text-sm lg:text-base lg:font-semibold rounded">
                GAMING
              </button>
              <h2 className="text-base lg:text-4xl font-semibold text-white">
                Oculus Quest X Headset: <br />
                Discover a Shining New Star
              </h2>
              <p className="text-zinc-300 lg:mt-3 lg:text-base text-sm">
                Abdullah - Jan 5, 2024
              </p>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="space-y-5 md:col-span-2">
              <div>
                <h2 className="uppercase text-3xl font-bold">Gadget details</h2>
              </div>
              {data.map((item, i) => (
                <BlogCards key={i} item={item} />
              ))}
            </div>

            <div className="md:col-span-2 lg:col-span-1 ">
              <BlogAd />
            </div>
          </div>

          <div className="relative w-full mt-10 lg:mt-20">
            <img className="w-full" src={banner} alt="" />
            <div className="absolute lg:bottom-10 bottom-2 left-2 lg:left-10">
              <button className="bg-primary lg:py-2 py-1 lg:px-6 px-2 mb-3 text-white text-sm lg:text-base lg:font-semibold rounded">
                GAMING
              </button>
              <h2 className="text-base lg:text-4xl font-semibold text-white">
                Apple’s AR/VR Headsets are Expected <br />
                to launch in 1st Quarter of 2024
              </h2>
              <p className="text-zinc-300 lg:mt-3 lg:text-base text-sm">
                Abdullah - Jan 5, 2024
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
