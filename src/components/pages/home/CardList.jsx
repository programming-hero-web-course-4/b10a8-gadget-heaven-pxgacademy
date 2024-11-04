import PropTypes from "prop-types";

const CardList = ({ list, index, activeList, setActiveList }) => {
  return (
    <li
      className={`${
        activeList.index === index
          ? "bg-primary text-white"
          : "bg-[#f6f6f6] text-zinc-800"
      }
        cursor-pointer px-5 py-3 rounded`}
      onClick={() => setActiveList({ index: index, activeList: list.category })}
    >
      {list.name}
    </li>
  );
};

CardList.propTypes = {
  list: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  activeList: PropTypes.object.isRequired,
  setActiveList: PropTypes.func.isRequired,
};

export default CardList;
