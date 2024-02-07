import {
  sidebarTopList,
  sidebarMiddleList,
  sidebarBottomList,
} from '../utils/sidebarList';
import IconComponent from './IconComponent';

function Sidebar() {
  return (
    <div className="max-w-[250px] border-r border-t border-[#D7DBEC] h-screen drop-shadow-2xl">
      {/* sidebar top list */}
      <div>
        {sidebarTopList.map((list, index) => {
          return (
            <div
              key={index}
              className="flex items-center gap-x-3 py-4 max-w-[218px] max-h-[44px] mx-auto cursor-pointer hover:underline"
            >
              <img src={list.icon} alt={list.alt} />
              <span>{list.title}</span>
              <div className="ml-auto">
                {list.title === 'Orders' ? (
                  <IconComponent imgKey="badgeIcon" />
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
      {/* other information list */}
      <div className=" max-w-[218px] mx-auto">
        <span>Other Information</span>
        {sidebarMiddleList.map((list, index) => {
          return (
            <div
              key={index}
              className="flex items-center gap-x-3 py-4 max-h-[44px]  cursor-pointer hover:underline"
            >
              <img src={list.icon} alt={list.alt} />
              <span>{list.title}</span>
            </div>
          );
        })}
      </div>
      {/* settings */}
      <div className="max-w-[218px] mx-auto">
        <span className="w-[218px] ">Setting</span>
        {sidebarBottomList.map((list, index) => {
          return (
            <div
              key={index}
              className="flex items-center gap-x-3 py-4  max-h-[44px] cursor-pointer hover:underline"
            >
              <img src={list.icon} alt={list.alt} />
              <span>{list.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
