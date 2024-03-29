import { useSelector } from "react-redux";
import { sideBarElements } from "../constants";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const menuOpenStatus = useSelector((store) => store.app.isMenuOpen);

  //early return
  if (!menuOpenStatus) {
    return null;
  }
  return (
    <div>
      <ul className="flex flex-col gap-6 m-2">
        {sideBarElements.map((item, i) => {
          return (
            <Link to={item?.link || "/"} key={i}>
              <li className="flex flex-col items-center gap-1 hover:bg-gray-200 rounded-lg px-1 py-2">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-xs font-normal">{item.name}</span>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
