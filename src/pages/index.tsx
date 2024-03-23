
import { Inter } from "next/font/google";

import PostPage from "./postPage";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
    
    <PostPage/>
    </div>
  );
}
