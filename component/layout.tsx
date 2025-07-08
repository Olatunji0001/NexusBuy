"use client";
import { WishlistContextProvider } from "@/context/wishlistContext";
import Footer2 from "@/component/footer2";
import Header from "@/component/navbar";

const RootComponentLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <WishlistContextProvider>
        <Header />
        {children}
        <Footer2 />
    </WishlistContextProvider>
  );
};

export default RootComponentLayout;
