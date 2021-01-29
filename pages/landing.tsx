import SocialLinks from '../components/social'
import { motion } from 'framer-motion'

export default function Landing(){
    const variants = {
        visible: { opacity: 1},
        hidden: { opacity: 0 }
    }
    return(
        <div>
            <div className="flex items-center justify-center h-screen">
                <h1 className="font-quicksand text-secondary text-4xl">Hi, I&apos;m
                    <span className="font-right text-ob1 text-6xl">
                        Raman Verma
                    </span>
                    <motion.div initial="hidden" animate="visible" variants={variants} transition={{type: "spring", stiffness:50, delay:0.5}}>
                        <SocialLinks/>
                    </motion.div>
                </h1>     
            </div>
        </div>
    )
}