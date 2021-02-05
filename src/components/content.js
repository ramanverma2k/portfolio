const contentStyle = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: '0 20px 0 20px'
}

const bStyle = {
    borderBottom: '2px solid',
    borderLength: '20px',
    width: '25%',
    padding: '10px 0 20px 0'
}

const Content = () => (
    <div>
        <div style={contentStyle}>
            <h1 style={bStyle}>
                Project Showcase
            </h1>
        </div>
    </div>
)

export default Content;