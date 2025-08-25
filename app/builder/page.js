"use client";
import { useCard } from "../context/CardContext.js";
import { useRouter } from "next/navigation";
import { useState } from "react";
import "../globals.css";
import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});


export default function Builder(){
    const {cardData, setCardData} = useCard();
    const router = useRouter();

    //track values of inputs (create state variables) (local state)
    const [fullName, setFullName] = useState(cardData.name);
    const [title, setTitle] = useState(cardData.title);
    const [education, setEducation] = useState(cardData.education);
    const [email, setEmail] = useState(cardData.email);
    const [github, setGithub] = useState(cardData.github);
    const [linkedin, setLinkedin] = useState(cardData.linkedin);
    const [languages, setLanguages] = useState(cardData.languages.join(", ")); //array, join(", ") so it fits into a text box
    const [frameworks, setFrameworks] = useState(cardData.frameworks.join(", ")); //array

    //when hit submit button
    const handleSubmit = () =>{
        //update global card into
        setCardData({
            fullName,
            title,
            education,
            email,
            github,
            linkedin,
            languages: languages.split(",").map((lang) => lang.trim()), /**convert back to an array*/
            frameworks: frameworks.split(",").map((fw) => fw.trim()),
        });

        //go to Preview page
        router.push("/preview");
    };

    return(
        // <div className="flex flex-col items-center justify-center min-h-screen w-full h-full relative overflow-hidden">
        //     <main className="flex-grow flex flex-col items-center justify-center bg-slate-500">
        //         {/* Background grid */}
        //         {/* <div className="absolute inset-0 -z-20 bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div> */}
        //         <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#4f4f4f99_1px,transparent_1px), linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        //         {/* <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,red_1px,transparent_1px),linear-gradient(to_bottom,red_1px,transparent_1px)] bg-[size:14px_24px]"></div> */}
        //     </main>
        // </div>
        <div className="flex flex-col items-center justify-center absolute inset-0 bg-slate-950">
            {/* Background grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:14px_24px]"></div>

            {/* Form for inputting data */}
            <div className="flex flex-col items-center justify-center flex-wrap bg-black p-8 rounded-3xl w-[70%]">
                <div className={`text-4xl md:text-5xl text-center p-8 ${spaceMono.className} font-bold text-violet-200 text-glow max-w-4xl mb-5`}>Build Your Card</div>
                
                <div className="flex flex-row items-center justify-between flex-wrap gap-10 w-[65%] mb-2">
                    <div className="text-white font-mono">Full Name</div>
                    <input
                    type="text"
                    placeholder="Enter your full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="border p-2 rounded w-[70%] bg-violet-100 -z-0"
                    />
                </div>

                <div className="flex flex-row items-center justify-between flex-wrap gap-10 w-[65%] mb-2">
                    <div className="text-white font-mono">Title</div>
                    <input
                    type="text"
                    placeholder="Enter your title (e.g. Student, Software Develop I)"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border p-2 rounded w-[70%] bg-violet-100 -z-0"
                    />
                </div>

                <div className="flex flex-row items-center justify-between flex-wrap gap-10 w-[65%] mb-2">
                    <div className="text-white font-mono">Education</div>
                    <input
                    type="text"
                    placeholder="Enter your education (e.g. University of Manitoba, Bachelor of Computer Science)"
                    value={education}
                    onChange={(e) => setEducation(e.target.value)}
                    className="border p-2 rounded  w-[70%] bg-violet-100 -z-0"
                    />
                </div>

                <div className="flex flex-row items-center justify-between flex-wrap gap-10 w-[65%] mb-2">
                    <div className="text-white font-mono">Email</div>
                    <input
                    type="text"
                    placeholder="Enter your email (e.g. flower405@gmail.com)"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border p-2 rounded  w-[70%] bg-violet-100 -z-0"
                    />
                </div>

                <div className="flex flex-row items-center justify-between flex-wrap gap-10 w-[65%] mb-2">
                    <div className="text-white font-mono">Github</div>
                    <input
                    type="text"
                    placeholder="Enter your email (e.g. flower405@gmail.com)"
                    value={github}
                    onChange={(e) => setGithub(e.target.value)}
                    className="border p-2 rounded  w-[70%] bg-violet-100 -z-0"
                    />
                </div>

                <div className="flex flex-row items-center justify-between flex-wrap gap-10 w-[65%] mb-2">
                    <div className="text-white font-mono">LinkedIn URL</div>
                    <input
                    type="text"
                    placeholder="Enter your Linkedin URL (e.g. www.linkedin.com/in/user)"
                    value={linkedin}
                    onChange={(e) => setLinkedin(e.target.value)}
                    className="border p-2 rounded  w-[70%] bg-violet-100 -z-0"
                    />
                </div>

                {/* Need to fix styling on phone screen and do inputs for the arrays */}

            </div>
        </div>
    );
}