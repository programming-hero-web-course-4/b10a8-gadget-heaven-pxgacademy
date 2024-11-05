import AdW from "../../../assets/Ad-W.webp";
import ebb from "../../../assets/ebb.webp";
import wcx from "../../../assets/wcx.webp";
import hph from "../../../assets/hph.webp";
import mebb from "../../../assets/mebb.webp";
import mwcx from "../../../assets/mwcx.webp";

const BlogAd = () => {
  return (
    <div className="space-y-6 ">
      <h2 className="uppercase text-3xl font-bold">Ads</h2>
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
        <div>
          <img src={AdW} alt="Advertisement" className="w-full" />
          <h2 className="text-3xl font-semibold mt-3 mb-1">
            iPhone 13 Series to Launch in 2021: Possible Specs
          </h2>
          <p className="text-zinc-400">January 12, 2024</p>
        </div>
        <div>
          <img src={ebb} alt="Advertisement" className="w-full" />
          <h2 className="text-3xl font-semibold mt-3 mb-1">
            Samsung Unleashed Newest 108Mp Mobile Image Sensor
          </h2>
          <p className="text-zinc-400">January 12, 2024</p>
        </div>
        <div>
          <img src={wcx} alt="Advertisement" className="w-full" />
          <h2 className="text-3xl font-semibold mt-3 mb-1">
            Microsoft’s New Xbox Wireless Controller Launched
          </h2>
          <p className="text-zinc-400">January 12, 2024</p>
        </div>
        <div>
          <img src={hph} alt="Advertisement" className="w-full" />
          <h2 className="text-3xl font-semibold mt-3 mb-1">
            Apple has Updated Their Patent to Protect the Use of Mesh Fabrics
            for its Canopy
          </h2>
          <p className="text-zinc-400">January 12, 2024</p>
        </div>
        <div>
          <img src={mebb} alt="Advertisement" className="w-full" />
          <h2 className="text-3xl font-semibold mt-3 mb-1">
            Samsung Announces Galaxy Buds Pro, its Most Premium Earbuds
          </h2>
          <p className="text-zinc-400">January 12, 2024</p>
        </div>
        <div>
          <img src={mwcx} alt="Advertisement" className="w-full" />
          <h2 className="text-3xl font-semibold mt-3 mb-1">
            PlayStation 5’s Mario Game & Watch is a Choice Gaming Stuffer
          </h2>
          <p className="text-zinc-400">January 12, 2024</p>
        </div>
      </div>
    </div>
  );
};

export default BlogAd;
