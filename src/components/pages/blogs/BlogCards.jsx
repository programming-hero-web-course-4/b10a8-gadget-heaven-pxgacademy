import PropTypes from "prop-types";

const BlogCards = ({ item }) => {
  return (
    <div className="flex flex-col gap-5 md:flex-row border border-zinc-300 rounded-xl p-5">
      <div className="md:max-w-96 w-full">
        <img className="w-full rounded-lg" src={item.image} alt="" />
      </div>
      <div>
        <h3 className="uppercase mb-5 md:mb-10 bg-primary inline-block text-white font-semibold py-2 px-5">
          {item.category}
        </h3>
        <h2 className="text-3xl font-bold">{item.productName}</h2>
        <p className="mt-2 text-zinc-500">{item.description}</p>
        <button className="py-2 px-5 rounded-full border border-primary mt-5">Read More</button>
      </div>
    </div>
  );
};

BlogCards.propTypes = {
  item: PropTypes.object.isRequired,
};

export default BlogCards;
