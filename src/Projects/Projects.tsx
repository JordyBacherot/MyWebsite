import React, {useRef, useState, useEffect, JSX} from 'react';
import "./Projects.css";

function Projects() {
    const rectangleRef = useRef<HTMLDivElement>(null);
    const [balls, setBalls] = useState<JSX.Element[]>([]);


    // État pour stocker les coordonnées
    const [coordinates, setCoordinates] = useState({
        width: 0,
        height: 0,
    });

    // Fonction pour obtenir les coordonnées et les dimensions
    function getCoordinates() {
        if (rectangleRef.current) {
            const rect = rectangleRef.current.getBoundingClientRect();
            setCoordinates({
                width: rect.width,
                height: rect.height,
            });
        }
    };

    function MovetabBalls(decalage : number) {
        const tabBalls = [];
        // Calcul de la taille des balles, pour avoir un nombre de balles qui ne se superposent sur la dernière balle
        const tabBallsSize = ((coordinates.width + coordinates.height)*2/1.2)/16
        let resetdecalage = -1
        if (decalage >= tabBallsSize/1.2){
            resetdecalage = decalage - tabBallsSize/1.2
            decalage -= tabBallsSize/1.2
        }
        let start_height = decalage
        let start_width = 0
        while (start_height < coordinates.height){
            tabBalls.push(
                <div
                    className="bg-[#CE8147] rounded-full absolute"
                    style={{
                        width: `${tabBallsSize}px`,
                        height: `${tabBallsSize}px`,
                        top: `${start_height - tabBallsSize/2}px`,
                        left: `${start_width -tabBallsSize/2}px`,
                    }}
                ></div>
            )
            start_height += tabBallsSize/1.2;
        }
        start_width += start_height - coordinates.height
        start_height = coordinates.height
        while (start_width < coordinates.width){
            tabBalls.push(
                <div
                    className="bg-[#CE8147] rounded-full absolute"
                    style={{
                        width: `${tabBallsSize}px`,
                        height: `${tabBallsSize}px`,
                        top: `${start_height - tabBallsSize/2}px`,
                        left: `${start_width -tabBallsSize/2}px`,
                    }}
                ></div>
            )
            start_width += tabBallsSize/1.2;
        }
        start_height -= start_width - coordinates.width
        start_width = coordinates.width
        while (start_height > 0){
            tabBalls.push(
                <div
                    className="bg-[#CE8147] rounded-full absolute"
                    style={{
                        width: `${tabBallsSize}px`,
                        height: `${tabBallsSize}px`,
                        top: `${start_height - tabBallsSize/2}px`,
                        left: `${start_width -tabBallsSize/2}px`,
                    }}
                ></div>
            )
            start_height -= tabBallsSize/1.2;
        }
        start_width += start_height
        start_height = 0
        while (start_width > 0){
            tabBalls.push(
                <div
                    className="bg-[#CE8147] rounded-full absolute"
                    style={{
                        width: `${tabBallsSize}px`,
                        height: `${tabBallsSize}px`,
                        top: `${start_height - tabBallsSize/2}px`,
                        left: `${start_width -tabBallsSize/2}px`,
                    }}
                ></div>
            )
            start_width -= tabBallsSize/1.2;
        }
        return [tabBalls,resetdecalage]
    }

    // Effet pour mettre à jour les coordonnées et générer les balles
    useEffect(() => {
        // Observer les changements de taille
        const resizeObserver = new ResizeObserver(() => {
            getCoordinates();
        });

        if (rectangleRef.current) {
            resizeObserver.observe(rectangleRef.current);
        }

        // Nettoyer l'observer au démontage
        return () => {
            if (rectangleRef.current) {
                resizeObserver.unobserve(rectangleRef.current);
            }
        };
    }, []);

    // Effet pour mettre à jour les balles lorsque les coordonnées changent
    useEffect(() => {
        const [generatedBalls, resetdecalage] = MovetabBalls(0);
        // @ts-ignore
        setBalls(generatedBalls);

        // Intervalle pour rafraîchir les balles régulièrement si nécessaire
        var i = 0
        const interval = setInterval(() => {
            const [generatedBalls, resetdecalage] = MovetabBalls(i);
            // @ts-ignore
            setBalls(generatedBalls);
            // @ts-ignore
            if (resetdecalage >= 0){
                // @ts-ignore
                i = resetdecalage
            }
            i += 0.25;
        }, 4);

        return () => clearInterval(interval);
    }, [coordinates]);

    // Utilisation de useEffect pour obtenir les coordonnées une fois le composant monté
    useEffect(() => {
        getCoordinates(); // Appeler la fonction au montage du composant
    }, []); // L'array vide assure que la fonction ne se lance qu'une seule fois

    return (
        <div className="relative w-full bg-[#F0F0F0] rounded-2xl h-50
        xl:h-75
        lg:h-65
        sm:h-80">
            <div className="relative w-full h-full">
                {balls}
                <div
                    ref={rectangleRef} // Référence à cette div
                    className="bg-[#CE8147] p-10 h-full"
                >
                    <div className="relative w-full h-full flex items-center justify-center z-10">
                        <h2 className="md:text-6xl font-bold color-text font-rakkas text-5xl">Projects</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
