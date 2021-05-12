import "../styles/social.css";

const Social = () => {
    return (
        <div className="wrapper">
            <a
                href="mailto:ramanverma4183"
                className="social--icon"
                target="_blank"
                rel="noopener noreferrer"
            >
                <svg
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z"
                        fill="currentColor"
                    />
                </svg>
            </a>
            <a
                href="https://www.github.com/ramanverma2k"
                className="social--icon"
                target="_blank"
                rel="noopener noreferrer"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                >
                    <g data-name="Layer 2">
                        <path
                            fill="currentColor"
                            d="M12 1A10.89 10.89 0 001 11.77 10.79 10.79 0 008.52 22c.55.1.75-.23.75-.52v-1.83c-3.06.65-3.71-1.44-3.71-1.44a2.86 2.86 0 00-1.22-1.58c-1-.66.08-.65.08-.65a2.31 2.31 0 011.68 1.11 2.37 2.37 0 003.2.89 2.33 2.33 0 01.7-1.44c-2.44-.27-5-1.19-5-5.32a4.15 4.15 0 011.11-2.91 3.78 3.78 0 01.11-2.84s.93-.29 3 1.1a10.68 10.68 0 015.5 0c2.1-1.39 3-1.1 3-1.1a3.78 3.78 0 01.11 2.84A4.15 4.15 0 0119 11.2c0 4.14-2.58 5.05-5 5.32a2.5 2.5 0 01.75 2v2.95c0 .35.2.63.75.52A10.8 10.8 0 0023 11.77 10.89 10.89 0 0012 1"
                        />
                    </g>
                </svg>
            </a>
            <a
                href="https://www.linkedin.com/in/ramanverma2k"
                className="social--icon"
                target="_blank"
                rel="noopener noreferrer"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                >
                    <g data-name="Layer 2">
                        <g data-name="linkedin" fill="currentColor">
                            <path d="M15.15 8.4a5.83 5.83 0 00-5.85 5.82v5.88a.9.9 0 00.9.9h2.1a.9.9 0 00.9-.9v-5.88a1.94 1.94 0 012.15-1.93 2 2 0 011.75 2v5.81a.9.9 0 00.9.9h2.1a.9.9 0 00.9-.9v-5.88a5.83 5.83 0 00-5.85-5.82z" />
                            <rect
                                x={3}
                                y={9.3}
                                width={4.5}
                                height={11.7}
                                rx={0.9}
                                ry={0.9}
                            />
                            <circle cx={5.25} cy={5.25} r={2.25} />
                        </g>
                    </g>
                </svg>
            </a>
            <a
                href="https://t.me/nottaggingraman"
                className="social--icon"
                target="_blank"
                rel="noopener noreferrer"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                >
                    <g data-name="Layer 2">
                        <path
                            fill="currentColor"
                            d="M21 4a1.31 1.31 0 00-.06-.27v-.09a1 1 0 00-.2-.3 1 1 0 00-.29-.19h-.09a.86.86 0 00-.31-.15H20a1 1 0 00-.3 0l-18 6a1 1 0 000 1.9l8.53 2.84 2.84 8.53a1 1 0 001.9 0l6-18A1 1 0 0021 4zm-4.7 2.29l-5.57 5.57L5.16 10zM14 18.84l-1.86-5.57 5.57-5.57z"
                            data-name="paper-plane"
                        />
                    </g>
                </svg>
            </a>
        </div>
    );
};

export default Social;
