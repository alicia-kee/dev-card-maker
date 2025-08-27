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
    //const [languages, setLanguages] = useState(cardData.languages.join(", ")); //array, join(", ") so it fits into a text box
    //const [frameworks, setFrameworks] = useState(cardData.frameworks.join(", ")); //array
    const [langInput, setLangInput] = useState(""); //text being currently typed by user
    const [languages, setLanguages] = useState([]); //array of languages, initially empty []
    const [frameInput, setFrameInput] = useState(""); 
    const [frameworks, setFrameworks] = useState([]); 

    //when user hits enter to input a language (and input not empty)
    const handleEnterLanguages = (e) => {
        if (e.key === "Enter" && langInput.trim() !== "") {
            e.preventDefault(); //stops the Enter key from submitting a form or making a new line
            setLanguages([...languages, langInput.trim()]); //adds the current input text to current languages array(...languages)
            setLangInput("");//clears text box
        }
    };
    //remove item from array
    const removeLanguage = (index) => {
        setLanguages(languages.filter((_, i) => i !== index));
    };

        //when user hits enter to input a language (and input not empty)
    const handleEnterFrameworks = (e) => {
        if (e.key === "Enter" && frameInput.trim() !== "") {
            e.preventDefault(); //stops the Enter key from submitting a form or making a new line
            setFrameworks([...frameworks, frameInput.trim()]); //adds the current input text to current languages array(...languages)
            setFrameInput("");//clears text box
        }
    };
    //remove item from array
    const removeFramework = (index) => {
        setFrameworks(frameworks.filter((_, i) => i !== index));
    };


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
            languages, 
            frameworks,
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
        <div className="flex flex-col items-center justify-center inset-0 bg-slate-950 min-h-screen w-full relative overflow-hidden">
            {/* Background grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:14px_24px]"></div>

            {/* Form for inputting data */}
            <div className="flex flex-col items-center justify-center flex-wrap bg-indigo-950 p-8 rounded-3xl w-[85%] my-8">
                <div className={`text-4xl md:text-5xl text-center p-8 ${spaceMono.className} font-bold text-violet-200 text-glow max-w-4xl mb-5`}>Build Your Card</div>
                
                <div className="flex flex-col items-start justify-center flex-wrap gap-3 w-[65%] mb-5 text-sm md:text-lg">
                    <div className="text-white font-mono">Full Name</div>
                    {/* input box, value is controlled by React, onChange updates input as user types */}
                    <input
                    type="text"
                    placeholder="e.g. Allison Smith"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="border px-2 py-1 rounded w-full bg-violet-100 -z-0"
                    />
                </div>

                <div className="flex flex-col items-start justify-center flex-wrap gap-3 w-[65%] mb-5 text-sm md:text-lg">
                    <div className="text-white font-mono">Title</div>
                    <input
                    type="text"
                    placeholder="e.g. University Student, Software Develop I, etc."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border px-2 py-1 rounded w-full bg-violet-100 -z-0"
                    />
                </div>

                <div className="flex flex-col items-start justify-center flex-wrap gap-3 w-[65%] mb-5 text-sm md:text-lg">
                    <div className="text-white font-mono">Education</div>
                    <input
                    type="text"
                    placeholder="e.g. University of Manitoba, Bachelor of Computer Science"
                    value={education}
                    onChange={(e) => setEducation(e.target.value)}
                    className="border px-2 py-1 rounded w-full bg-violet-100 -z-0"
                    />
                </div>

                <div className="flex flex-col items-start justify-between flex-wrap gap-3 w-[65%] mb-5 text-sm md:text-lg">
                    <div className="text-white font-mono">Email</div>
                    <input
                    type="text"
                    placeholder="e.g. asmith405@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border px-2 py-1 rounded w-full bg-violet-100 -z-0"
                    />
                </div>

                <div className="flex flex-col items-start justify-between flex-wrap gap-3 w-[65%] mb-5 text-sm md:text-lg">
                    <div className="text-white font-mono">Github URL</div>
                    <input
                    type="text"
                    placeholder="e.g. https://github.com/al-smith"
                    value={github}
                    onChange={(e) => setGithub(e.target.value)}
                    className="border px-2 py-1 rounded w-full bg-violet-100 -z-0"
                    />
                </div>

                <div className="flex flex-col items-start justify-between flex-wrap gap-3 w-[65%] mb-5 text-sm md:text-lg">
                    <div className="text-white font-mono">LinkedIn URL</div>
                    <input
                    type="text"
                    placeholder="e.g. www.linkedin.com/in/allison-smith"
                    value={linkedin}
                    onChange={(e) => setLinkedin(e.target.value)}
                    className="border px-2 py-1 rounded  w-full bg-violet-100 -z-0"
                    />
                </div>

                {/* <div className="flex flex-row items-center justify-between gap-2 flex-wrap w-[65%] mb-2">
                    <div className="text-white font-mono"> Programming Languages</div>
                    <input
                    type="text"
                    placeholder="Languages (comma separated)"
                    value={languages}
                    onChange={(e) => setLanguages(e.target.value)}
                    className="border p-2 rounded  w-[70%] bg-violet-100 -z-0"
                    />
                </div> */}


                <div className="flex flex-col items-start justify-between flex-wrap gap-1 w-[65%] mb-5 text-sm md:text-lg">
                    <label className="text-white font-mono">Languages</label>
                    <div className="flex flex-col gap-2 w-full">
                        {/* .map() loops through all items and creates a small tag (label) for each language with option to delete it */}
                        <div className="flex flex-row flex-wrap gap-2 p-2 rounded">
                            {languages.map((lang, i) => (
                            <span key={i} className="bg-violet-200 text-violet-900 font-mono px-3 py-1 rounded-full flex flex-row flex-wrap items-center gap-2">
                                {lang}
                                <button onClick={() => removeLanguage(i)} className="text-red-600 font-bold hover:cursor-pointer -z-0">×</button>
                            </span>
                            ))}
                        </div>
 
                        {/* input box for user to enter a language, onKeyDown is when user hits Enter*/}
                        <input
                            type="text"
                            value={langInput}
                            onChange={(e) => setLangInput(e.target.value)}
                            onKeyDown={handleEnterLanguages}
                            placeholder="Type and press Enter (e.g. Java)"
                            className="border px-2 py-1 rounded bg-violet-100 -z-0 w-full mb-2"
                        />
                    </div>
                </div>

                <div className="flex flex-col items-start justify-between flex-wrap gap-1 w-[65%] mb-5 text-sm md:text-lg">
                    <label className="text-white font-mono">Frameworks</label>
                    <div className="flex flex-col gap-2 w-full">
                        {/* .map() loops through all items and creates a small tag (label) for each language with option to delete it */}
                        <div className="flex flex-row flex-wrap gap-2 p-2 rounded">
                            {frameworks.map((lang, i) => (
                            <span key={i} className="bg-violet-200 text-violet-900 font-mono px-3 py-1 rounded-full flex flex-row flex-wrap items-center gap-2">
                                {lang}
                                <button onClick={() => removeFramework(i)} className="text-red-600 font-bold hover:cursor-pointer -z-0">×</button>
                            </span>
                            ))}
                        </div>
 
                        {/* input box for user to enter a language, onKeyDown is when user hits Enter*/}
                        <input
                            type="text"
                            value={frameInput}
                            onChange={(e) => setFrameInput(e.target.value)}
                            onKeyDown={handleEnterFrameworks}
                            placeholder="Type and press Enter (e.g. React)"
                            className="border px-2 py-1 rounded bg-violet-100 -z-0 w-full mb-2"
                        />
                    </div>
                </div>


                <button onClick={handleSubmit} className="text-xs md:text-lg mt-6 -z-0 bg-gradient-to-r from-purple-900 via-purple to-fuchsia-900 text-white text-xl font-mono font-semibold px-20 py-3 rounded-lg shadow-lg hover:bg-stone-800 hover:bg-none hover:scale-105 transition-transform cursor-pointer border-2 border-violet-200">
                    Submit & Preview
                </button>

            </div>
        </div>
    );
}