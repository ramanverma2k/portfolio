const socialStyle = {
    display: 'flex',
    justifyContent: 'flex-start',
    paddingTop: '1rem'
}

const Social = () => (
    <div style={socialStyle}>
        <a style={{paddingRight: '2px'}} href="https://www.github.com/ramanverma2k">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={32} height={32}>
                <path
                    fill="#F5E9E2"
                    fillRule="evenodd"
                    d="M16 4C9.371 4 4 9.371 4 16c0 5.3 3.438 9.8 8.207 11.387.602.11.82-.258.82-.578 0-.286-.011-1.04-.015-2.04-3.34.723-4.043-1.609-4.043-1.609-.547-1.387-1.332-1.758-1.332-1.758-1.09-.742.082-.726.082-.726 
                    1.203.086 1.836 1.234 1.836 1.234 1.07 1.836 2.808 1.305 3.492 1 .11-.777.422-1.305.762-1.605-2.664-.301-5.465-1.332-5.465-5.93 0-1.313.469-2.383 1.234-3.223-.121-.3-.535-1.523.117-3.175 0 0 1.008-.32 3.301 1.23A11.487 11.487 0 0116 9.805c1.02.004 2.047.136 3.004.402 2.293-1.55 3.297-1.23 3.297-1.23.656 1.652.246 2.875.12 3.175.77.84 1.231 1.91 1.231 3.223 0 4.61-2.804 5.621-5.476 5.922.43.367.812 1.101.812 2.219 0 1.605-.011 2.898-.011 3.293 0 .32.214.695.824.578C24.566 25.797 28 21.3 28 16c0-6.629-5.371-12-12-12z"
                />
            </svg>
        </a>
        <a style={{paddingLeft: '2px'}} href="https://t.me/nottaggingraman">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={32} height={32}>
                <path fill="#F5E9E2" d="M26.07 3.996a2.974 2.974 0 00-.933.223h-.004c-.285.113-1.64.683-3.7 1.547l-7.382 3.109c-5.297 2.23-10.504 4.426-10.504 4.426l.062-.024s-.359.118-.734.375a2.03 2.03 0 00-.586.567c-.184.27-.332.683-.277 1.11.09.722.558 1.155.894 1.394.34.242.664.355.664.355h.008l4.883 1.645c.219.703 1.488 4.875 1.793 5.836.18.574.355.933.574 1.207.106.14.23.257.379.351a1.119 1.119 0 00.246.106l-.05-.012c.015.004.027.016.038.02.04.011.067.015.118.023.773.234 1.394-.246 1.394-.246l.035-.028 2.883-2.625 4.832 3.707.11.047c1.007.442 2.027.196 2.566-.238.543-.437.754-.996.754-.996l.035-.09 3.734-19.129c.106-.472.133-.914.016-1.343a1.807 1.807 0 00-.781-1.047 1.872 1.872 0 00-1.067-.27zm-.101 2.05c-.004.063.008.056-.02.177v.011l-3.699 18.93c-.016.027-.043.086-.117.145-.078.062-.14.101-.465-.028l-5.91-4.531-3.57 3.254.75-4.79 9.656-9c.398-.37.265-.448.265-.448.028-.454-.601-.133-.601-.133l-12.176 7.543-.004-.02-5.836-1.965v-.004l-.015-.003a.27.27 0 00.03-.012l.032-.016.031-.011s5.211-2.196 10.508-4.426c2.652-1.117 5.324-2.242 7.379-3.11 2.055-.863 3.574-1.496 3.66-1.53.082-.032.043-.032.102-.032z" />
            </svg>
        </a>
        <a style={{paddingLeft: '2px'}} href="https://www.linkedin.com/in/ramanverma2k">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={32} height={32}>
                <path fill="#F5E9E2" d="M7.5 5A2.518 2.518 0 005 7.5v17C5 25.867 6.133 27 7.5 27h17c1.367 0 2.5-1.133 2.5-2.5v-17C27 6.133 25.867 5 24.5 5zm0 2h17c.285 0 .5.215.5.5v17c0 .285-.215.5-.5.5h-17a.489.489 0 01-.5-.5v-17c0-.285.215-.5.5-.5zm2.938 1.719a1.719 1.719 0 100 3.437 1.719 1.719 0 000-3.437zm9.03 4.562c-1.433 0-2.386.785-2.78 1.531h-.063V13.5h-2.813V23h2.938v-4.688c0-1.238.246-2.437 1.781-2.437 1.512 0 1.532 1.398 1.532 2.5V23H23v-5.219c0-2.554-.543-4.5-3.531-4.5zM9 13.5V23h2.969v-9.5z" />
            </svg>
        </a>
        <a style={{paddingLeft: '6px'}} href="mailto:ramanverma4183@gmail.com">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 350" width={32} height={32}>
                <g strokeMiterlimit={10} fill="#F5E9E2">
                    <path d="M348.156 302.425h-350.1V43.783h350.1v258.642zm-334.54-15.56h318.98V59.343H13.616v227.522z" />
                    <path d="M301.164 98.067l-10.503-11.436-117.555 107.83L55.55 86.632 45.047 98.067l81.768 75.039-81.768 75.038L55.55 259.58l82.779-75.933 34.777 31.937 34.776-31.937 82.78 75.933 10.502-11.436-81.767-75.038z" />
                </g>
            </svg>
        </a>
    </div>
)

export default Social