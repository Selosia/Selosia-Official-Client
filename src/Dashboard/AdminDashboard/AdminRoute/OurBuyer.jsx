import OurActualBuyer from "../../../utils/DashBoardUtilities/AdminUtilities/OurBuyer/OurActualBuyer";
import ProvableBuyer from "../../../utils/DashBoardUtilities/AdminUtilities/OurBuyer/ProvableBuyer";


const OurBuyer = () => {
  return (
    <section className="">
      <OurActualBuyer />
      <div className="w-full h-5 bg-base-300"></div>
      <ProvableBuyer />
    </section>
  );
};

export default OurBuyer;
