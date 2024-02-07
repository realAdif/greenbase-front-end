import IconComponent from './IconComponent';
import PropTypes from 'prop-types';

PricingPlansCards.propTypes = {
  planName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  services: PropTypes.array.isRequired,
  buttonStyle: PropTypes.string.isRequired,
};

function PricingPlansCards({ planName, price, services, buttonStyle }) {
  return (
    <div className="p-7 w-[335px] border border-[#E6E9F4] rounded">
      {/* title / plan name */}
      <div className="border-b border-[#E6E9F4] pb-7">
        <div className="flex items-end gap-x-1">
          <h3 className="">${price}</h3>
          <span className="mb-1">/month</span>
        </div>

        <h2 className="mb-2">{planName} Plan</h2>
        <p>Start your business</p>
      </div>
      {/* services list */}
      <div className=" my-7">
        {services.map((service, index) => (
          <div key={index} className="flex gap-x-3 mb-3 last-of-type:mb-0">
            <IconComponent
              imgKey={service.isFree ? 'greenTickIcon' : 'roundedIcon'}
            />
            <p className="">{service.service}</p>
          </div>
        ))}
      </div>
      {/* button */}
      <button className={buttonStyle}>Select Plan</button>
    </div>
  );
}

export default PricingPlansCards;
