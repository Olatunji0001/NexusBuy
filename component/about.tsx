import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="mb-20 mt-20 grid grid-cols-2 w-[90%] mx-auto container">
        <div className="relative">
          <div className="bg-[#706C63] h-[350px] w-[800px] relative"></div>
          <div className="">
            <Image
              src={"/recommend3.jpg"}
              width={10000}
              height={1000}
              alt=""
              className="h-[350] w-[100%] object-cover absolute top-5 left-140"
            />
          </div>
        </div>
      </div>
    </>
  );
}
