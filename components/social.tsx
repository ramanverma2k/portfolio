import Github from '../components/icons/github.svg'
import LinkedIn from '../components/icons/linkedin.svg'
import Telegram from '../components/icons/telegram.svg'
import Mail from '../components/icons/mail.svg'

export default function SocialLinks() {
    return (
        <div className="flex flex-wrap justify-center space-x-4 pt-2">
                <a className="pt-1" href="https://www.github.com/ramanverma2k">
                    <Github class="fill-current text-ob2"/>
                </a>
                <a href="https://www.linkedin.com/in/ramanverma2k">
                    <LinkedIn class="fill-current text-ob2"/>
                </a>
                <a className="pt-1" href="@nottaggingraman">
                    <Telegram class="fill-current text-ob2"/>
                </a>
                <a className="pt-1" href="mailto:ramanverma4183@gmail.com">
                    <Mail class="fill-current text-ob2"/>
                </a>
        </div>
    )
}