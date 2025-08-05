"use client"

import React, { useState } from "react";
import { MoonIcon, SunIcon } from "./icons";

const ThemeToggle = () => {

    const [mode, setMode] = useState(false);
    // items-end justify-end
    return (
        <div className='
                container
                flex
                rounded-full 
                justify-center
                z-20 
                -mt-1.5
                '
        >
            <button
                className={`p-2 rounded-full  ${mode ? 'bg-[#121212] text-white' : 'bg-white text-black'}`}
                onClick={() => setMode(!mode)} >
                {
                    mode ?
                        <SunIcon />
                        :
                        <MoonIcon />
                }
            </button>
        </div>
    )
}

export default ThemeToggle;