import Link from "next/link";
import { Icons } from "./icons";


interface BackButtonProps {
  text: string;
  link: string;
}

const BackButton = ({ text, link }: BackButtonProps) => {
  return (
    <Link
      href={link}
      className=" text-gray-500 hover:underline flex items-center gap-1 font-bold mb-5"
    >
      <Icons.arrowRight size={18} /> {text}
    </Link>
  );
};

export default BackButton;
