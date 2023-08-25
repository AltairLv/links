"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "@/data/data";
import clsx from "clsx";
import Image from "next/image";

const Navbar = () => {
  const profileImg = `/${profile.avatar}`;

  const [navShow, setNavShow] = useState<boolean>(false);
  const [copy, setCopy] = useState(false);
  const handleCopy = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    try {
      await navigator.share({
        title: `${profile.username} | Links`,
        text: "Check out my link!",
        url: window.location.href,
      });
      setCopy(true);
      setTimeout(() => setCopy(false), 5000);
    } catch (err) {
      console.error(err);
    }
  };

  const listenToScroll = () => {
    let heightToShowFrom = 50;

    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll < heightToShowFrom) {
      setNavShow(false);
    } else {
      setNavShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);

    return () => {
      window.removeEventListener("scroll", listenToScroll);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {navShow && (
          <header className="fixed flex w-full items-center justify-center top-3 z-50">
            <motion.div
              initial={{ translateY: -10, opacity: 0.7 }}
              animate={{ translateY: 0, opacity: 1 }}
              exit={{ translateY: -2, opacity: 0.7 }}
              transition={{ duration: 0.1 }}
              className={clsx(
                profile.themeDark
                  ? "bg-black/50 border-white/30"
                  : "bg-white/50 border-black/30",
                "mx-5 p-2.5 sm:p-3 flex flex-1 sm:max-w-3xl justify-between items-center rounded-full border backdrop-blur"
              )}
            >
              <Image
                width={40}
                height={40}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                src={profileImg}
                className="rounded-full w-11 h-11 shadow-md cursor-pointer shadow-black/10"
                alt="Profile Picture"
              />

              <div>
                <h1 className="font-semibold text-base">@{profile.username}</h1>
              </div>

              <div onClick={handleCopy}>
                <div
                  className={clsx(
                    profile.themeDark
                      ? "bg-white hover:bg-white/90"
                      : "bg-black hover:bg-black/90",
                    "w-11 h-11  duration-150 rounded-full flex justify-center items-center cursor-pointer"
                  )}
                >
                  {copy ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke={profile.themeDark ? "black" : "white"}
                      className={clsx(copy && "animate-pulse", "w-6 h-6 ")}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  ) : (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        className="w-5 h-5"
                        fill={profile.themeDark ? "black" : "white"}
                      >
                        {" "}
                        <path
                          fillRule="evenodd"
                          d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"
                        />{" "}
                        <path
                          fillRule="evenodd"
                          d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z"
                        />
                      </svg>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </header>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
