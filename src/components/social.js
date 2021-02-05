const socialStyle = {
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap'
}

const Social = () => (
    <div style={socialStyle}>
        <a href="https://www.github.com/ramanverma2k">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width={78} height={78}>
                <path
                    fill="#F5E9E2"
                    fillRule="evenodd"
                    d="M16 4C9.371 4 4 9.371 4 16c0 5.3 3.438 9.8 8.207 11.387.602.11.82-.258.82-.578 0-.286-.011-1.04-.015-2.04-3.34.723-4.043-1.609-4.043-1.609-.547-1.387-1.332-1.758-1.332-1.758-1.09-.742.082-.726.082-.726 
                    1.203.086 1.836 1.234 1.836 1.234 1.07 1.836 2.808 1.305 3.492 1 .11-.777.422-1.305.762-1.605-2.664-.301-5.465-1.332-5.465-5.93 0-1.313.469-2.383 1.234-3.223-.121-.3-.535-1.523.117-3.175 0 0 1.008-.32 3.301 1.23A11.487 11.487 0 0116 9.805c1.02.004 2.047.136 3.004.402 2.293-1.55 3.297-1.23 3.297-1.23.656 1.652.246 2.875.12 3.175.77.84 1.231 1.91 1.231 3.223 0 4.61-2.804 5.621-5.476 5.922.43.367.812 1.101.812 2.219 0 1.605-.011 2.898-.011 3.293 0 .32.214.695.824.578C24.566 25.797 28 21.3 28 16c0-6.629-5.371-12-12-12z"
                />
            </svg>
        </a>
        <a href="https://t.me/nottaggingraman">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width={78} height={78}>
                <path fill="#F5E9E2" d="M26.07 3.996a2.974 2.974 0 00-.933.223h-.004c-.285.113-1.64.683-3.7 1.547l-7.382 3.109c-5.297 2.23-10.504 4.426-10.504 4.426l.062-.024s-.359.118-.734.375a2.03 2.03 0 00-.586.567c-.184.27-.332.683-.277 1.11.09.722.558 1.155.894 1.394.34.242.664.355.664.355h.008l4.883 1.645c.219.703 1.488 4.875 1.793 5.836.18.574.355.933.574 1.207.106.14.23.257.379.351a1.119 1.119 0 00.246.106l-.05-.012c.015.004.027.016.038.02.04.011.067.015.118.023.773.234 1.394-.246 1.394-.246l.035-.028 2.883-2.625 4.832 3.707.11.047c1.007.442 2.027.196 2.566-.238.543-.437.754-.996.754-.996l.035-.09 3.734-19.129c.106-.472.133-.914.016-1.343a1.807 1.807 0 00-.781-1.047 1.872 1.872 0 00-1.067-.27zm-.101 2.05c-.004.063.008.056-.02.177v.011l-3.699 18.93c-.016.027-.043.086-.117.145-.078.062-.14.101-.465-.028l-5.91-4.531-3.57 3.254.75-4.79 9.656-9c.398-.37.265-.448.265-.448.028-.454-.601-.133-.601-.133l-12.176 7.543-.004-.02-5.836-1.965v-.004l-.015-.003a.27.27 0 00.03-.012l.032-.016.031-.011s5.211-2.196 10.508-4.426c2.652-1.117 5.324-2.242 7.379-3.11 2.055-.863 3.574-1.496 3.66-1.53.082-.032.043-.032.102-.032z" />
            </svg>
        </a>
        <a href="https://www.linkedin.com/in/ramanverma2k">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width={78} height={78}>
                <path fill="#F5E9E2" d="M7.5 5A2.518 2.518 0 005 7.5v17C5 25.867 6.133 27 7.5 27h17c1.367 0 2.5-1.133 2.5-2.5v-17C27 6.133 25.867 5 24.5 5zm0 2h17c.285 0 .5.215.5.5v17c0 .285-.215.5-.5.5h-17a.489.489 0 01-.5-.5v-17c0-.285.215-.5.5-.5zm2.938 1.719a1.719 1.719 0 100 3.437 1.719 1.719 0 000-3.437zm9.03 4.562c-1.433 0-2.386.785-2.78 1.531h-.063V13.5h-2.813V23h2.938v-4.688c0-1.238.246-2.437 1.781-2.437 1.512 0 1.532 1.398 1.532 2.5V23H23v-5.219c0-2.554-.543-4.5-3.531-4.5zM9 13.5V23h2.969v-9.5z" />
            </svg>
        </a>
        <a href="mailto:ramanverma4183@gmail.com">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 350" width={38} height={38} >
                <g strokeMiterlimit={10} fill="#F5E9E2">
                    <path d="M291.93 304.346H54.285c-31.008 0-56.23-25.222-56.23-56.23V98.091c0-31.004 25.226-56.23 56.23-56.23h237.643c31.004 0 56.227 25.226 56.227 56.23v150.025c0 31.008-25.223 56.23-56.227 56.23zM54.285 58.304c-21.94 0-39.787 17.847-39.787 39.787v150.025c0 21.94 17.847 39.791 39.787 39.791h237.643c21.94 0 39.787-17.851 39.787-39.79V98.09c0-21.94-17.847-39.787-39.787-39.787H54.286z" />
                    <path d="M41.017 98.873c42.027 40.954 84.055 81.904 126.082 122.858 7.835 7.632 19.859-4.365 12.013-12.013-42.028-40.95-84.055-81.904-126.083-122.854-7.834-7.636-19.858 4.365-12.012 12.009z" />
                    <path d="M179.112 221.73L305.194 98.878c7.843-7.644-4.174-19.649-12.012-12.013-42.027 40.95-84.055 81.904-126.083 122.854-7.842 7.644 4.174 19.649 12.013 12.013z" />
                    <path d="M304.731 250.719c-27.965-26.522-55.934-53.04-83.899-79.562-7.932-7.52-19.964 4.47-12.012 12.012 27.965 26.522 55.934 53.04 83.9 79.562 7.93 7.52 19.963-4.473 12.011-12.012zM54.25 262.727c27.966-26.522 55.935-53.04 83.9-79.562 7.947-7.539-4.077-19.535-12.012-12.012-27.966 26.522-55.935 53.04-83.9 79.562-7.947 7.539 4.077 19.54 12.012 12.012z" />
                </g>
            </svg>
        </a>
    </div>
)

export default Social