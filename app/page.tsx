import CheckAvailability from "./ui/check-availability";
import Footer from "./ui/footer";
import ExploreSpeedsPrices from "./ui/landing/explore-speeds-prices";
import InternetThatsFitYourBudget from "./ui/landing/internet-thats-fit-your-budget";
import Navbar from "./ui/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <CheckAvailability />
      <ExploreSpeedsPrices />
      {/* <InternetThatsFitYourBudget /> */}
      <Footer />
    </div>
  );
}
