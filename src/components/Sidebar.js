import { sideBarElements } from "../constants";

const Sidebar = () => {
  return (
    <div>
      <ul className="flex flex-col gap-6 m-2">
        {sideBarElements.map((item) => {
          return (
            <li className="flex flex-col items-center gap-1 hover:bg-gray-200 rounded-lg px-1 py-2">
              <span className="text-2xl">{item.icon}</span>
              <span className="text-xs font-normal">{item.name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
