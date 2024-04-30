import { Img, Text } from "components";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="h-screen md:h-auto bg-blue_gray-900 bg-[url(/images/img_div_home_hero_810x1440.png)] bg-cover bg-no-repeat">
      <div className="h-screen md:h-auto bg-[url(/images/img_group_42.png)] bg-cover bg-no-repeat">
        <div className="h-screen w-full mx-auto md:pb-5 max-w-[1390px] sm:mt-auto sm:flex sm:justify-end sm:flex-col ">
          <div>
            <div className="flex justify-end sm:justify-start relative sm:mx-4 mr-12 ">
              <div className="flex flex-col items-start ">
                <motion.div
                  initial={{
                    opacity: 0,
                    x: -400,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.7,
                      ease: "easeInOut",
                    },
                  }}
                >
                  <Text
                    size="7xl"
                    as="p"
                    className="!text-white-A700 uppercase text-[91.1px] sm:text-5xl"
                  >
                    The Passion
                  </Text>
                </motion.div>

                <motion.div
                  initial={{
                    opacity: 0,
                    x: -400,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      delay: 0.7,
                      duration: 0.7,
                      ease: "easeInOut",
                    },
                  }}
                >
                  <Text
                    size="7xl"
                    as="p"
                    className=" mt-[-22px] mb-2 sm:mt-2 !text-white-A700 uppercase text-[88.13px] sm:text-5xl relative"
                  >
                    is Built-in
                  </Text>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col justify-between items-center mt-[250px] pb-5 pr-5 gap-5 sm:hidden">
            <div className="flex md:flex-col justify-center items-center w-[67%] md:w-full gap-5 ">
              <div className="flex md:self-stretch flex-1">
                <Text
                  as="p"
                  className="w-[69%] !text-white-A700 uppercase !font-normal leading-[13px]"
                >
                  <>
                    Press enter to open
                    <br />
                    loading doors
                  </>
                </Text>
              </div>
              <div className="flex w-[50%] md:w-full">
                <Text
                  size="xs"
                  as="p"
                  className="w-[11%] !text-white-A700 uppercase !text-[11.98px] leading-[13px]"
                >
                  <>
                    Trucks
                    <br />
                    /1
                  </>
                </Text>
              </div>
              <div className="flex flex-col items-start">
                <Text as="p" className="!text-white-A700 !text-[13.48px]">
                  Real-estate development that’s
                </Text>
                <Text as="p" className="!text-white-A700 !text-[13.36px]">
                  driven by purpose
                </Text>
              </div>
            </div>
            <Img
              src="images/img_svg.svg"
              alt="svg_one"
              className="self-start h-[34px] md:w-full"
            />
          </div>
          <div className="flex flex-col mt-0.5 pb-[38px] gap-5 sm:pb-5 ">
            <div className="h-[2px] bg-white-A700" />
            <div className="flex md:flex-col justify-between gap-5">
              <div className="flex sm:flex-col justify-center w-[41%] md:w-full sm:hidden">
                <Img
                  src="images/img_image_156x215.png"
                  alt="image_one"
                  className="w-[38%] max-h-44 sm:w-full object-cover mr-4"
                />
                <div className="flex flex-col sm:self-stretch gap-[82px] md:gap-[61px] sm:gap-[41px] flex-1">
                  <div className="flex flex-col items-start gap-[9px]">
                    <a
                      href="https://edifis.ca/en/spaces/ymx-1/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Text as="p" className="!text-white-A700 !text-[13.71px]">
                        Featured space
                      </Text>
                    </a>
                    <div className="flex items-center">
                      <a
                        href="https://edifis.ca/en/spaces/ymx-1/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Text
                          size="md"
                          as="p"
                          className="!text-white-A700 !text-[16.92px]"
                        >
                          YMX 1
                        </Text>
                      </a>
                      <Img
                        src="images/img_arrow_left.svg"
                        alt="arrowleft_one"
                        className="h-[12px]"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between gap-5">
                    <div className="flex self-start items-center">
                      <Img
                        src="images/img_checkmark.svg"
                        alt="checkmark_one"
                        className="h-[15px]"
                      />
                      <a
                        href="https://edifis.ca/en/spaces/ymx-1/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Text
                          as="p"
                          className="!text-white-A700 !text-[13.48px]"
                        >
                          Available for rent
                        </Text>
                      </a>
                    </div>
                    <a
                      href="https://edifis.ca/en/spaces/ymx-1/"
                      target="_blank"
                      rel="noreferrer"
                      className="self-end"
                    >
                      <Text as="p" className="!text-white-A700 !text-[13.59px]">
                        Mirabel
                      </Text>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col justify-between w-[49%] md:w-full gap-5">
                <div className="flex flex-col items-start ">
                  <motion.div>
                    <Text
                      size="md"
                      as="p"
                      className="!text-white-A700 !text-[16.92px] mx-4 "
                    >
                      At ALUMED, we bring passion and purpose to everything we
                      build – from industrial spaces that make room for bold
                      ideas to residential and mixed-used projects that help
                      communities grow.
                    </Text>
                  </motion.div>
                </div>
                <div className="flex flex-col items-start w-full py-[5px] sm:hidden">
                  <a
                    href="https://edifis.ca/en/spaces/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Text as="p" className="!text-white-A700 !text-[13.83px]">
                      Our Spaces
                    </Text>
                  </a>
                  <div className="self-stretch h-[1px] mb-1 mt-[3px] bg-white-A700" />
                  <a
                    href="https://edifis.ca/en/expertise/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-[-2px] relative"
                  >
                    <Text as="p" className="!text-white-A700 !text-[13.83px]">
                      Our Expertise
                    </Text>
                  </a>
                  <div className="self-stretch h-[1px] mb-1 mt-[3px] bg-white-A700" />
                  <a
                    href="https://edifis.ca/en/about-us/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-[-3px] relative"
                  >
                    <Text as="p" className="!text-white-A700 !text-[13.48px]">
                      About Us
                    </Text>
                  </a>
                  <div className="self-stretch h-[1px] mb-1 mt-1 bg-white-A700" />
                  <a
                    href="https://edifis.ca/en/contact/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-[-3px] relative"
                  >
                    <Text as="p" className="!text-white-A700 !text-[13.48px]">
                      Contact Us
                    </Text>
                  </a>
                  <div className="self-stretch h-[1px]  mt-1 mb-[42px] bg-white-A700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
