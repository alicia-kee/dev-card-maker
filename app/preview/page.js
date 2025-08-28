"use client";
import { useCard } from "../context/CardContext";


export default function Preview(){
    const {cardData} = useCard(); //get user info from builder page from CardContext

    return(
        <div className="flex flex-col items-center justify-center min-h-screen p-6 inset-0 bg-slate-950 w-full relative overflow-hidden">
            {/* Background grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:14px_24px]"></div>

            {/* Business Card */}
            <div className="bg-white flex flex-col items-center justify-center p-4 w-[60%] text-sm md:text-lg gap-3 border -z-0 font-serif">
                <div className="text-black font-bold">{cardData.fullName}</div>
                <div className="text-black font-bold">{cardData.title}</div>
                <div className="text-black font-bold">{cardData.education}</div>
                <hr className="border-t-2 border-black my-4 w-[80%]"/>

                <div>Contacts:</div>
                <div className="text-black font-bold">{cardData.email}</div>
                <div className="text-black font-bold">{cardData.github}</div>
                <div className="text-black font-bold">{cardData.linkedin}</div>

                <div>Skills:</div>
                <div className="mb-4">
                    <h2 className="font-semibold">Languages:</h2>
                    <p>{cardData.languages.join(", ")}</p>
                </div>
                <div className="mb-4">
                    <h2 className="font-semibold">Frameworks:</h2>
                    <p>{cardData.frameworks.join(", ")}</p>
                </div>


            </div>
        </div>
    );
}