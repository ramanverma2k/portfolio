const contentStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 0 0 20px'
}

const bStyle = {
    borderBottom: '2px solid',
    borderLength: '20px',
    width: '25%',
    padding: '0 0 15px 0',
    textAlign: 'center'
}

const Content = () => (
        <div style={contentStyle}>
            <h1 style={bStyle}>
                Project Showcase
            </h1>
        </div>
)

export default Content;