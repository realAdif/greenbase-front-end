import PropTypes from 'prop-types';
// icons
import modernizeIcon from '../assets/images/icon.svg';
import searchIcon from '../assets/icon/search-icon.svg';
import chatIcon from '../assets/icon/chat-icon.svg';
import bellIcon from '../assets/icon/bell-icon.svg';
import arrowdownIcon from '../assets/icon/arrow-down.svg';
import greenTickIcon from '../assets/icon/green-tick.svg';
import roundedIcon from '../assets/icon/rounded-icon.svg';
import badgeIcon from '../assets/icon/16badge.svg';

const images = {
  modernizeIcon,
  searchIcon,
  chatIcon,
  bellIcon,
  arrowdownIcon,
  greenTickIcon,
  roundedIcon,
  badgeIcon,
};

const IconComponent = ({ imgKey, alt, className }) => {
  return <img src={images[imgKey]} alt={alt} className={className} />;
};

IconComponent.propTypes = {
  imgKey: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default IconComponent;
