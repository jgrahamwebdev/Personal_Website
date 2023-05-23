
const Contact = () => {
    return (
        <div className="bg-blue-600 md:w-[calc(100vw-6rem)] h-[25rem] flex items-center justify-center flex-col ml-[6rem] md:ml-0 md:pl-8 border-t-2 border-black">
            <h1 className="font-extrabold text-[2.4rem] md:text-[3rem] mb-4 text-white text-center">Let's chat & <br /> make something awesome!</h1>
            <p className="w-3/4 md:w-[30%] text-white text-center md:text-left mb-8">Feel free to send me a message with any questions or ideas you may have and I will get back to you ASAP</p>

            <button className="border-2 border-black bg-white py-2 px-4 font-extralight hover:text-white hover:border-white hover:bg-blue-600 text-black hover:text-normal after:content-['🚀'] hover:after:content-['😄'] transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110">Message Me </button>
        </div>
    )
}

export default Contact

