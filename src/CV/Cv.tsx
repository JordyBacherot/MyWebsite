import './Cv.css'
import MeMoving from "../MeMoving/MeMoving.tsx";

function Cv() {
    return (
        <div className="relative w-full h-100 rounded-2xl cv-color-bg overflow-hidden">
            {/* Container avec rotation */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] -rotate-25 z-0">
                {/* Bandes de MeMoving avec espacement */}
                <div className="w-full h-full flex flex-col justify-center gap-8">
                    <div className="h-16 w-full">
                        <MeMoving count={20} text="ME" speed="normal"/>
                    </div>
                    <div className="h-16 w-full">
                        <MeMoving count={20} text="ME" speed="slow"/>
                    </div>
                    <div className="h-16 w-full">
                        <MeMoving count={20} text="ME" speed="normal"/>
                    </div>
                    <div className="h-16 w-full">
                        <MeMoving count={20} text="ME" speed="slow"/>
                    </div>
                    <div className="h-16 w-full">
                        <MeMoving count={20} text="ME" speed="normal"/>
                    </div>
                    <div className="h-16 w-full">
                        <MeMoving count={20} text="ME" speed="slow"/>
                    </div>
                    <div className="h-16 w-full">
                        <MeMoving count={20} text="ME" speed="slow"/>
                    </div>
                </div>
            </div>

            {/* CV text overlay */}
            <div className="relative w-full h-full flex items-center justify-center z-10">
                <h2 className="text-5xl font-bold color-text">CV</h2>
            </div>
        </div>
    );
}

export default Cv