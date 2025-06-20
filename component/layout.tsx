"use client";
import { WishlistContextProvider } from "@/context/wishlistContext";
import Footer from "@/component/footer";
import Header from "@/component/navbar";

const RootComponentLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <WishlistContextProvider>
        <Header />
        {children}
        <Footer />
    </WishlistContextProvider>
  );
};

export default RootComponentLayout;
