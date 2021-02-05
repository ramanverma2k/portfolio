import './styles/btn.css'

const navStyle = {
    display: 'flex', 
    justifyContent: 'flex-end',
}

const Navbar = () => (
    <nav style={navStyle}>
        <div>
            <button className="btn">
                Articles
            </button>
            <button className="btn">
                Projects
            </button>
        </div>
    </nav>
)

export default Navbar;