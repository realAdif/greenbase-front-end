import PropTypes from 'prop-types';
// icons
import modernizeIcon from '../assets/images/icon.svg';
import searchIcon from '../assets/icon/search-icon.svg';
import chatIcon from '../assets/icon/chat-icon.svg';
import bellIcon from '../assets/icon/bell-icon.svg';
import arrowdownIcon from '../assets/icon/arrow-down.svg';

const images = {
  modernizeIcon,
  searchIcon,
  chatIcon,
  bellIcon,
  arrowdownIcon,
};

const IconComponent = ({ imgKey, alt }) => {
  return <img src={images[imgKey]} alt={alt} />;
};

IconComponent.propTypes = {
  imgKey: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default IconComponent;
