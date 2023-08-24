"use client";
import { motion } from "framer-motion";

type SemiDoughnutProps = {percentage:number};

export default function SemiDoughnut({ percentage = 50 }: SemiDoughnutProps) {
  const degree = `${45 + percentage * 1.8}deg`;

  return (
    <div className="abolute bottom-0 flex items-end">
      <div className="relative flex text-center w-[16rem] h-[8rem] align-bottom justify-center overflow-hidden">
        {degree} <br /> {percentage}%
        <motion.div
          animate={{ rotate: degree }}
          transition={{ duration: 0.5 }}
          className={`semi-doughnut_ absolute left-0 top-0 h-[16rem] w-[16rem] border-[50px] border-r-brand-lemon border-b-brand-lemon border-l-orange-400 border-t-orange-400 rounded-full`}
        />
      </div>
    </div>
  );
}
