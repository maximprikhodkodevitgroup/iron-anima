import React from "react";
import { ButtonPrimary } from "../../components/ButtonPrimary";
import { Header } from "../../components/Header";

export const HomePage = (): JSX.Element => {
  return (
    <div className="bg-[#0d0c0f] flex flex-row justify-center w-full">
      <div className="bg-black w-[1440px] h-[2186px] relative">
        <img
          className="absolute w-[1440px] h-[220px] top-[1966px] left-0"
          alt="Footer"
          src="https://c.animaapp.com/m8rbji97balPrw/img/footer.png"
        />

        <div className="absolute w-[1440px] h-[810px] top-0 left-0 bg-[url(https://c.animaapp.com/m8rbji97balPrw/img/professional-lighting-equipment-movie-set-with-smoke-air-1.png)] bg-cover bg-[50%_50%]">
          <div className="flex-col items-start top-[194px] flex w-[1280px] gap-14 absolute left-20">
            <div className="flex flex-col w-[837px] items-start gap-3 relative flex-[0_0_auto]">
              <p className="relative w-fit mt-[-1.00px] mr-[-32.00px] [font-family:'Times-Regular',Helvetica] font-normal text-white text-[64px] tracking-[0.64px] leading-[normal] whitespace-nowrap">
                Top Picks For Movie Enthusiasts
              </p>

              <p className="relative w-fit mr-[-121.00px] font-b-2 font-[number:var(--b-2-font-weight)] text-white text-[length:var(--b-2-font-size)] tracking-[var(--b-2-letter-spacing)] leading-[var(--b-2-line-height)] whitespace-nowrap [font-style:var(--b-2-font-style)]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="flex items-center gap-5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col w-[305px] h-[416px] items-start relative rounded">
                <img
                  className="relative self-stretch w-full h-[380px]"
                  alt="Image"
                  src="https://c.animaapp.com/m8rbji97balPrw/img/image.png"
                />

                <div className="absolute w-[306px] h-[416px] top-0 left-0 [background:linear-gradient(0deg,rgba(13,12,15,1)_0%,rgba(13,12,15,0.85)_21%,rgba(13,12,15,0)_47%,rgba(13,12,15,0.28)_68%,rgba(23,25,26,1)_100%)]" />

                <div className="flex flex-col w-[280px] items-start gap-1 absolute top-[343px] left-[13px]">
                  <div className="relative self-stretch mt-[-1.00px] font-button font-[number:var(--button-font-weight)] text-grayscalegrayscale-10 text-[length:var(--button-font-size)] tracking-[var(--button-letter-spacing)] leading-[var(--button-line-height)] [font-style:var(--button-font-style)]">
                    THE WESTSIDE
                  </div>

                  <div className="flex items-center justify-center self-stretch w-full gap-1 relative flex-[0_0_auto]">
                    <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                      <div className="inline-flex items-start gap-1 relative flex-[0_0_auto]">
                        <div className="relative w-[18px] h-[18px] bg-[url(https://c.animaapp.com/m8rbji97balPrw/img/star.png)] bg-[100%_100%]" />
                      </div>

                      <div className="relative w-[21px] h-5 mr-[-2.00px]">
                        <div className="absolute top-0 left-0 [font-family:'Rubik',Helvetica] font-semibold text-grayscalegrayscale-10 text-xs tracking-[0.06px] leading-5 whitespace-nowrap">
                          4.6
                        </div>
                      </div>
                    </div>

                    <div className="relative flex-1 grow h-6 mr-[-2.00px]">
                      <div className="absolute w-[235px] top-0 left-0 font-b-3 font-[number:var(--b-3-font-weight)] text-grayscalegrayscale-70 text-[length:var(--b-3-font-size)] tracking-[var(--b-3-letter-spacing)] leading-[var(--b-3-line-height)] [font-style:var(--b-3-font-style)]">
                        | Action • Movie
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-[305px] h-[416px] items-start relative rounded">
                <img
                  className="relative self-stretch w-full h-[380px]"
                  alt="Image"
                  src="https://c.animaapp.com/m8rbji97balPrw/img/image-1.png"
                />

                <div className="absolute w-[306px] h-[416px] top-0 left-0 [background:linear-gradient(0deg,rgba(13,12,15,1)_0%,rgba(13,12,15,0.85)_21%,rgba(13,12,15,0)_47%,rgba(13,12,15,0.28)_68%,rgba(23,25,26,1)_100%)]" />

                <div className="flex flex-col w-[280px] items-start gap-1 absolute top-[343px] left-[13px]">
                  <div className="relative self-stretch mt-[-1.00px] font-button font-[number:var(--button-font-weight)] text-grayscalegrayscale-10 text-[length:var(--button-font-size)] tracking-[var(--button-letter-spacing)] leading-[var(--button-line-height)] [font-style:var(--button-font-style)]">
                    THE WESTSIDE
                  </div>

                  <div className="flex items-center justify-center self-stretch w-full gap-1 relative flex-[0_0_auto]">
                    <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                      <div className="inline-flex items-start gap-1 relative flex-[0_0_auto]">
                        <div className="bg-[url(https://c.animaapp.com/m8rbji97balPrw/img/star-1.png)] relative w-[18px] h-[18px] bg-[100%_100%]" />
                      </div>

                      <div className="relative w-[21px] h-5 mr-[-2.00px]">
                        <div className="absolute top-0 left-0 [font-family:'Rubik',Helvetica] font-semibold text-grayscalegrayscale-10 text-xs tracking-[0.06px] leading-5 whitespace-nowrap">
                          4.6
                        </div>
                      </div>
                    </div>

                    <div className="relative flex-1 grow h-6 mr-[-2.00px]">
                      <div className="absolute w-[235px] top-0 left-0 font-b-3 font-[number:var(--b-3-font-weight)] text-grayscalegrayscale-70 text-[length:var(--b-3-font-size)] tracking-[var(--b-3-letter-spacing)] leading-[var(--b-3-line-height)] [font-style:var(--b-3-font-style)]">
                        | Action • Movie
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-[305px] h-[416px] items-start relative rounded">
                <img
                  className="relative self-stretch w-full h-[380px]"
                  alt="Image"
                  src="https://c.animaapp.com/m8rbji97balPrw/img/image-2.png"
                />

                <div className="absolute w-[306px] h-[416px] top-0 left-0 [background:linear-gradient(0deg,rgba(13,12,15,1)_0%,rgba(13,12,15,0.85)_21%,rgba(13,12,15,0)_47%,rgba(13,12,15,0.28)_68%,rgba(23,25,26,1)_100%)]" />

                <div className="flex flex-col w-[280px] items-start gap-1 absolute top-[343px] left-[13px]">
                  <div className="relative self-stretch mt-[-1.00px] font-button font-[number:var(--button-font-weight)] text-grayscalegrayscale-10 text-[length:var(--button-font-size)] tracking-[var(--button-letter-spacing)] leading-[var(--button-line-height)] [font-style:var(--button-font-style)]">
                    THE WESTSIDE
                  </div>

                  <div className="flex items-center justify-center self-stretch w-full gap-1 relative flex-[0_0_auto]">
                    <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                      <div className="inline-flex items-start gap-1 relative flex-[0_0_auto]">
                        <div className="bg-[url(https://c.animaapp.com/m8rbji97balPrw/img/star-2.png)] relative w-[18px] h-[18px] bg-[100%_100%]" />
                      </div>

                      <div className="relative w-[21px] h-5 mr-[-2.00px]">
                        <div className="absolute top-0 left-0 [font-family:'Rubik',Helvetica] font-semibold text-grayscalegrayscale-10 text-xs tracking-[0.06px] leading-5 whitespace-nowrap">
                          4.6
                        </div>
                      </div>
                    </div>

                    <div className="relative flex-1 grow h-6 mr-[-2.00px]">
                      <div className="absolute w-[235px] top-0 left-0 font-b-3 font-[number:var(--b-3-font-weight)] text-grayscalegrayscale-70 text-[length:var(--b-3-font-size)] tracking-[var(--b-3-letter-spacing)] leading-[var(--b-3-line-height)] [font-style:var(--b-3-font-style)]">
                        | Action • Movie
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-[305px] h-[416px] items-start relative rounded">
                <img
                  className="relative self-stretch w-full h-[380px]"
                  alt="Image"
                  src="https://c.animaapp.com/m8rbji97balPrw/img/image-3.png"
                />

                <div className="absolute w-[306px] h-[416px] top-0 left-0 [background:linear-gradient(0deg,rgba(13,12,15,1)_0%,rgba(13,12,15,0.85)_21%,rgba(13,12,15,0)_47%,rgba(13,12,15,0.28)_68%,rgba(23,25,26,1)_100%)]" />

                <div className="flex flex-col w-[280px] items-start gap-1 absolute top-[343px] left-[13px]">
                  <div className="relative self-stretch mt-[-1.00px] font-button font-[number:var(--button-font-weight)] text-grayscalegrayscale-10 text-[length:var(--button-font-size)] tracking-[var(--button-letter-spacing)] leading-[var(--button-line-height)] [font-style:var(--button-font-style)]">
                    THE WESTSIDE
                  </div>

                  <div className="flex items-center justify-center self-stretch w-full gap-1 relative flex-[0_0_auto]">
                    <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                      <div className="inline-flex items-start gap-1 relative flex-[0_0_auto]">
                        <div className="bg-[url(https://c.animaapp.com/m8rbji97balPrw/img/star-3.png)] relative w-[18px] h-[18px] bg-[100%_100%]" />
                      </div>

                      <div className="relative w-[21px] h-5 mr-[-2.00px]">
                        <div className="absolute top-0 left-0 [font-family:'Rubik',Helvetica] font-semibold text-grayscalegrayscale-10 text-xs tracking-[0.06px] leading-5 whitespace-nowrap">
                          4.6
                        </div>
                      </div>
                    </div>

                    <div className="relative flex-1 grow h-6 mr-[-2.00px]">
                      <div className="absolute w-[235px] top-0 left-0 font-b-3 font-[number:var(--b-3-font-weight)] text-grayscalegrayscale-70 text-[length:var(--b-3-font-size)] tracking-[var(--b-3-letter-spacing)] leading-[var(--b-3-line-height)] [font-style:var(--b-3-font-style)]">
                        | Action • Movie
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Header
            className="!absolute !left-20 !bg-transparent !top-9"
            property1="pressed"
            visible={false}
          />
        </div>

        <div className="items-center top-[916px] flex w-[1280px] gap-14 absolute left-20">
          <img
            className="relative flex-1 grow h-[400px]"
            alt="Image"
            src="https://c.animaapp.com/m8rbji97balPrw/img/image-4.png"
          />

          <div className="flex flex-col w-[630px] items-start justify-center gap-10 relative self-stretch">
            <div className="relative self-stretch font-h1 font-[number:var(--h1-font-weight)] text-white text-[length:var(--h1-font-size)] tracking-[var(--h1-letter-spacing)] leading-[var(--h1-line-height)] [font-style:var(--h1-font-style)]">
              Who We Are
            </div>

            <p className="relative self-stretch font-b-2 font-[number:var(--b-2-font-weight)] text-[#c3c9cf] text-[length:var(--b-2-font-size)] tracking-[var(--b-2-letter-spacing)] leading-[var(--b-2-line-height)] [font-style:var(--b-2-font-style)]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <ButtonPrimary
              className="!h-[46px]"
              logInClassName="!mr-[-126.50px] !mt-[-1.00px] !ml-[-126.50px]"
              property1="default"
              text="WATCH NOW"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
