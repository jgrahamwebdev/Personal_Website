
import { Fade } from "react-awesome-reveal";

export const projectsL = [
    {
        id: 1,
        image: '/img/mock.jpg',
        title: 'Tech Stop',
        description: 'A tech blog that allows users to register/login, create posts with image upload feature, and edit or delete their posts.',
        one: 'MERN',
        two: 'Tailwind CSS',
    },
    {
        id: 2,
        image: '/img/mock.jpg',
        title: 'Application Tracker',
        description: 'A project that was built with a group of 5 that allows users to keep log of when and where they applied for jobs with the ability to update status of application.',
        one: 'MERN',
        two: 'Tailwind CSS',
    },
]

export const projectsR = [
    {
        id: 1,
        image: '/img/mock.jpg',
        title: 'Mellow',
        description: 'A mock Zillow site, where users can browse home listings, find real estate agents, and can create user profile as regular user or real estate agent, and list a home or property for sell and save favorite properties to watch',
        one: 'React',
        two: 'Django',
        three: 'Tailwind CSS',
    },
    {
        id: 2,
        image: '/img/mock.jpg',
        title: 'Some Cool App',
        description: 'Have not made this one yet',
        one: 'Python',
        two: 'Django',
        three: 'Bootstrap',
    },
]

const Portfolio = () => {
    return (
        <div className="w-screen md:w-full h-auto flex flex-col md:flex-row border-b-2 border-black"> 

            <div className="w-full md:w-1/2 h-full flex items-center justify-center flex-col">
                <div className="flex items-center md:items-start justify-center flex-col md:pl-[5.22rem] pt-8 mb-8 bg-white">
                    <Fade cascade>
                    <h1 className="font-extrabold text-[3.5rem] mb-4">Portfolio</h1>
                    <p className="w-3/4 mb-8 ml-[4rem] md:ml-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt modi perferendis doloribus fugit quam totam veniam quis hic provident officia.</p>
                    <button className="border-2 border-blue-600 py-2 px-4 font-extralight hover:bg-blue-600 hover:text-white hover:text-normal hover:animate-pulse transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110">See More &rarr;</button>
                    </Fade>
                </div>

            <div className='w-screen md:w-full flex items-center justify-center flex-col'>
            {projectsL.map((item) => (             
              <div className='border-2 border-t-blue-600 border-l-blue-600 border-r-black border-b-black w-3/4 mb-12 p-4 bg-white md:ml-0' key={item.id}> 
                <div className='overflow-hidden'>

                  <img className="w-full h-auto mb-4 transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 cursor-pointer" src={item.image} alt="" />

                  <div className='w-[85%] h-auto mb-4 border-t-2 border-black pt-4'>
                    <h2 className='font-bold text-[1.8rem]'>{item.title}</h2>
                    <p className="w-full md:w-[85%]">{item.description}</p>
                  </div>

                  <div className='flex items-center justify-around w-full md:w-3/4'>
                    <div className="border-2 border-blue-600 bg-white text-black hover:bg-blue-600 hover:text-white cursor-pointer">
                      <h5 className='text-[1.1rem] px-4 py-1'>{item.one}</h5>
                    </div>

                    <div className="border-2 border-blue-600 bg-white text-black hover:bg-blue-600 hover:text-white cursor-pointer">
                      <h5 className='text-[1.1rem] px-4 py-1'>{item.two}</h5>
                    </div>   
                  </div>
                </div>
              </div>                                   
            ))} 
            </div>   

             <div className='md:hidden w-screen flex items-center justify-center flex-col'>
            {projectsR.map((item) => (             
              <div className='border-2 border-t-blue-600 border-l-blue-600 border-r-black border-b-black w-3/4 mb-12 p-4 bg-white' key={item.id}> 
                <div className='overflow-hidden'>

                  <img className="w-full h-auto mb-4 transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 cursor-pointer" src={item.image} alt="" />

                  <div className='w-[85%] h-auto mb-4 border-t-2 border-black pt-4'>
                    <h2 className='font-bold text-[1.8rem]'>{item.title}</h2>
                    <p className="w-full md:w-[85%]">{item.description}</p>
                  </div>

                  <div className='flex items-center justify-around w-full md:w-3/4'>
                    <div className="border-2 border-blue-600 bg-white text-black hover:bg-blue-600 hover:text-white cursor-pointer">
                      <h5 className='text-[1.1rem] px-4 py-1'>{item.one}</h5>
                    </div>

                    <div className="border-2 border-blue-600 bg-white text-black hover:bg-blue-600 hover:text-white cursor-pointer">
                      <h5 className='text-[1.1rem] px-4 py-1'>{item.two}</h5>
                    </div>   
                  </div>
                </div>
              </div>                                   
            ))} 
            </div>        

               
            </div>

            <div className="w-full md:w-1/2 h-full md:pt-[8rem] pl-[4rem] md:pl-0">
            <div className='hidden md:flex items-center justify-center flex-col'>
            {projectsR.map((item) => (             
              <div className='border-2 border-b-blue-600 border-r-blue-600 border-l-black border-t-black w-3/4 mb-12 p-4 bg-white' key={item.id}> 
                <div className='overflow-hidden'>

                    <img className="w-full h-auto mb-4 transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 cursor-pointer" src={item.image} alt="" />

                  <div className='w-[30rem] h-auto mb-4 border-t-2 border-black pt-4'>
                    <h2 className='font-bold text-[1.8rem]'>{item.title}</h2>
                    <p className="w-3/4 md:w-[85%]">{item.description}</p>
                  </div>

                  <div className='flex items-center justify-around w-full md:w-3/4'>
                    <div className="border-2 border-blue-600 bg-white text-black hover:bg-blue-600 hover:text-white cursor-pointer">
                        <h5 className='text-[1.1rem] px-4 py-1'>{item.one}</h5>
                    </div>
                    <div className="border-2 border-blue-600 bg-white text-black hover:bg-blue-600 hover:text-white cursor-pointer">
                        <h5 className='text-[1.1rem] px-4 py-1'>{item.two}</h5>
                    </div> 
                    <div className="border-2 border-blue-600 bg-white text-black hover:bg-blue-600 hover:text-white cursor-pointer">
                        <h5 className='text-[1.1rem] px-4 py-1'>{item.three}</h5>
                    </div>   
                  </div>
                </div>
              </div>                                   
            ))} 
            </div>  
            </div>
        </div>
    )
}

export default Portfolio
