
import { Fade } from "react-awesome-reveal";

export const articles = [
    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        subtitle:'COMPANY',
        dot: '•',
        subtitleTwo:'PERSON NAME',
    },
    {
        id: 2,
        title: 'Veniam, unde. Impedit qui laborum dolores perspiciatis enim nesciunt ullam deleniti error modi quo?',
        subtitle:'COMPANY',
        dot: '•',
        subtitleTwo:'PERSON NAME',
    },
    {
        id: 3,
        title: 'Sit sed deleniti soluta dolores ad ipsa dolorem, totam vero vitae amet.',
        subtitle:'COMPANY',
        dot: '•',
        subtitleTwo:'PERSON NAME',
    },
    {
        id: 4,
        title:'Iusto id nihil a, velit, voluptas aut quod hic labore!',
        subtitle:'COMPANY',
        dot: '•',
        subtitleTwo:'PERSON NAME',
    },
    {
        id: 5,
        title:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        subtitle:'COMPANY',
        dot: '•',
        subtitleTwo:'PERSON NAME',
    },
    {
        id: 6,
        title:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        subtitle:'COMPANY',
        dot: '•',
        subtitleTwo:'PERSON NAME',
    },
    {
        id: 7,
        title:'Veniam, unde. Impedit qui laborum dolores perspiciatis enim nesciunt ullam deleniti error modi quo?',
        subtitle:'COMPANY',
        dot: '•',
        subtitleTwo:'PERSON NAME',
    },
    {
        id: 8,
        title:'Sit sed deleniti soluta dolores ad ipsa dolorem, accusamus totam vero vitae amet.',
        subtitle:'COMPANY',
        dot: '•',
        subtitleTwo:'PERSON NAME',
    },
    
]

const Recommendations = () => {

    return (
        <div className="w-screen md:w-[calc(100vw-6rem)] h-auto flex-col overflow-hidden pl-[1rem] md:pl-0 bg-white">
        
        <div className="w-screen md:w-1/2 flex items-center md:items-start justify-center flex-col pl-[4rem] md:pl-[5.3rem] mb-[5rem] mt-8">
            <Fade cascade>
            <h1 className="font-extrabold text-[3.2rem] md:text-[3.5rem] mb-4">Recommendations</h1>
            <p className="w-3/4 mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button className="border-2 border-blue-600 py-2 px-4 font-extralight hover:bg-blue-600 hover:text-white hover:text-normal hover:animate-pulse transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110">Read More &rarr;</button>
            </Fade>
        </div>

        <div className="w-screen md:w-[calc(100vw-6rem)] flex items-center justify-center">
            <h1 className="animate-bounce pl-[4rem] md:pl-9 text-[1.2rem]">&larr; Scroll &rarr;</h1>
        </div>

        {/*IPAD VIEW SCROLLER*/}
        <div className="flex items-center justify-center flex-col w-auto h-[40vh] mx-5 mb-8">
        <div id='slider' className='flex w-full h-full overflow-x-scroll scrollbar-hide scroll whitespace-nowrap scroll-smooth p-4'>
            {articles.map((item) => (             
              <div className='w-[400px] ml-[4.5rem] md:ml-0 md:w-[35rem] h-full flex items-center justify-center border-2 border-y-blue-600 border-x-black mr-8 bg-white' key={item.id}> 
                <div className='w-screen h-auto flex flex-col overflow-hidden px-8 whitespace-normal break-all'>

                  <div className='w-full md:w-[30rem] h-auto mb-4'>
                    <h2 className='font-serif text-[1.4rem]'>"{item.title}"</h2>
                  </div>

                  <div className='flex items-start justify-start w-full md:w-1/2'>
                    <h5 className='text-[1.1rem]'>{item.subtitleTwo}</h5>
                    <h5 className='text-[1rem] mx-1'>{item.dot}</h5>
                    <h5 className='text-[1.1rem] font-bold'>{item.subtitle}</h5>
                  </div>
                </div>
              </div>                                   
            ))} 
        </div>           
        </div>

        </div>
    )
}

export default Recommendations
