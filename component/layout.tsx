"use client";
import { WishlistContextProvider } from "@/context/wishlistContext";
import Footer2 from "@/component/footer2";
import Header from "@/component/navbar";

const RootComponentLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <WishlistContextProvider>
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow">{children}</main>

        <Footer2 />
      </div>
    </WishlistContextProvider>
  );
};

export default RootComponentLayout;
