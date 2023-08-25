"use client";
import { motion } from "framer-motion";
import { profile } from "@/data/data";
import clsx from "clsx";
import Image from "next/image";

const Profile = () => {
  const profileImg = `/${profile.avatar}`;

  return (
    <>
      <div className="flex flex-col w-full items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 170 }}
        >
          <Image
            src={profileImg}
            width={100}
            height={100}
            priority
            className="rounded-full w-24 mb-4 shadow-md shadow-black/20"
            alt="Profile Picture"
          />
        </motion.div>
        <h1 className="font-bold text-lg leading-normal">
          @{profile.username}
        </h1>
        {profile.description && (
          <p
            className={clsx(
              profile.themeDark ? "text-neutral-400" : "text-neutral-600",
              "leading-tight mt-3 text-[16] font-semibold max-w-md md:max-w-xl text-center"
            )}
          >
            {profile.description}
          </p>
        )}
      </div>
    </>
  );
};

export default Profile;
