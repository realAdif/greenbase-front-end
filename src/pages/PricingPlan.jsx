function PricingPlan() {
  return (
    <div className=" py-10 bg-white rounded-md">
      {/* title */}
      <div className="text-center">
        <h2 className=" mb-4">Pricing Plans</h2>
        <p className=" mb-6">
          Familiarize yourself with the payment plans below.
          <br /> Pick best pracing plan to fit your needs.
        </p>
        {/* bill */}
        <div className="flex justify-center border border-[#D7DBEC] rounded max-w-[243px] mx-auto">
          {/* monthly */}
          <div className="min-w-[120px]  text-left pl-2">
            <p> Bill Monthly</p>
          </div>
          {/* Annually */}
          <div className="min-w-[120px]  border-2 border-primary rounded text-left pl-2">
            <p className="text-primary"> Bill Annually</p>
          </div>
        </div>
      </div>
      {/* cards */}
      {/* footer */}
      <p className="text-center mt-7">Cancel or upgrade your plan anytime</p>
    </div>
  );
}

export default PricingPlan;
