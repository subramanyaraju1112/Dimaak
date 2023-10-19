import BudgetFriendly from "@/components/BudgetFriendly/BudgetFriendly";
import Expert from "@/components/Expert/Expert";
import Feedback from "@/components/Feedback/Feedback";
import Footer from "@/components/Footer/Footer";
import HandPicked from "@/components/HandPicked/HandPicked";
import Info from "@/components/Info/Info";
import Navbar from "@/components/Navbar/Navbar";
import PackagesTheme from "@/components/PackagesTheme/PackagesTheme";
import Popular from "@/components/Popular/Popular";
import ViewMore from "@/components/ViewMore/ViewMore";

export default function Home() {
  return (
    <>
      <Navbar />
      <Info />
      <Popular />
      <PackagesTheme />
      <Feedback />
      <BudgetFriendly />
      <Expert />
      <HandPicked />
      <ViewMore />
      <Footer />
    </>
  );
}
