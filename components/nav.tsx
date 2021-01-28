import Menu from './icons/menu.svg'
import { motion } from 'framer-motion'

export default function Navbar() {
    const variants = {
        visible: {opacity: 1},
        hidden: {opacity: 0}
    }

    return(
        <motion.div initial="hidden" animate="visible" variants={variants} transition={{ease: "anticipate",duration: 2,repeat:Infinity}}>
            <div className="flex justify-start pt-6 pl-6">
                <Menu className="fill-current text-ob2 "/>
            </div>  
        </motion.div>
    )
}