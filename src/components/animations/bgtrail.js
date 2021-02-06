import { Component } from "react";
import ParticlesBg from "particles-bg";

class BgTrail extends Component {
    render() {
        return (
            <ParticlesBg color="#0b0014" num={3} type="fountain" bg={true} />
        );
    }
}

export default BgTrail;
