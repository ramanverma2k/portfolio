import SocialLinks from '../components/social'
import { motion } from 'framer-motion'

export default function Landing(){
    const transition = {
        times: [0,0.1,0.1]
    }
    return(
        <div>
            <div className="flex justify-between text-4xl mt-20 text-ob2">
                <div className="px-16 py-4 ml-20 border-solid border-2 border-ob2">
                    <p>Projects</p>
                </div>
                <div className="px-20 py-4 mr-24 border-solid border-2 border-ob2">
                    <p>Blog</p>
                </div>
            </div>
            <div className="flex items-center justify-center flex-col mt-32">
                <h1 className="font-quicksand text-secondary text-4xl">Hi, I&apos;m
                    <span className="font-right text-ob1 text-6xl">
                        Raman Verma
                    </span>
                    <motion.div animate={{scale: [0,1,0,1]}} transition={transition}>
                        <SocialLinks/>
                    </motion.div>
                </h1>     
            </div>
        </div>
    )
}