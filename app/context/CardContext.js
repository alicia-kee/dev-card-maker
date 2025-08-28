"use client";
import { createContext, useState, useContext } from "react";

const CardContext = createContext(); /**empty storage for data */

// Any part of your app that’s wrapped in <CardProvider> ... </CardProvider> can access the data inside
export function CardProvider({children}) {
    //create state for card info (start with empty info), cardData is current stored info, setCardData is the function to update info:
    const [cardData, setCardData] = useState({
        fullName: "",
        title: "",
        education: "",
        email: "",
        github: "",
        linkedin: "",
        languages: [],
        frameworks: [],
    });

    return(
        //make state cardData and function setCardData accessible to all {children}
        <CardContext.Provider value={{cardData, setCardData}}>
            {children}
        </CardContext.Provider>
    );
}

//shortcut "useCard"
export function useCard() {
  return useContext(CardContext);
}