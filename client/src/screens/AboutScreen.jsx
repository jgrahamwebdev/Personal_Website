
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Sidebar from '../components/Sidebar';

export const cards = [
    {
        id: 1,
        title: '',
        sub: '',
        description: '',
        image: '',
        timeline: '',
    }
]

const AboutScreen = () => {
    return (
        <div className='w-screen bg-[#e8e8e7] flex items-center flex-col justify-center'>

            <div className='hidden w-screen md:flex'>
                <Sidebar />
            </div>

            {/* BUILD MOBILE VIEW NAV HERE: */}
            <div>

            </div>
           <div className='w-screen h-auto flex items-center justify-center border-b-2 border-black'>
                <div className="w-1/2 flex items-center justify-center flex-col border-r-2 border-black">
                    <h1 className="font-extrabold text-[3.5rem] mb-4">About Me</h1>
                    <p className="w-[65%] mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt modi perferendis doloribus fugit quam totam veniam quis hic provident officia.</p>      
                </div>
                <div className='w-1/2 h-full flex items-center justify-center py-8'>
                    <img className='w-1/2 h-auto' src="/img/3.png" alt="" />
                </div>
            </div>

            <div className='w-3/4 h-auto flex items-center justify-center border-x-2 border-b-2 border-black py-[5rem]'>
                <div className='w-1/2 h-full flex items-center justify-center'>
                    <div className='absolute top-[48%] w-[20rem] h-[24rem] bg-blue-600 border-2 border-black'>
                        <img className='h-full w-auto object-cover' src="/img/random.gif" alt="" />
                    </div>
                </div>
                <div className="w-1/2 flex items-center justify-center flex-col border-l-2 border-black">
                    <h1 className="font-extrabold text-[3.5rem] mb-4">Fun Stuff</h1>
                    <p className="w-[65%] mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt modi perferendis doloribus fugit quam totam veniam quis hic provident officia.</p>      
                </div>
            </div>

            {/* <img className='top-[0%] left-[48.9%] z-10 w-[11rem] h-auto fixed' src="/img/hand.png" alt="" /> */}

        <div>
            <div className="flex items-start justify-center flex-col pl-[3.8rem] pt-8 mb-2">
                <h1 className="font-extrabold text-[3rem] mb-4">My Journey:</h1>
            </div>


        <VerticalTimeline>
        {/* lineColor={'rgb(37 99 235)'} */}

        <VerticalTimelineElement
         
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#fff', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid  #fff' }}
          date="2021 - Present"
          iconStyle={{ background: '#fff', color: '#fff' }}
          position={'left'}
          icon={<div className="flex justify-center items-center w-full h-full"><img src='/img/me.png' className='w-[100%] h-[100%] object-contain'/></div>}
        >
          <h3 className="vertical-timeline-element-title text-[1.4rem]">Freelance Web Developer</h3>
          <h3 className="vertical-timeline-element-title text-[1.1rem] text-blue-600">Lorem, ipsum dolor.</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, officiis similique dolore hic, debitis officia adipisci voluptatibus, iste dolores ratione inventore sed.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - 2023"
          iconStyle={{ background: '#fff', color: '#fff' }}
          position={'right'}
          icon={<div className="flex justify-center items-center w-full h-full"><img src='/img/dojo.png' className='w-[80%] h-[80%] rounded-[45%] object-contain'/></div>}
        >
          <h3 className="vertical-timeline-element-title text-[1.4rem]">Full Stack Web Developer Certificate</h3>
          <h3 className="vertical-timeline-element-title text-[1.1rem] text-blue-600">Lorem, ipsum dolor.</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, aut modi nam ipsum tempore eligendi, doloremque aliquam, quo magnam itaque deserunt quibusdam autem officia fugit!</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="TBD"
          iconStyle={{ background: '#fff', color: '#fff' }}
          position={'left'}
          icon={<div className="flex justify-center items-center w-full h-full"><img src='/img/tbd.png' className='w-[80%] h-[80%] rounded-[45%] object-contain'/></div>}
        >
          <h3 className="vertical-timeline-element-title">TBD</h3>
          <h3 className="vertical-timeline-element-title text-[1.1rem] text-blue-600">Lorem, ipsum dolor.</h3>
          <p>TBD</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          
        />
      </VerticalTimeline>
      </div>

      </div>
    )
}

export default AboutScreen
