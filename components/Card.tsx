"use client";
import { motion } from "framer-motion";
import { ILink, profile } from "@/data/data";
import clsx from "clsx";

const Card = ({ link, index }: { link: ILink; index: number }) => {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 170,
        // Adjust delay here default 0.12
        delay: index * 0.12,
      }}
    >
      <div className="flex flex-col justify-center w-full ">
        <div className="grid grid-cols-1 gap-6 place-items-center mb-4">
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
              profile.themeDark
                ? "text-white bg-[#252525]/30 border-white/40"
                : "text-black bg-gray-300/30 border-black/40",
              "p-5 z-90 hover:shadow-md leading-normal w-full max-w-2xl flex justify-center rounded-3xl border cursor-pointer hover:ease-in-out hover:scale-[1.02] duration-100"
            )}
          >
            <h2 className="font-semibold text-sm truncate overflow-clip mx-11">
              {link.title}
            </h2>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
