import SocialLinks from '../components/social'

export default function Landing(){
    return(
            <div className="flex items-center justify-center h-screen">
                <h1 className="font-quicksand text-secondary text-4xl">Hi, I&apos;m
                    <span className="font-right text-ob1 text-6xl">
                        Raman Verma
                    </span>
                    <SocialLinks/>
                </h1>     
            </div>
    )
}