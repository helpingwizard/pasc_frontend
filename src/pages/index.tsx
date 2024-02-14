import Image from "next/image";
import { Inter } from "next/font/google";
import ProfileAbout from "./profileAbout";
import PostPage from "./postPage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <PostPage></PostPage>
  );
}
