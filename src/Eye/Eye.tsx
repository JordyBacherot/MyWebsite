import { useState, useEffect } from "react";

function Eye() {
    const [pupilPosition, setPupilPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: { clientX: number; clientY: number; }) => {
            const eyeX = window.innerWidth - 80;
            const eyeY = 80;
            const dx = event.clientX - eyeX;
            const dy = event.clientY - eyeY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const maxDistance = 40;
            const ratio = Math.min(maxDistance / distance, 1);
            setPupilPosition({ x: dx * ratio, y: dy * ratio });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div>
            <div className="fixed top-0 right-0 w-19 h-19 lg:w-36 lg:h-36  bg-[#DCDCE5] rounded-bl-full flex items-center justify-center lg:pl-18 lg:pb-18 pl-12 pb-12">
                <div
                    className="lg:w-12 lg:h-12 w-7 h-7 bg-black rounded-full"
                    style={{ transform: `translate(${pupilPosition.x}px, ${pupilPosition.y}px)` }}
                ></div>
            </div>
        </div>
    );
}

export default Eye;
