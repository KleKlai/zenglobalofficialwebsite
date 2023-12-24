import CheckAvailability from "./ui/check-availability";
import Footer from "./ui/footer";
import ExploreSpeedsPrices from "./ui/landing/explore-speeds-prices";
import InternetThatsFitYourBudget from "./ui/landing/internet-thats-fit-your-budget";

export default function Home() {
  return (
    <div>
      <div className="mx-80">
        <InternetThatsFitYourBudget />
      </div>
      <Footer />
    </div>
  );
}
