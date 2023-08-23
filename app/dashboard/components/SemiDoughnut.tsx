"use client";
import { motion } from "framer-motion";

type Props = {};

export default function SemiDoughnut() {
  const percentage = 100;
  const degree = `${(45)+percentage * 1.8}deg`;

  return (
    <div className="semi-doughnut-wrapper_ relative flex text-center w-[10rem] h-[5rem] align-bottom justify-center">
      {degree} <br /> {percentage}%
      <motion.div animate={{ rotate: degree }} className={`semi-doughnut_ absolute left-0 top-0 h-[10rem] w-[10rem] border-[50px] border-l-brand-lemon border-r-orange-400 rounded-full`} />
    </div>
  );
}
