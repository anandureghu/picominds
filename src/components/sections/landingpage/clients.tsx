import React from "react";
import GrandisPly from "@/assets/clients/grandisply.png";
import Spendlux from "@/assets/clients/spendlux.png";
import KalayilLatexAndTraders from "@/assets/clients/kalayil-latex-and-traders.png";
import PayzoPayroll from "@/assets/clients/payzo-payroll.png";
import Image from "next/image";

const Clients = () => {
  const clients = [GrandisPly, Spendlux, KalayilLatexAndTraders, PayzoPayroll];
  return (
    <section className="py-[150px] app-container text-center">
      <header className="mb-[100px]">
        <h1 className="text-4xl font-serif  mx-auto">
          Trusted by forward-thinking <br /> brands, startups & creators 🚀
        </h1>
      </header>
      <main className="flex justify-center items-center mx-auto">
        {clients.map((client) => {
          return (
            <Image
              key={client.src}
              src={client}
              height={50}
              alt={client.src}
              width={client.width}
              className="object-contain max-h-[50px]"
            />
          );
        })}
      </main>
    </section>
  );
};

export default Clients;
