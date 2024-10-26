import Logo from "./assets/lws-logo-en.svg";
import CalenderIcon from "./svgIcons/CalenderIcon";
import ContactIcon from "./svgIcons/ContactIcon";
import DashbordIcon from "./svgIcons/DashbordIcon";
import KanbarIcon from "./svgIcons/KanbarIcon";
import MessageIcon from "./svgIcons/MessageIcon";
import ProjectIcon from "./svgIcons/ProjectIcon";
import SettingIcon from "./svgIcons/SettingIcon";
const Sidebar = () => {
  return (
    <aside className="hidden w-64 bg-gray-800 p-6 lg:block">
      <div className="mb-8 flex items-center">
        <div className="flex items-center justify-center rounded-full text-xl font-bold">
          <img src={Logo} className="mx-auto h-10 text-center" />
        </div>
      </div>
      <button className="mb-8 w-full rounded-md bg-green-500 py-2 text-white">
        + New Project
      </button>
      <nav>
        <ul className="space-y-4">
          <li>
            <a href="#" className="flex items-center">
              <DashbordIcon />
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center">
              <ProjectIcon />
              Projects
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center">
              <ContactIcon />
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center">
              <KanbarIcon />
              Kanban
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center">
              <CalenderIcon />
              Calendar
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center">
              <MessageIcon />
              Messages
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center">
              <SettingIcon />
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
