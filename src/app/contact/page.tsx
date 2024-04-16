"use client"

import React , {useState} from "react";
import { Meteors } from "@/components/ui/meteors";



function contact(){
    const [email , setEmail] = useState("")
    const [message , setMessage] = useState("")
    function handleSumbit(){
        if(message.length==0 || email.length==0){
            throw new Error("Please enter the email and message")
        }

        console.log("email :",email);
        console.log("message :",message);
        
        
    }
    return (
        <div className="min-h-screen bg-black py-12 pt-36 "> 
           <h1 className="text-center justify-center text-lg font-bold font-sans text-white md:text-7xl mb-8"> Contact Us </h1>

           <div className="max-w-2xl mx-auto p-4 relative z-10">


           <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
          We&apos;re here to help with any questions about our courses,
          programs, or events. Reach out and let us know how we can assist you
          in your musical journey.
        </p>

            <form onSubmit={handleSumbit} className="space-y-4 mt-4 px-10">
                <input type="email"
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="Your Email Address"
                className="rounded-lg border border-neutral-800 
                focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 
                placeholder:text-neutral-700"
                required
                />

                <textarea name="message" id="me"
                placeholder="Your message"
                onChange={(e)=>setMessage(e.target.value)}
                className="rounded-lg border border-neutral-800 focus:ring-2 
                focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
                rows={5}
                required
                ></textarea>

                <button 
                type="submit"
                className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium
                 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                > Submit </button>
            </form>
           </div>

           <Meteors
           number={50}/>
        
         </div>
    )
}

export default contact