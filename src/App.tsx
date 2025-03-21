import Cv from './CV/Cv'
import Background from "./Background/Background.tsx";
import Projects from "./Projects/Projects.tsx";
import Hobbies from "./Hobbies/Hobbies.tsx";

function App() {
    return (
    //     Todo : redesign mobile responsive
    <>
        <Background>
            <header className="py-5 xl:max-w-7xl mx-auto lg:max-w-[900px]">
                <h1 className="md:text-5xl font-bold color-text font-rakkas text-center lg:text-left text-4xl">
                    Jordy Bacherot's WebSite
                </h1>
            </header>
            <div className="xl:max-w-[1310px] lg:max-w-[900px] mx-auto">
                <div className="grid grid-cols-20">
                    <div className="col-start-4 col-end-18
                    xl:col-span-6
                    lg:mr-10 mt-5 lg:col-span-7">
                        <Cv />
                    </div>
                    <div className="col-start-3 col-end-19 mt-13
                    md:mt-10
                    xl:col-start-8 xl:col-end-20 xl:p-5 xl:mt-12
                    lg:col-start-8 lg:col-end-20 lg:p-0 lg:ml-18 lg:mt-15
                    md:p-15 md:col-start-2 md:col-end-20">
                        <Projects />
                    </div>
                    <div className="col-start-1 col-end-21 mt-15
                    md:col-start-4 md:col-end-18 md:mt-10
                    lg:col-start-1 lg:col-end-10 lg:mt-15">
                        <Hobbies />
                    </div>
                    <div className="col-start-1 col-end-21 mt-8
                    md:col-start-4 md:col-end-18 md:mt-10
                    lg:col-start-12 lg:col-end-21 lg:mt-15">
                        <Hobbies />
                    </div>
                </div>
            </div>
        </Background>
    </>
  )
}

export default App
