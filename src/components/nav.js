import './styles/btn.css'

const Navbar = () => (
    <nav>
        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
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