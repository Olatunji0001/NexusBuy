"use client";
import Head from "./head";
import Products from "./product";
import Recommend from "./recommended";
import Summer from "./summer";
import About from "./about";
import Accesories from "./accesories";

export default function All() {
  return (
    <>
      <Head />
      <Products />
      <Summer />
      <Recommend />
      <About />
      <Accesories />
    </>
  );
}
