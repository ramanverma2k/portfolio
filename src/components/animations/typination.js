import React from 'react'
import Typed from 'typed.js'
import '../styles/div_bgrnd.css'

const typination = [
    'Freelancer',
    'Developer',
    'Quick learner',
    'lazy person who loves automation'
]

class Typination extends React.Component {
    componentDidMount() {
        const options = {
            strings: typination,
            typeSpeed: 70,
            backSpeed: 50,
            backDelay: 700,
            smartBackspace: true,
            loop: true,
            cursorChar: '|'
        }
        this.typed = new Typed(this.el, options)
    }

    componentWillUnmount() {
        this.typed.destroy()
    }

    render() {
        return (
                <div className='div_bgrnd'>
                    <span
                        style={{ whiteSpace: 'pre' }}
                        ref={(el) => { this.el = el; }}
                />
                </div>
        )
    }
}

export default Typination