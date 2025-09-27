import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./globals.css";
import AntDProvider from "@/components/Shared/AntDProvider";
import { Raleway } from "next/font/google";
import Footer from "@/components/pages/shared/Footer/Footer";

const ralewayFont = Raleway({
  weight: ["100", "300", "400", "500", "700"],
  subsets: ["latin"],
});

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${ralewayFont.className}`}>
        <AntDProvider>
          <AntdRegistry>{children}</AntdRegistry>
        </AntDProvider>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
