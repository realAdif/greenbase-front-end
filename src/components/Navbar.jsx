import IconComponent from './IconComponent';
import AvaterIcon from '../assets/images/bitmap.jpg';
function Navbar() {
  return (
    <nav className="bg-white h-16 flex items-center justify-between px-4 relative drop-shadow-lg">
      {/* icon */}
      <div className="flex gap-x-3">
        <IconComponent imgKey="modernizeIcon" alt="Modernize Icon" />
        <h4 className=" font-extrabold text-[21.7px] leading-8">Modernize</h4>
      </div>
      {/* searchbar */}
      <div className="md:flex gap-x-2 absolute left-60 hidden ">
        <IconComponent imgKey="searchIcon" alt="search icon" />

        <input
          type="text"
          placeholder="Search..."
          className=" placeholder:text-[14px] "
        />
      </div>
      {/* links */}
      <div className="flex gap-3">
        <div className="flex gap-x-4 relative">
          <IconComponent imgKey="chatIcon" alt="chat icon" />

          <div className=" absolute -right-1 -top-1 bg-primary rounded-full w-4 h-4 flex justify-center items-center z-10">
            <p className="text-white font-bold">5</p>
          </div>

          <IconComponent
            imgKey="bellIcon"
            alt="bell icon"
            className="relative"
          />
        </div>
        <div className="flex items-center gap-x-2">
          <img src={AvaterIcon} alt="" />
          <span className="hidden md:block">X’eriya Ponald</span>
        </div>
        <IconComponent
          imgKey="arrowdownIcon"
          alt="arrow down icon"
          className="hidden"
        />
      </div>
    </nav>
  );
}

export default Navbar;
