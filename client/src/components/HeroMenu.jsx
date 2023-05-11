
const HeroMenu = ({handleColorChange}) => {
    return (
        <nav className="w-full flex items-center justify-around flex-col"> 
       <ul className="flex items-center justify-around"> 
         <li className="w-[4rem] h-[3rem] bg-red-500 mr-8 flex items-center justify-center hover:animate-bounce"> 
           <a href="/red" onClick={event => handleColorChange(event, 'red')}>Red</a> 
         </li> 
         <li className="w-[4rem] h-[3rem] bg-green-500 mr-8 flex items-center justify-center hover:animate-bounce"> 
           <a href="/green" onClick={event => handleColorChange(event, 'green')}>Green</a> 
         </li> 
         <li className="w-[4rem] h-[3rem] bg-yellow-500 mr-8 flex items-center justify-center hover:animate-bounce"> 
           <a href="/yellow" onClick={event => handleColorChange(event, 'yellow')}>Yellow</a> 
         </li> 
         <li className="w-[4rem] h-[3rem] bg-blue-500 flex items-center justify-center hover:animate-bounce"> 
           <a href="/blue" onClick={event => handleColorChange(event, 'blue')}>Blue</a> 
         </li> 
       </ul> 
     </nav> 
    )
}

export default HeroMenu
