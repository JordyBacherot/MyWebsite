import Cv from './CV/Cv'
import Background from "./Background/Background.tsx";

function App() {
    return (
    <>
        <Background>
            <header className="py-8 max-w-7xl mx-auto">
                <h1 className="text-5xl font-bold color-text text-left font-rakkas">
                    Jordy Bacherot's WebSite
                </h1>
            </header>
            <div className="max-w-[1310px] mx-auto">
                <div className="grid grid-cols-20 ">
                    <div className="col-span-5 mr-10 mt-5">
                        <Cv />
                    </div>
                    <div className="col-span-15 ml-15 mt-5 bg-amber-800">

                    </div>

                </div>
            </div>
        </Background>
    </>
  )
}

export default App
