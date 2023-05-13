
import { useState } from 'react'
import { motion } from "framer-motion";

    
const Message = ({ variant, children }) => {
      const [timeOut, setTimeOut] = useState(null)
    
      setTimeout(() => {
        setTimeOut(1)
      }, 4000)
    
      return (
        timeOut !== 1 && <motion.div className={`alert alert-${variant} h-[4rem] w-[8rem] absolute top-[20%] left-[70%] flex items-center justify-center z-50`} animate={{
            y: [0, 20, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}>
            <div className="h-[4rem] flex justify-center items-center w-full messageBox">
                <h3 className='text-black'>Click & Spin! &darr;</h3>
            </div>
        </motion.div>
      )
    }
    
    Message.defaultPros = {
      variant: 'info',
    }
    
export default Message