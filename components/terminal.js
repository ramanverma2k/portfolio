import Terminal from "terminal-in-react";

export default function Term() {
    return (
        <div>
            <Terminal
                color="#FFFFFF"
                backgroundColor="#2d3033"
                barColor="#2d3033"
                prompt="#FFFFFF"
                style={{
                    marginTop: "1rem",
                    marginRight: "40px",
                    width: "500px",
                    height: "450px",
                    fontSize: "1em",
                }}
                commands={{
                    "open-google": () =>
                        window.open("https://www.google.com/", "_blank"),
                    popup: () => alert("Terminal in React"),
                }}
                descriptions={{
                    "open-google": "opens google.com",
                    showmsg: "shows a message",
                    alert: "alert",
                    popup: "alert",
                }}
                msg="Hello"
            />
        </div>
    );
}
