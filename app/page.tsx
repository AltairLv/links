import Profile from "@/components/Profile";
import Card from "@/components/Card";
import { ILink, links } from "@/data/data";

export default function Home() {
  return (
    <>
      <Profile />
      <div className="mt-10">
        {links.map((link: ILink, index) => (
          <Card key={index} link={link} index={index} />
        ))}
      </div>
    </>
  );
}
