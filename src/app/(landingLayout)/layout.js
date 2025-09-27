import BackToTop from "@/components/Shared/BackToTop";
import Navbar from "@/components/Shared/Header/Navbar";

const LandingLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="">{children}</div>
      <BackToTop />
    </>
  );
};

export default LandingLayout;
