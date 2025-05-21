import React, {JSX, useEffect, useRef, useState} from 'react';
import "./MeMoving.css";

interface MeMovingProps {
    count?: number;
    text?: string;
    inverse?: boolean;
}

function MeMoving({ count = 10, text = "ME", inverse = false }: MeMovingProps) {
    // Use state with items
    const [items, setItems] = useState<Array<JSX.Element>>( []);

    // Générer les éléments de liste
    const inititems = Array.from({ length: count }, (_, index) => (
        <li key={index} className="relative">
            <p className="font-jersey25 text-2xl text-[#1a1b26]">
                {text}
            </p>
        </li>
    ));

    useEffect(() => {
        setItems(inititems);
    }, []);

    const getAnimationClass = () => {
        if (inverse) {
            return 'animate-infinite-scroll-inverse';
        } else {
            return 'animate-infinite-scroll';
        }
    };


    return (
        <div
            className="w-[300%] inline-flex flex-nowrap overflow-hidden h-9 bg-[#CE8147] ml-[-500px]"
        >
            {/* Une seule liste est définie ici - le clone sera ajouté dynamiquement */}
            <ul
                className={`flex items-center [&_li]:mx-2  ${getAnimationClass()}`}
            >
                {items}
            </ul>
        </div>
    );
}

export default MeMoving;
