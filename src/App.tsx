import Cv from './CV/Cv'
import Background from "./Background/Background.tsx";
import Projects from "./Projects/Projects.tsx";
import Hobbies from "./Hobbies/Hobbies.tsx";
import Llm from "./Llm/Llm.tsx";
import Eye from "./Eye/Eye.tsx";

function App() {
    return (
    //     Todo : redesign LLM for mobile/tablet
    <>
        <Background>
            <header className="py-5 xl:max-w-7xl mx-auto lg:max-w-[900px]">
                <h1 className="sm:text-5xl font-bold color-text font-rakkas text-center lg:text-left text-4xl">
                    Jordy Bacherot's WebSite
                </h1>
            </header>
            <div className="xl:max-w-[1310px] lg:max-w-[900px] mx-auto">
                <div className="grid grid-cols-20">
                    <div className="col-start-2 col-end-20
                    xl:col-span-6
                    lg:mr-10 mt-5 lg:col-span-7
                    md:mr-10 md:col-span-8">
                        <Cv />
                    </div>
                    <div className="col-start-2 col-end-20 mt-15
                    sm:mt-10
                    xl:col-start-8 xl:col-end-20 xl:p-5 xl:mt-12
                    lg:col-start-8 lg:col-end-20 lg:p-0 lg:ml-18 lg:mt-15
                    md:col-start-9 md:col-end-20 md:p-0 md:ml-18 md:mt-12
                    sm:p-15 sm:col-start-2 sm:col-end-20">
                        <Projects />
                    </div>
                    <div className="col-start-1 col-end-21 mt-15
                    sm:col-start-4 sm:col-end-18 sm:mt-10
                    lg:col-start-1 lg:col-end-12 lg:mt-15
                    md:col-start-1 md:col-end-12 md:mt-15">
                        <Llm />
                    </div>
                    <div className="col-start-1 col-end-21 mt-8
                    sm:col-start-4 sm:col-end-18 sm:mt-10
                    lg:col-start-14 lg:col-end-21 lg:mt-15
                    md:col-start-14 md:col-end-21 md:mt-15">
                        <Hobbies />
                    </div>
                </div>
            </div>
            <Eye />
        </Background>
    </>
  )
}

export default App
