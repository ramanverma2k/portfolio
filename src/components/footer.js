import Social from "./social";

const footerStyle = {
    position: 'absolute',
    width: '99%',
    bottom: '0'
}

const Content = () => (
    <footer style={footerStyle}>
        <Social/>
    </footer>
)

export default Content;