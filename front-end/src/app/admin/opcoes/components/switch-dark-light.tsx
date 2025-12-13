'use client';
import { useEffect, useState } from "react";
import "./switch-dark-light.css"
import { useTheme } from 'next-themes';


export default function ModeSwitchDarkLight() {
    const { theme, setTheme } = useTheme();
    const [darked, setDarked] = useState(false);

    useEffect(() => setDarked(true), []);
    if (!darked) return null;

    const isDarked = theme === 'dark';

    return (
        <div>
            {/* From Uiverse.io by CacaceRoberto */}
            <label className="switch cursor-pointer">
                <input 
                    type="checkbox" 
                    id="toggle" 
                    checked={isDarked}
                    onChange={() => setTheme(isDarked ? 'light' : 'dark')}

                />
                <span className="slider">
                    <div className="moons-hole">
                        <div className="moon-hole"></div>
                        <div className="moon-hole"></div>
                        <div className="moon-hole"></div>
                    </div>
                    <div className="black-clouds">
                        <div className="black-cloud"></div>
                        <div className="black-cloud"></div>
                        <div className="black-cloud"></div>
                    </div>
                    <div className="clouds">
                        <div className="cloud"></div>
                        <div className="cloud"></div>
                        <div className="cloud"></div>
                        <div className="cloud"></div>
                        <div className="cloud"></div>
                        <div className="cloud"></div>
                        <div className="cloud"></div>
                    </div>
                    <div className="stars">
                        <svg className="star" viewBox="0 0 20 20">
                            <path
                                d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"
                            ></path>
                        </svg>
                        <svg className="star" viewBox="0 0 20 20">
                            <path
                                d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"
                            ></path>
                        </svg>
                        <svg className="star" viewBox="0 0 20 20">
                            <path
                                d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"
                            ></path>
                        </svg>
                        <svg className="star" viewBox="0 0 20 20">
                            <path
                                d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"
                            ></path>
                        </svg>
                        <svg className="star" viewBox="0 0 20 20">
                            <path
                                d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"
                            ></path>
                        </svg>
                    </div>
                </span>
            </label>

        </div>
    );
}