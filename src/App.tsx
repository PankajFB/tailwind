import "./App.css";

function App() {
  return (
    <>
      {/* navbar section */}
      <nav className="bg-blue-950 ] ">
        <div className="relative w-[1080px] mx-auto flex items-center justify-between">
          <a href="/">
            <img
              src="https://www.shutterstock.com/image-vector/vector-icon-american-company-spacex-260nw-2330949087.jpg"
              width="125px"
              height="30px"
              alt=""
            />
          </a>

          <ul className="flex space-x-6">
            <li className="text-white font-semibold py-7 hover:text-blue-400 cursor-pointer transition-all duration-200 relative group">
              <a href="/">Home</a>
              <div className="absolute bottom-0 w-full h-1 bg-blue-400 hidden group-hover:block transition-all duration-200"></div>
            </li>

            <li className="text-white font-semibold py-7 hover:text-blue-400 cursor-pointer transition-all duration-200 relative group">
              <a href="/">Payment</a>
              <div className="absolute bottom-0 w-full h-1 bg-blue-400 hidden group-hover:block transition-all duration-200"></div>
            </li>
            <li className="text-white font-semibold py-7 hover:text-blue-400 cursor-pointer transition-all duration-200 relative group">
              <a href="/">About</a>
              <div className="absolute bottom-0 w-full h-1 bg-blue-400 hidden group-hover:block transition-all duration-200"></div>
            </li>
            <li className="text-white font-semibold py-7 hover:text-blue-400 cursor-pointer transition-all duration-200 relative group">
              <a href="/">Services</a>
              <div className="absolute bottom-0 w-full h-1 bg-blue-400 hidden group-hover:block transition-all duration-200"></div>
            </li>
          </ul>
          <div className="flex space-x-6 items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1280px-Flag_of_India.svg.png"
              width="32px"
              height="32px"
              alt=""
            />

            <button className="py-3 px-5 font-mono text-white border-blue-400 border-2 rounded text-sm font-bold ">
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* Hero section */}
      <section className="relative bg-blue-950">
        <div className="w-10/12 max-w-[1080px] flex flex-row items-center justify-between mx-auto gap-4">
          {/* left part  */}
          <div className="space-y-8 text-left">
            <h1 className="font-mono font-bold text-[40px] leading-[1.2] text-white">
              Power your finance, grow your business
            </h1>
            <div className="w-6 h-1 bg-green-300"></div>
            <p className="font-mono text-[18px] leading-7 text-white opacity-80">
              Accept payments from customers. Automate payouts to vendors &
              employees. Never run out of working capital.
            </p>
            <button
              className="bg-blue-500 text-white text-lg rounded font-mono  py-3 px-6
              font-bold hover:bg-blue-600 transition-all duration-200 "
            >
              Sign Up
            </button>
          </div>
          {/* right part */}

          <img
            src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8zMF9hbl9hYnN0cmFjdF92aXN1YWxpemF0aW9uX29mX2FfYmxvY2tjaGFpbl9uZV80ZWIwODVmNC0yODFlLTRkYTMtYjdlMS00MmY1ZTFkMDkyM2VfMS5qcGc.jpg"
            className="w-full max-w-[550px] py-20"
            alt=""
          />
        </div>
      </section>

      {/* feature section  */}
      <section className="relative overflow-hidden">
        <img
          src="https://img.freepik.com/free-vector/hand-drawn-blue-dots-background_23-2149574814.jpg?size=626&ext=jpg&ga=GA1.1.523418798.1711584000&semt=ais"
          className="absolute  -top-6 inline-block -z-10"
          width="233"
          height="167"
          alt=""
        />
        <img
          src="https://img.freepik.com/free-vector/hand-drawn-blue-dots-background_23-2149574814.jpg?size=626&ext=jpg&ga=GA1.1.523418798.1711584000&semt=ais"
          width="233"
          height="167"
          className="absolute right-0 top-[3rem] inline-block -z-10"
          alt=""
        />

        <div className="relative w-11/12 max-w-[1080px] mx-auto pt-4">
          {/* heading  */}
          <h2 className="font-mono text-center text-2xl py-5 leading-8 font-extrabold">
            Accept Payments with Razorpay Payment Suite
          </h2>
          <div className="w-5 h-1 bg-green-400 mx-auto mt-4 mb-6"></div>

          {/* content box  */}
          <div className="w-full min-h-[520px] bg-white flex rounded-md p-10 py-12 border-4">
            {/* left section  */}
            <div className="flex flex-col justify-between w-full">
              <h3 className="font-mono text-[28px] leading-10 font-bold max-w-[500px]">
                Supercharge your business with the all‑powerful
                <span className="text-blue-500"> Payment Gateway</span>
              </h3>
              <ul className="space-y-2 ">
                <li className="font-mono flex items-center space-x-2">
                  <svg
                    className="w-6 h-6 text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <span>100+ Payment Methods</span>
                </li>

                <li className="font-mono flex items-center space-x-2">
                  <svg
                    className="w-6 h-6 text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <span>Industry Leading Success Rate</span>
                </li>

                <li className="font-mono flex items-center space-x-2">
                  <svg
                    className="w-6 h-6 text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <span>Superior Checkout Experience</span>
                </li>

                <li className="font-mono flex items-center space-x-2">
                  <svg
                    className="w-6 h-6 text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <span>Easy to Integrate</span>
                </li>

                <li className="font-mono flex items-center space-x-2">
                  <svg
                    className="w-6 h-6 text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <span>Instant Settlements from day 1</span>
                </li>
              </ul>

              {/* for button and hyperlink */}
              <div className="flex  items-center space-x-4">
                <button
                  className="bg-blue-500 w-fit text-white py-3 px-3 rounded-md
                font-mono font-bold hover:bg-blue-600 transition-all duration-200
                "
                >
                  Sign Up Now
                </button>
                {/* hyperlink  */}
                <div className="flex items-center cursor-pointer group">
                  <a
                    href=""
                    className="font-mono font-bold text-blue-500 group-hover:text-blue-600 transition-all duration-200"
                  >
                    Know More
                  </a>
                  <svg
                    className="w-6 h-6 text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m10 16 4-4-4-4"
                    />
                  </svg>
                </div>
              </div>
              <img src="https://png.pngitem.com/pimgs/s/521-5211464_delivering-full-turn-key-building-technology-solutions-building.png"
              className="max-w-[500px] absolute  right-1 overflow-hidden" 
              alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
