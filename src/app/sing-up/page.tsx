"use client"
import React , {useState} from "react"

function singUp(){
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [username , steUsername] = useState("")

    function handleSubmit(event : any){
        event.preventDefault();
        console.log('Submitted:', { email , username });
    }
    return (
        <div className="min-h-screen bg-black text-white font-sans text-3xl py-36 px-12 text-center">

           <h1 className="text-center justify-center text-lg font-bold font-sans text-white md:text-7xl mb-8"> Sing Up </h1>

           <div className="max-w-2xl mx-auto p-4 relative z-10">
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <input type="email"
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="Your Email Address"
                className="rounded-lg border border-neutral-800 
                focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 
                placeholder:text-neutral-700"
                required
                />

            <input type="text"
                onChange={(e)=>steUsername(e.target.value)}
                placeholder="Your user name"
                className="rounded-lg border border-neutral-800 
                focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 
                placeholder:text-neutral-700"
                required
                />


            <input type="password"
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="Enter password"
                className="rounded-lg border border-neutral-800 
                focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 
                placeholder:text-neutral-700"
                required
                />
            <button 
                type="submit"
                className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium
                 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                > Submit </button>
            </form>
           </div>

         </div>
    )
}

export default singUp