import { profile } from "@/data/data";
import clsx from "clsx";

const Footer = () => {
  return (
    <>
      {profile.country && (
        <footer
          className={clsx(
            profile.themeDark ? "text-neutral-400" : "text-neutral-600",
            "flex mt-6 md:-mb-10 justify-center text-sm"
          )}
        >
          <span className="font-sans mr-1">&copy;</span>
          {new Date().getFullYear()} Made with ❤️ in {profile.country}.
        </footer>
      )}
    </>
  );
};

export default Footer;
