export default function newPg() {
    return (
        <div className="flex justify-center mt-40">
            
            <div className="w-full md:max-w-3xl rounded overflow-hidden shadow-lg">
                
                <div className="px-6 py-4">
                   
                    <div className="mb-4">
                        
                    <input className="shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Title"/>

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

                    <button className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 border border-blue-700 rounded">
                    Save draft
                    </button>

                    <button className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 border border-blue-700 rounded">
                    Post
                    </button>
                </div>
            </div>
        </div>
    );
}
