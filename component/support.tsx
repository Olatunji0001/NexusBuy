import { IoChatbubbleEllipses } from "react-icons/io5";
import { MdMarkEmailUnread } from "react-icons/md";
import { MdCall } from "react-icons/md";

export default function Sup() {
  return (
    <>
      <div className="mt-5">
        <div className="text-center">
          <h1 className="text-[30px] font-bold">How Can We Help You Today?</h1>
          <p className="text-[15px] font-semibold">
            Find answers to common questions or reach out for personalized
            assistance.
          </p>
        </div>
        <div className="mt-7 shadow-2xl w-[95%] mx-auto rounded-xl outline p-2">
          <p className="mb-2 text-[25px] font-bold text-center">
            Need Personal Assistance?
          </p>
          <div className="grid grid-cols-3 gap-3 p-2 mb-3">
            <div className="p-3 bg-blue-100 rounded-4xl">
              <div className="flex items-center gap-3">
                <p>
                  <IoChatbubbleEllipses className="text-[40px] text-blue-500" />
                </p>
                <h1 className="text-[20px] font-semibold">Live Chat</h1>
              </div>
              <div className="ml-13">
                <p className="">
                  Get instant support from our team during business hours.
                  Perfect for quick questions
                </p>
                <button className="p-[7px] bg-blue-500 text-white rounded-xl w-[300px] font-bold my-3 cursor-pointer hover:translate-y-0.5">
                  Start a Live Chat
                </button>
                <p className="text-[13px]">
                  Available: Mon-Fri, 9 AM - 6 PM WAT
                </p>
              </div>
            </div>

            <div className="p-3 bg-[#FAF5FF] rounded-4xl">
              <div className="flex items-center gap-3">
                <p>
                  <MdMarkEmailUnread className="text-[40px] text-[#9333EA]" />
                </p>
                <h1 className="text-[20px] font-semibold">Email Us</h1>
              </div>
              <div className="ml-13">
                <p className="">
                  Send us a detailed message and we'll get back to you within 24
                  business hours.
                </p>
                <button className="p-[7px] bg-[#9333EA] text-white rounded-xl w-[300px] font-bold my-3 cursor-pointer hover:translate-y-0.5">
                  Send an Email
                </button>
                <p className="text-[13px]">Email: support@nexusbuy.com</p>
              </div>
            </div>

            <div className="p-3 bg-amber-50 rounded-4xl">
              <div className="flex items-center gap-3">
                <p>
                  <MdCall className="text-[40px] text-amber-600" />
                </p>
                <h1 className="text-[20px] font-semibold">Call Our Team</h1>
              </div>
              <div className="ml-13">
                <p className="">
                  For urgent matters, feel free to call us directly during our
                  support hours.
                </p>
                <button className="p-[7px] bg-amber-600 text-white rounded-xl w-[300px] font-bold my-3 cursor-pointer hover:translate-y-0.5">
                  +234 915 996 5475
                </button>
                <p className="text-[13px]">
                  Available: Mon-Fri, 9 AM - 6 PM WAT
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          wfnklsfjn
        </div>
      </div>
    </>
  );
}
