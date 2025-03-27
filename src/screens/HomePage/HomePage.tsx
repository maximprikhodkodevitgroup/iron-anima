import React from "react";
import { Link } from "react-router-dom";
import { MainLayout } from "../../layouts/MainLayout";
import { ButtonPrimary } from "../../components/ButtonPrimary";

export const HomePage = (): JSX.Element => {
  return (
    <MainLayout>
      <div className="flex flex-col items-center w-full">
        {/* Hero Section */}
        <section className="w-full bg-cover bg-center h-[810px] flex items-center justify-center" style={{backgroundImage: "url(https://c.animaapp.com/m8rbji97balPrw/img/professional-lighting-equipment-movie-set-with-smoke-air-1.png)"}}>
          <div className="container mx-auto px-4">
            <div className="max-w-[837px] text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Top Picks For Movie Enthusiasts</h1>
              <p className="text-xl text-white mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </section>

        {/* Movie Cards Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="relative rounded overflow-hidden">
                <img
                  className="w-full h-[380px] object-cover"
                  alt={`Movie ${index}`}
                  src={`https://c.animaapp.com/m8rbji97balPrw/img/image-${index}.png`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-xl font-semibold mb-2">THE WESTSIDE</h3>
                  <div className="flex items-center text-white">
                    <span className="mr-2">⭐ 4.6</span>
                    <span className="text-gray-300">| Action • Movie</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row items-center gap-14">
            <img
              className="w-full lg:w-1/2 h-[400px] object-cover rounded"
              alt="About Us"
              src="https://c.animaapp.com/m8rbji97balPrw/img/image-4.png"
            />
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-white mb-6">Who We Are</h2>
              <p className="text-gray-300 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <ButtonPrimary
                className="!transition-all !duration-[0.2s] !ease-[ease] !text-main !border-0 !p-0 !bg-[#00cce7] !w-full sm:!w-auto hover:!bg-white"
                logInClassName="!mr-[unset] !ml-[unset]"
                property1="default"
                text="WATCH NOW"
              />
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};
