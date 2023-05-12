
export const projects = [
    {
        id: 1,
        image: '',
        title: 'Tech Stop',
        description: 'A tech blog that allows users to register/login, create posts with image upload feature, and edit or delete their posts.',
        one: 'MERN',
        two: 'Tailwind CSS',
    },
    {
        id: 2,
        image: '',
        title: 'Application Tracker',
        description: 'A project that was built with a group of 5 that allows users to keep log of when and where they applied for jobs with the ability to update status of application.',
        one: 'MERN',
        two: 'Tailwind CSS',
    },
]


const Portfolio = () => {
    return (
        <div className="w-full h-screen flex border-b-2 border-black">

            <div className="w-1/2 h-full">
                <div className="flex items-start justify-center flex-col pl-[8rem] pt-8">
                    <h1 className="font-extrabold text-[3.5rem] mb-4">Portfolio</h1>
                    <p className="w-3/4 mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt modi perferendis doloribus fugit quam totam veniam quis hic provident officia.</p>
                    <button className="border-2 border-blue-600 py-2 px-4 font-extralight hover:bg-blue-600 hover:text-white hover:text-normal hover:animate-pulse transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110">See More &rarr;</button>
               </div>

               
            </div>

            <div className="w-1/2 h-full">
                RIGHT
            </div>
        </div>
    )
}

export default Portfolio
