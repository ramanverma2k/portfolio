import "../App.css";
import "../styles/about.css";
import "../styles/footer.css";

const About = () => {
    return (
        <div className="About">
            <section className="section__about">
                <h1 className="h1">
                    Introduction
                    <hr className="h1__underline" />
                </h1>
                <h4 className="highlight">
                    A Student and a Developer, currently working on improving
                    myself and building cross-platform Flutter Applications.
                </h4>
                <p className="summary">
                    My name is Raman Verma, I am currently pursuing my higher
                    education (MCA) and I am actively working on various
                    projects
                    <br />
                    and constantly learning everyday. I am striving to become a
                    successful developer while collaborating with my peers and
                    collegues.
                    <br /> I am a self taught developer for the most part and
                    out of all the programming languages i've learned{" "}
                    <strong>GoLang</strong> is my favourite.
                </p>
                <p className="projects">
                    I am an open source lover and all of my projects and works
                    are open source and free to use. Some of the successful
                    projects and the
                    <br />
                    ones i regularly use are as follows :
                    <strong>
                        &ensp;
                        <a href="https://github.com/ramanverma2k/qed_historical_data">
                            qed_historical_data
                        </a>
                        ,&ensp;
                        <a href="https://github.com/ramanverma2k/NSE_Indices">
                            NSE_Indices
                        </a>
                        ,&ensp;
                        <a href="https://github.com/ramanverma2k/visit_all">
                            visit_all
                        </a>
                        ,&ensp;
                        <a href="https://github.com/ramanverma2k/scripts">
                            scripts
                        </a>
                    </strong>
                </p>
                <p className="currently">
                    I am currently working on two open source cross-platform
                    apps named,
                    <strong>
                        &ensp;
                        <a href="https://github.com/ramanverma2k/qed_historical_data">
                            Petscue
                        </a>
                        &ensp;
                    </strong>
                    and
                    <strong>
                        &ensp;
                        <a href="https://github.com/ramanverma2k/NSE_Indices">
                            Recipe Time
                        </a>
                    </strong>
                    . These apps are being made using&ensp;
                    <strong>Flutter</strong> and with the collaboration between
                    me and my friend.
                </p>
                <p className="interests">
                    Though I spend most of my time writing code, I've also
                    fiddled with Backend using <strong>GoLang</strong>. I feel
                    most productive when I'm <br /> able to build things which
                    not only look good but also performance as well. Clean code,
                    structure, user interface and TDD is <br /> always my main
                    goal whenever i work.
                </p>
                <p className="delta">
                    I hope you enjoyed your stay and browsing here. Thank you
                    for visiting. You can check out my resume by clicking the
                    button on navbar or use any of the social platforms
                    mentioned on the homescreen to contact me.
                    <br />
                    <p className="goodbye">Have a nice day! :)</p>
                </p>
            </section>
        </div>
    );
};

export default About;
