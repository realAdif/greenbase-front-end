import IconComponent from './IconComponent';
import AvaterIcon from '../assets/images/bitmap.jpg';
function Navbar() {
  return (
    <nav className="bg-white h-16 flex items-center justify-between px-4 relative">
      {/* icon */}
      <div className="flex gap-x-3">
        <IconComponent imgKey="modernizeIcon" alt="Modernize Icon" />
        <h4 className=" font-extrabold text-[21.7px] leading-8">Modernize</h4>
      </div>
      {/* searchbar */}
      <div className="flex gap-x-2 absolute left-60">
        <IconComponent imgKey="searchIcon" alt="search icon" />
        <span>Search...</span>
      </div>
      {/* links */}
      <div className="flex gap-3">
        <div className="flex gap-x-4">
          <IconComponent imgKey="chatIcon" alt="chat icon" />
          <IconComponent imgKey="bellIcon" alt="bell icon" />
        </div>
        <div className="flex items-center gap-x-2">
          <img src={AvaterIcon} alt="" className="" />
          <span>X’eriya Ponald</span>
        </div>
        <IconComponent imgKey="arrowdownIcon" alt="arrow down icon" />
      </div>
    </nav>
  );
}

export default Navbar;
