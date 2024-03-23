import axios from "axios"
import { useRouter } from "next/router"
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function PostPage() {
    
    
    const [title, setTitle] = useState("");
    const [domain, setDomain] = useState("");
    const [content, setContent] = useState("");
    

    const handleSubmit = async () => {
        try {
            const response = await axios.post("http://localhost:3000/posts/createPost", {
                fk_user: '13',
                fk_domain_id :"1",
                title: title,
                content: content,
                link :"ihih"
            }, {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzIiwiaWF0IjoxNzExMjIzNjU1LCJleHAiOjE3MTEzMTAwNTV9.HK_rNC_kBia147qXaM6jCImf2c4WnSctktffx2CoHHg"
                }
            });
            console.log(response)
            alert("post added");
    
        } catch (error:any) {
            console.error("Error:", error);
    
        }
    };
    
    
      
    
    return (
        <div className="flex justify-center mt-40">
            
            <div className="w-full md:max-w-3xl rounded overflow-hidden shadow-lg">
                
                <div className="px-6 py-4">
                   
                    <div className="mb-4">
                        
                    <input onChange={(e) => setTitle(e.target.value)} className="shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Title"/>

                    </div>
                </div>

                <div className="px-6 py-4">
                   
                    <div className="mb-4">
                        
                        <input className="shadow appearance-none border  border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Domain"/>
                    </div>
                </div>

                <div className="px-6 py-4">
                    <div className="mb-4">
                        <textarea
                        onChange={(e) => setContent(e.target.value)}
                            className="h-72 md:h-96 shadow appearance-none border  border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            placeholder="Content"
                        />
                    </div>
                </div>

                <div className="px-6 pt-4 pb-2 flex justify-end space-x-9">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 border border-blue-700 rounded">
                    Add media
                    </button>

                    <button onClick={() => {toast("button pressed")}}className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 border border-blue-700 rounded">
                    Save draft
                    </button>

                    <button onClick= {() => {handleSubmit(); toast("Posted!")}} className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 border border-blue-700 rounded">
                    Post
                    </button>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
        
}