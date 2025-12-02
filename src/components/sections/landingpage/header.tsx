import Image from "next/image";
import React from "react";
import TextLogo from "@/assets/text-logo/picominds.svg";
import Button from "@/components/ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <main className="h-dvh relative flex items-center justify-center">
      <div className="flex-col gap-2 w-full text-center max-w-3/4">
        <h2 className="text-2xl">
          Let&apos;s start 🚀 your next big tech project with
        </h2>
        <div className="relative h-[20vh] max-md:h-[18vh] max-sm:h-[15vh] w-full">
          <Image src={TextLogo} fill={true} alt="picominds" />
        </div>
        <h3 className="text-2xl max-w-3/4 max-md:max-w-full mx-auto">
          We&apos;re a crew of software engineers, designers & tech enthusiasts
          on a mission to bring powerful digital ideas to life.
        </h3>
        <div className="flex items-center justify-center mt-[20px]">
          <Link href="#contact" scroll={true}>
            <Button className="text-[20px] font-semibold">
              get started with a project
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Header;
