"use client";
import { useCard } from "../context/CardContext";


export default function Preview(){
    const {cardData} = useCard(); //get user info from builder page from CardContext

    return(
        <div className="flex flex-col items-center justify-center min-h-screen p-6 inset-0 bg-slate-950 w-full relative overflow-hidden">
            {/* Background grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:14px_24px]"></div>

            {/* Business Card */}
            <div className="bg-white flex flex-col items-start justify-center p-4 w-[60%] text-sm md:text-lg gap-1 border -z-0 font-serif">
                <div className="text-black font-bold text-lg md:text-4xl mb-2 mt-3">{cardData.fullName}</div>
                <div className="text-black font-bold">{cardData.title}</div>
                <div className="text-black font-bold">{cardData.education}</div>
                <hr className="border-t-2 border-black my-4 w-[80%]"/>

                <div className="text-black">Email: {cardData.email}</div>
                <div className="text-black">Github: {cardData.github}</div>
                <div className="text-black mb-2">LinkedIn: {cardData.linkedin}</div>

                <div className="mb-2">
                    <p>Languages: {cardData.languages.join(", ")}</p>
                </div>
                <div className="mb-3">
                    <p>Frameworks: {cardData.frameworks.join(", ")}</p>
                </div>


            </div>
        </div>
    );
}