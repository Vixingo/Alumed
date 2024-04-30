import { Button, Text } from "components";
import { motion } from "framer-motion";
import React from "react";

function Allspace() {
  return (
    <div>
      {" "}
      <div className="flex md:flex-col justify-between w-full mt-6 gap-5 mx-auto md:p-5 max-w-[1390px]">
        <div className="flex justify-center w-[49%] md:w-full pb-[68px] md:pb-5">
          <div className="flex w-full pb-[178px] md:pb-5">
            <Text
              size="3xl"
              as="p"
              className="w-[80%] font-medium leading-[68px]"
            >
              If we make it, we
              <br />
              mean it.
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-start w-[24%] md:w-full pb-[33px] gap-[3px] sm:pb-5">
          <div className="flex flex-col gap-[22px]">
            <div className="flex flex-col items-start">
              <Text
                size="md"
                as="p"
                className="!text-[16px] font-medium font-inter"
              >
                Whatever the project, we build it well, we
              </Text>
              <Text
                size="md"
                as="p"
                className="!text-[16px] font-medium font-inter"
              >
                build it to last, and we build it with you in
              </Text>
              <Text
                size="lg"
                as="p"
                className="!text-[16px] font-medium font-inter"
              >
                mind.
              </Text>
            </div>
            <div className="flex flex-col items-start">
              <Text
                size="md"
                as="p"
                className="!text-[16px] font-medium font-inter"
              >
                With industrial space for rent in key
              </Text>
              <Text
                size="lg"
                as="p"
                className="!text-[16px] font-medium font-inter"
              >
                Montreal locations, our modern buildings’
              </Text>
              <Text
                size="md"
                as="p"
                className="!text-[16px] font-medium font-inter"
              >
                durable, modular design will meet your
              </Text>
              <Text
                size="md"
                as="p"
                className="!text-[16px] font-medium font-inter"
              >
                needs at scale. Whether you’re in
              </Text>
              <Text
                size="md"
                as="p"
                className="!text-[16px] font-medium font-inter"
              >
                manufacturing, distribution, or
              </Text>
              <Text
                size="md"
                as="p"
                className="!text-[16px] font-medium font-inter"
              >
                warehousing, our units offer customization,
              </Text>
              <Text
                size="lg"
                as="p"
                className="!text-[16px] font-medium font-inter"
              >
                ecological energy efficiency, and long-term
              </Text>
              <Text
                size="md"
                as="p"
                className="!text-[16px] font-medium font-inter"
              >
                use so you can you thrive.
              </Text>
            </div>
          </div>
          <div className="group flex flex-col items-end w-[55%] md:w-full">
            <div className=" flex flex-col self-stretch items-end mt-[22px] relative">
              <span
                style={{
                  clipPath: "polygon(51% 0,102% 50%,100% 50%,100% 0)",
                  width: "40px",
                  height: "40px",

                  transform: "translate(0%, 50%)",
                  border: "1px solid #1b2c50",
                  borderRadius: "100%",
                }}
                className="h-[42px] w-[42px] mr-[25px] md:mr-0 z-[1] hidden"
              />
              {/* <div className=" h-[2px] w-[19px] mr-[25px] md:mr-0 z-[1] mt-[-2px] bg-blue_gray-900 delay-300 group-hover:origin-left  group-hover:rotate-[-90deg] " /> */}
              <Button
                shape="square"
                className="w-full mt-[-1px] uppercase relative "
              >
                All Our Spaces
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Allspace;
