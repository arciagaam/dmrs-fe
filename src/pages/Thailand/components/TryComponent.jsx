import { useState, useEffect, useRef } from "react"
import { easeInOut, motion, useDragControls} from 'framer-motion'

const TryComponent = () => {
  const [drag, setDrag] = useState(false);
  const dragControls = useDragControls()
  
  function startDrag(event) {
    dragControls.start(event, { snapToCursor: true })
  }

  return (
    <motion.div 
      drag={true}
      onDragStart={() => setDrag(!drag)}
      onDragEnd={() => setDrag(!drag)}
      whileDrag={{ scale: 0.3, transition: { duration: 0.4}}}
      sticky={true}
      dragConstraints={{ right: 100 }}
      dragSnapToOrigin={true}
      initial={{ x: 0 }}
      animate={{ opacity: [0,1], x: [-1680, 0], transition:{ duration: 1.5, ease: easeInOut}, mixBlendMode: "difference" }}
      className="absolute flex items-center justify-center bg-white w-[400px] top-10 right-0 h-[400px] rounded-full z-20">
      <p className={`text-black text-xs ${drag ? 'opacity-0' : 'opacity-100'}`}>Drag Me!</p>
  </motion.div>
  )
}

export default TryComponent