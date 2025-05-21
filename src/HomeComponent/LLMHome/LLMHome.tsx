import "./LLMHome.css";

function LLMHome() {
    const messages = [
        "Hey, do you know AI ?",
        "Of course! I am one !",
        "What’s AI capable of ?",
        "Oh ! Many things !",
    ];

    function generateMessageList() {
        return messages.map((message, index) => (
            <div
                key={index}
                className={`text-1xl text-center flex flex-col justify-center message-animate items-center w-4/10 pl-5 pr-5 p-3  bg-[#CE8147] font-rakkas-small ${index % 2 === 1 ? 'self-start rounded-r-lg' : '  self-end rounded-l-lg'}`}
            >
                {message}
            </div>
        ));
    }

    return (
        <div className="relative w-full md:h-20 h-25 lg:h-30 rounded-2xl cv-color-bg overflow-hidden flex flex-col ">
            {generateMessageList()}
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10">
                <h2 className="lg:text-5xl font-bold color-text font-rakkas text-4xl">LLM</h2>
            </div>
        </div>
    );
}

export default LLMHome;
