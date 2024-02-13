import Image from "next/image";
import { Inter } from "next/font/google";
import ProfileAbout from "./profileAbout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <ProfileAbout></ProfileAbout>
  );
}
