import './Hobbies.css';
import { useState } from 'react';
import screwImg from '../assets/img/screw.svg';

function Hobbies() {
    const [screwState, setScrewState] = useState([true, true, true, true]);

    const positions = [
        'top-1 left-1',    // Haut gauche
        'top-1 right-1',   // Haut droite
        'bottom-1 left-1', // Bas gauche
        'bottom-1 right-1' // Bas droite
    ];

    function animateScrew(index: number) {
        const screw = document.getElementById(`screw-${index}`);

        // Ajouter la classe d'animation pour faire tourner et disparaître la vis
        screw?.classList.add('animate-screw');

        // Attendre la fin de l'animation avant de mettre à jour l'état
        setTimeout(() => {
            // Mise à jour de l'état pour retirer la vis
            setScrewState((prevState) => {
                const updatedState = [...prevState];
                updatedState[index] = false;

                // Si toutes les vis sont retirées, déclencher l'animation du bloc
                if (updatedState.every((screw) => !screw)) {
                    const falling_bloc = document.getElementById('falling_bloc');
                    falling_bloc?.classList.add('animate-falling');
                }

                return updatedState;
            });
        }, 1500); // Correspond à la durée de l'animation de la vis
    }

    function drawScrew() {
        const tab_screw = [];
        for (let i = 0; i < 4; i++) {
            if (screwState[i]) {
                tab_screw.push(
                    <img
                        id={`screw-${i}`}
                        key={i}
                        src={screwImg}
                        alt="screw"
                        className={`absolute ${positions[i]} lg:w-5 lg:h-5 w-4 h-4 z-10 screw-img`}
                        onClick={() => animateScrew(i)}
                    />
                );
            }
        }
        return tab_screw;
    }

    return (
        <div className="relative w-full lg:h-30 h-15 md:h-20 rounded-2xl bg-[#CE8147] overflow-hidden">
            <div id="falling_bloc" className="absolute top-0 left-0 w-full rounded-2xl h-full cv-color-bg">
                <div className="relative w-full h-full flex items-center justify-center z-10">
                    <h2 className="lg:text-5xl font-bold color-text font-rakkas text-4xl">Hobbies</h2>
                </div>
                {drawScrew()}
            </div>
        </div>
    );
}

export default Hobbies;
