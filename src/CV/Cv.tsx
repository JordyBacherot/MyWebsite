import './Cv.css'
import MeMoving from "../MeMoving/MeMoving.tsx";

function Cv() {
    return (
        <div className="relative w-full h-70 rounded-2xl cv-color-bg overflow-hidden
        xl:h-100
        lg:h-85
        md:h-80 ">
            {/* Container avec rotation */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] -rotate-25 z-0">
                {/* Bandes de MeMoving avec espacement */}
                <div className="w-full h-full flex flex-col justify-center gap-8">
                    <div className="h-16 w-full">
                        <MeMoving count={40} text="ME" inverse={true}/>
                    </div>
                    <div className="h-16 w-full">
                        <MeMoving count={40} text="ME" inverse={false}/>
                    </div>
                    <div className="h-16 w-full">
                        <MeMoving count={40} text="ME" inverse={true}/>
                    </div>
                    <div className="h-16 w-full">
                        <MeMoving count={40} text="ME" inverse={false}/>
                    </div>
                    <div className="h-16 w-full">
                        <MeMoving count={40} text="ME" inverse={true}/>
                    </div>
                    <div className="h-16 w-full">
                        <MeMoving count={40} text="ME" inverse={false}/>
                    </div>
                    <div className="h-16 w-full">
                        <MeMoving count={40} text="ME" inverse={true}/>
                    </div>
                </div>
            </div>

            {/* CV text overlay */}
            <div className="relative w-full h-full flex items-center justify-center z-10">
                <h2 className="md:text-6xl font-bold color-text font-rakkas text-5xl">CV</h2>
            </div>
        </div>
    );
}

export default Cv