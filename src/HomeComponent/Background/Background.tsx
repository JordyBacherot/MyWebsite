import './Background.css'


function Background({children} : {children : any}) {
    return (
        <>
            <div className="min-h-screen w-full bg-[#1a1b26] background-pattern p-8">
                {children}
            </div>
        </>
    )
}

export default Background