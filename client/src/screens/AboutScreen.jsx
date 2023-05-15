
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';
import MobileHeader from '../components/MobileHeader';

export const cards = [
    {
        id: 1,
        title: 'Sound Engineer',
        sub: 'Live sound and studio recording/mixing',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, officiis similique dolore hic, debitis officia adipisci voluptatibus, iste dolores ratione inventore sed.',
        image: '/img/music.jpg',
        timeline: '2010 - 2020',
    },
    {
        id: 2,
        title: 'Freelance Web Developer',
        sub: 'Lorem, ipsum dolor.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, officiis similique dolore hic, debitis officia adipisci voluptatibus, iste dolores ratione inventore sed.',
        image: '/img/webdev.png',
        timeline: '2021 - Present',
    },
    {
      id: 3,
      title: 'Full Stack Web Developer Certificate',
      sub: 'Student at Coding Dojo',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, officiis similique dolore hic, debitis officia adipisci voluptatibus, iste dolores ratione inventore sed.',
      image: '/img/dojo.png',
      timeline: '2022 - 2023',
    },
    {
      id: 4,
      title: 'TBD',
      sub: 'Lorem, ipsum dolor.',
      description: 'TBD',
      image: '/img/tbd.png',
      timeline: 'TBD',
  },
]

const AboutScreen = () => {
    return (
        <div className='w-screen bg-white flex items-center flex-col justify-center'>

            <div className='hidden w-screen md:flex'>
                <Sidebar />
            </div>

            <MobileHeader />
            
           <div className='w-screen h-auto flex items-center justify-center flex-col md:flex-row border-b-2 border-black mt-[7rem] md:mt-0'>
                <div className="w-screen md:w-1/2 flex items-center justify-center flex-col md:border-r-2 border-black">
                    <h1 className="font-extrabold text-[3.5rem] mb-4">Hey, I'm Jordan <br/> nice to meet you!</h1>
                    <p className="w-[85%] md:w-[65%] mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt modi perferendis doloribus fugit quam totam veniam quis hic provident officia.</p>      
                </div>
                <div className='w-1/2 h-full flex items-center justify-center py-8'>
                    <img className='w-full md:w-1/2 h-auto border-2 border-black' src="/img/3.png" alt="" />
                </div>
            </div>

            <div className='w-screen md:w-3/4 h-auto flex items-center justify-center flex-col md:flex-row md:border-x-2 border-b-2 border-black py-[3rem]'>
                
                <div className='w-3/4 md:w-1/2 h-full flex items-center justify-center py-8'>
                    <img className='w-full md:w-[90%] h-auto border-2 border-black' src="/img/plane.jpg" alt="" />
                </div>

                <div className="w-screen md:w-1/2 flex items-center justify-center flex-col md:border-l-2 md:border-black">
                    <h1 className="font-extrabold text-[3.5rem] mb-4">Fun Stuff</h1>
                    <p className="w-[85%] mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt modi perferendis doloribus fugit quam totam veniam quis hic provident officia.</p>      
                </div>
            </div>

            {/* <img className='top-[0%] left-[48.9%] z-10 w-[11rem] h-auto fixed' src="/img/hand.png" alt="" /> */}

        <div>
            <div className="flex items-start justify-center flex-col pl-[3.8rem] pt-8 mb-2">
                <h1 className="font-extrabold text-[3rem] mb-4">My Journey:</h1>
            </div>


        <VerticalTimeline lineColor={'#000'}>

        {cards.map((item) => (
        <VerticalTimelineElement
         
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#e8e8e7', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid  #e8e8e7' }}
          date={item.timeline}
          iconStyle={{ background: '#fff', color: '#fff' }}
          // position={'left'}
          icon={<div className="flex justify-center items-center w-full h-full"><img src={item.image} className='w-[100%] h-[100%] rounded-[50%] object-contain'/></div>}
        >
          <h3 className="vertical-timeline-element-title text-[1.4rem]">{item.title}</h3>
          <h3 className="vertical-timeline-element-title text-[1.1rem] text-blue-600">{item.sub}</h3>
          <p>{item.description}</p>
        </VerticalTimelineElement>
        ))} 

        {/* <VerticalTimelineElement iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }} /> */}
      </VerticalTimeline>
      </div>

        <div className="w-screen h-[8rem] bg-white flex items-center justify-center md:pl-8 border-t-2 border-black">
            <h1 className="font-light">Copyright <span className="text-blue-600 text-[1.2rem]">&copy;</span> 2023 JG WebDev</h1>
        </div>
      </div>
    )
}

export default AboutScreen
