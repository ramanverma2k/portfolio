const contentStyle = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: '0 20px 0 20px',
}

const bStyle = {
    borderBottom: '2px solid',
    borderLength: '20px',
    width: '120%',
    paddingTop: '20px'
}

const Content = () => (
    <div style={contentStyle}>
        <h1>
            Latest posts from me :)<span>
                <div style={bStyle}></div>
            </span>
        </h1>
    </div>
)

export default Content;