// // // import React, { useContext, useRef } from "react";
// // // import { assets } from "../assets/assets";
// // // import { AppContext } from "../context/AppContext";

// // // const Hero = () => {
// // //   const { setSearchedFilter, setIsSearched } = useContext(AppContext);
// // //   const titleRef = useRef(null);
// // //   const locationRef = useRef(null);

// // //   const onSearch = () => {
// // //     setSearchedFilter({
// // //       title: titleRef.current.value,
// // //       location: locationRef.current.value,
// // //     });
// // //     // Ref.current.value = "";
// // //     // locationRef.current.value = "";

// // //     setIsSearched(true);
// // //   };

// // //   return (
// // //     <div className="container 2xl:px-20 mx-auto my-10">
// // //       <div className="bg-gradient-to-r from-blue-400 to-blue-900 text-white py-16 text-center mx-2 rounded-xl">
// // //         <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4 ">
// // //           Over 10,000+ jobs to apply
// // //         </h2>
// // //         <p className="mb-8 max-w-xl mx-auto text-sm font-light px-5">
// // //           Launch Your Next Big Career Move Today – Discover Top Job
// // //           Opportunities and Take the First Step Toward a Brighter Future!
// // //         </p>
// // //         <div className="flex items-center justify-between bg-white rounded text-gray-600 max-w-xl pl-4 mx-4 sm:mx-auto">
// // //           <div className="flex items-center">
// // //             <img className="h-4 sm:h-5" src={assets.search_icon} alt="" />
// // //             <input
// // //               type="text"
// // //               placeholder="Search for jobs"
// // //               className="max-sm:text-xs p-2 rounded outline-none w-full"
// // //               ref={titleRef}
// // //             />
// // //           </div>
// // //           <div className="flex items-center">
// // //             <img className="h-4 sm:h-5" src={assets.location_icon} alt="" />
// // //             <input
// // //               type="text"
// // //               placeholder="Location"
// // //               className="max-sm:text-xs p-2 rounded outline-none w-full"
// // //               ref={locationRef}
// // //             />
// // //           </div>
// // //           <button
// // //             className="bg-blue-600 px-6 py-2 rounded-3xl text-white m-1 shadow hover:bg-blue-700 hover:scale-105 transition-transform duration-200"
// // //             onClick={onSearch}
// // //           >
// // //             Search
// // //           </button>
// // //         </div>
// // //       </div>

// // //       <div className="border border-gray-300 shadow-md mx-2 mt-5 p-6 rounded-md flex">
// // //         <div className="flex justify-center gap-10 lg:gap-16 flex-wrap">
// // //           <p className="font-medium">Trusted by</p>
// // //           <img className="h-5" src={assets.adobe_logo} alt="" />
// // //           <img className="h-5" src={assets.accenture_logo} alt="" />
// // //           <img className="h-5" src={assets.microsoft_logo} alt="" />
// // //           <img className="h-5" src={assets.amazon_logo} alt="" />
// // //           <img className="h-5" src={assets.samsung_logo} alt="" />
// // //           <img className="h-5" src={assets.walmart_logo} alt="" />
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Hero;

// // import React, { useContext, useRef } from "react";
// // import { assets } from "../assets/assets";
// // import { AppContext } from "../context/AppContext";

// // const Hero = () => {
// //   const { setSearchedFilter, setIsSearched } = useContext(AppContext);
// //   const titleRef = useRef(null);
// //   const locationRef = useRef(null);

// //   const onSearch = () => {
// //     setSearchedFilter({
// //       title: titleRef.current.value,
// //       location: locationRef.current.value,
// //     });
// //     setIsSearched(true);
// //   };

// //   return (
// //     <div className="container mx-auto px-4 2xl:px-20 my-10 animate-fade-in">
// //       {/* Hero Banner */}
// //       <div className="bg-gradient-to-r from-blue-500 to-blue-900 text-white py-16 px-4 text-center rounded-2xl shadow-lg transition-all duration-500 ease-in-out">
// //         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg">
// //           Over 10,000+ Jobs to Apply
// //         </h2>
// //         <p className="text-sm md:text-base font-light max-w-2xl mx-auto mb-8 px-4">
// //           Launch Your Next Big Career Move Today – Discover Top Job Opportunities
// //           and Take the First Step Toward a Brighter Future!
// //         </p>

// //         {/* Search Bar */}
// //         <div className="bg-white text-gray-700 rounded-xl flex flex-col sm:flex-row items-center gap-3 p-4 max-w-3xl mx-auto shadow-lg">
// //           <div className="flex items-center gap-2 w-full sm:w-1/2">
// //             <img className="h-5" src={assets.search_icon} alt="Search icon" />
// //             <input
// //               type="text"
// //               placeholder="Search for jobs"
// //               className="w-full p-2 text-sm rounded outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
// //               ref={titleRef}
// //             />
// //           </div>

// //           <div className="flex items-center gap-2 w-full sm:w-1/2">
// //             <img className="h-5" src={assets.location_icon} alt="Location icon" />
// //             <input
// //               type="text"
// //               placeholder="Location"
// //               className="w-full p-2 text-sm rounded outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
// //               ref={locationRef}
// //             />
// //           </div>

// //           <button
// //             onClick={onSearch}
// //             className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full shadow-md transition transform duration-300 hover:scale-105 hover:shadow-blue-500/50"
// //           >
// //             Search
// //           </button>
// //         </div>
// //       </div>

// //       {/* Trusted Logos */}
//       // <div className="bg-white border border-gray-200 shadow mt-8 p-6 rounded-lg animate-fade-in-slow">
//       //   <div className="flex flex-wrap items-center justify-center gap-6">
//       //     <p className="font-semibold text-gray-700 text-center w-full sm:w-auto">
//       //       Trusted by
//       //     </p>
//       //     {[
//       //       assets.adobe_logo,
//       //       assets.accenture_logo,
//       //       assets.microsoft_logo,
//       //       assets.amazon_logo,
//       //       assets.samsung_logo,
//       //       assets.walmart_logo,
//       //     ].map((logo, idx) => (
//       //       <img
//       //         key={idx}
//       //         src={logo}
//       //         alt="Company logo"
//       //         className="h-6 hover:scale-110 transition-transform duration-200 ease-in-out"
//       //       />
//       //     ))}
//       //   </div>
//       // </div>
// //     </div>
// //   );
// // };

// // export default Hero;
// import React, { useContext, useRef } from "react";
// import { assets } from "../assets/assets";
// import { AppContext } from "../context/AppContext";

// const Hero = () => {
//   const { setSearchedFilter, setIsSearched } = useContext(AppContext);
//   const titleRef = useRef(null);
//   const locationRef = useRef(null);

//   const onSearch = () => {
//     setSearchedFilter({
//       title: titleRef.current.value,
//       location: locationRef.current.value,
//     });
//     setIsSearched(true);
//   };

//   return (
//     <div className="container mx-auto px-4 2xl:px-20 my-10 animate-fade-in">
//       {/* Hero Banner with Background Image */}
//       <div
//         className="relative bg-cover bg-center text-white py-16 px-6 rounded-2xl shadow-lg overflow-hidden"
//         style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')" }}
//       >
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-blue-900/70"></div>

//         <div className="relative z-10 max-w-4xl mx-auto">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg">
//             Over 10,000+ Jobs to Apply
//           </h2>
//           <p className="text-sm md:text-base font-light max-w-2xl mx-auto mb-8">
//             Launch Your Next Big Career Move Today – Discover Top Job Opportunities
//             and Take the First Step Toward a Brighter Future!
//           </p>

//           {/* Search Bar - Horizontal layout */}
//           <div className="bg-white/90 text-gray-700 rounded-xl flex flex-col md:flex-row items-center gap-3 p-4 shadow-lg backdrop-blur-sm">
//             <div className="flex items-center gap-2 w-full">
//               <img className="h-5" src={assets.search_icon} alt="Search icon" />
//               <input
//                 type="text"
//                 placeholder="Search for jobs"
//                 className="w-full p-2 text-sm rounded outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
//                 ref={titleRef}
//               />
//             </div>

//             <div className="flex items-center gap-2 w-full">
//               <img className="h-5" src={assets.location_icon} alt="Location icon" />
//               <input
//                 type="text"
//                 placeholder="Location"
//                 className="w-full p-2 text-sm rounded outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
//                 ref={locationRef}
//               />
//             </div>

//             <button
//               onClick={onSearch}
//               className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full shadow-md transition transform duration-300 hover:scale-105 hover:shadow-blue-500/50 w-full md:w-auto"
//             >
//               Search
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Trusted Logos - Carousel-like layout */}
//       <div className="bg-white border border-gray-200 shadow mt-8 p-6 rounded-lg animate-fade-in-slow">
//         <div className="flex flex-wrap items-center justify-center gap-6">
//           <p className="font-semibold text-gray-700 text-center w-full sm:w-auto">
//             Trusted by
//           </p>
//           {[
//             assets.adobe_logo,
//             assets.accenture_logo,
//             assets.microsoft_logo,
//             assets.amazon_logo,
//             assets.samsung_logo,
//             assets.walmart_logo,
//           ].map((logo, idx) => (
//             <img
//               key={idx}
//               src={logo}
//               alt="Company logo"
//               className="h-6 hover:scale-110 transition-transform duration-200 ease-in-out"
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
import React, { useContext, useRef } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Hero = () => {
  const { setSearchedFilter, setIsSearched } = useContext(AppContext);
  const titleRef = useRef(null);
  const locationRef = useRef(null);

  const onSearch = () => {
    setSearchedFilter({
      title: titleRef.current.value,
      location: locationRef.current.value,
    });
    setIsSearched(true);
    titleRef.current.value = "";
    locationRef.current.value = "";
  };

  return (
    <div className="relative w-full overflow-hidden py-20 animate-fade-in ">
      {/* Background Image with Effects */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        {/* Background Image with Blur */}
        <div
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            animation: "pan-image 40s ease-in-out infinite alternate",
          }}
          className="w-full h-full blur-sm scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-900/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 2xl:px-20">
        {/* Animated Headline */}
        <div className="text-center mb-10 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-xl animate-float">
            Over <span className="text-orange-400">10,000+</span> Jobs to Apply
          </h2>
          <p className="text-white/90 mt-4 text-base md:text-lg font-light max-w-2xl mx-auto animate-fade-in-up delay-100">
            Launch Your Next Big Career Move Today – Discover Top Job
            Opportunities
          </p>
        </div>

        {/* Search Box with Glow Effect */}
        <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg max-w-4xl mx-auto w-full animate-fade-in-up delay-200 hover:shadow-xl transition-shadow duration-300">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex items-center gap-2 w-full md:w-1/2 bg-white border border-gray-300 rounded-lg px-3 py-2 transition-colors transition-border duration-100 ease-out hover:border-blue-500 hover:shadow-md focus-within:border-2 focus-within:border-blue-500">
              <img className="h-5" src={assets.search_icon} alt="Search icon" />
              <input
                type="text"
                placeholder="Search for jobs"
                className="w-full h-6 text-sm outline-none bg-transparent placeholder-gray-500"
                ref={titleRef}
              />
            </div>

            <div className="flex items-center gap-2 w-full md:w-1/2 bg-white border border-gray-300 rounded-lg px-3 py-2 transition-colors transition-border duration-100 ease-out hover:border-blue-500 hover:shadow-md focus-within:border-2 focus-within:border-blue-500">
              <img
                className="h-5"
                src={assets.location_icon}
                alt="Location icon"
              />
              <input
                type="text"
                placeholder="Location"
                className="w-full h-6 text-sm outline-none bg-transparent placeholder-gray-500"
                ref={locationRef}
              />
            </div>

            <button
              onClick={onSearch}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg shadow-md transition-all duration-300 hover:scale-105 w-full md:w-auto hover:shadow-blue-500/50"
            >
              Search
            </button>
          </div>
        </div>

        {/* Animated Trusted Logos */}
        <div className="mt-12 animate-fade-in-delay container mx-auto max-w-6xl px-4">
          <div className="bg-white/90 backdrop-blur-sm border border-white/30 rounded-lg shadow p-6 flex flex-wrap justify-center items-center gap-8 hover:shadow-lg transition-shadow duration-300">
            <p className="text-gray-700 font-semibold w-full text-center md:w-auto animate-pulse">
              Trusted by
            </p>
            {[
              assets.adobe_logo,
              assets.accenture_logo,
              assets.microsoft_logo,
              assets.amazon_logo,
              assets.samsung_logo,
              assets.walmart_logo,
            ].map((logo, index) => (
              <div
                key={index}
                className="transition-all duration-500 hover:scale-125 lg:grayscale hover:grayscale-0 hover:rotate-3"
              >
                <img
                  src={logo}
                  alt="Company logo"
                  className="h-6 hover:grayscale-0 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx global>{`
        @keyframes pan-image {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-pan-image {
          animation: pan-image 60s linear infinite;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        @keyframes pulse {
          0% {
            opacity: 0.8;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.8;
          }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fadeInUp 1.5s ease-out forwards;
        }

        .animate-fade-in-delay {
          animation: fadeIn 1s ease-out 1.5s forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }

        .delay-100 {
          animation-delay: 0.1s;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </div>
  );
};

export default Hero;
