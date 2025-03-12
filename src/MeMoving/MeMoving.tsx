import React, { useEffect, useRef } from 'react';
import "./MeMoving.css";

interface MeMovingProps {
    count?: number;
    text?: string;
    speed?: string;
}

function MeMoving({ count = 10, text = "ME", speed = "slow" }: MeMovingProps) {
    // Référence au conteneur principal
    const containerRef = useRef<HTMLDivElement>(null);
    // Référence à la liste originale
    const listRef = useRef<HTMLUListElement>(null);

    // Générer les éléments de liste
    const items = Array.from({ length: count }, (_, index) => (
        <li key={index} className="relative">
            <p className="font-jersey25 text-2xl">
                {text}
            </p>
        </li>
    ));

    const getAnimationClass = () => {
        return `animate-infinite-scroll-${speed}`;
    };

    // Effet pour cloner la liste dynamiquement
    useEffect(() => {
        if (containerRef.current && listRef.current) {
            // Clone la liste originale
            const clonedList = listRef.current.cloneNode(true) as HTMLUListElement;
            // Ajoute l'attribut aria-hidden au clone
            clonedList.setAttribute('aria-hidden', 'true');
            // Insère le clone après la liste originale
            containerRef.current.appendChild(clonedList);
        }
    }, []);

    return (
        <div
            ref={containerRef}
            className="w-full inline-flex flex-nowrap overflow-hidden h-9 bg-[#CE8147]"
        >
            {/* Une seule liste est définie ici - le clone sera ajouté dynamiquement */}
            <ul
                ref={listRef}
                className={`flex items-center justify-center md:justify-start [&_li]:mx-2 ${getAnimationClass()}`}
            >
                {items}
            </ul>
        </div>
    );
}

export default MeMoving;
