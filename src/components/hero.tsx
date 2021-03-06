import { useState, useEffect } from "react";
import Social from "./social";
import "../styles/hero.css";

const Hero = () => {
    const mediumURL =
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ramanverma4183";

    const [blog, setBlog] = useState({
        items: [],
        isLoading: true,
        isNull: true,
        error: null,
    });

    const axios = require("axios").default;

    useEffect(() => {
        axios
            .get(mediumURL)
            .then((info: any) => {
                const blogs = info.data.items;
                const posts = blogs.filter(
                    (posts: any) => posts.categories.length > 0
                );
                setBlog({
                    items: posts,
                    isLoading: false,
                    isNull: false,
                    error: null,
                });
                if (posts.length <= 0) {
                    setBlog({
                        items: posts,
                        isLoading: false,
                        isNull: true,
                        error: null,
                    });
                }
            })
            .catch((err: any) =>
                setBlog({
                    items: [],
                    isLoading: true,
                    isNull: true,
                    error: err,
                })
            );
    }, [axios]);

    const loadBlog = () => {
        if (blog.items) {
            return blog.items.map((post: any) => (
                <div className="blog--card">
                    <a href={post.link} className="blog--card__heading">
                        {post.title}
                    </a>
                </div>
            ));
        }
    };

    const [projects, setProjects] = useState({
        items: [{}],
        isLoading: true,
    });

    useEffect(() => {
        const Links = [
            {
                link: "https://www.github.com/derpLLC/Petscue",
                title: "Petscue",
            },
            {
                link: "https://www.github.com/ramanverma2k/RecipeTime",
                title: "Recipe Time",
            },
            {
                link: "https://www.github.com/ramanverma2k/goKrypt",
                title: "goKrypt",
            },
            {
                link: "https://www.github.com/ramanverma2k/qed_historical_data",
                title: "qed_historical_data",
            },
            {
                link: "https://www.github.com/ramanverma2k/nse",
                title: "nse",
            },
        ];
        setProjects({ items: Links, isLoading: false });
    }, []);

    const loadProjects = () => {
        return projects.items.map((post: any) => (
            <div className="project--card">
                <a href={post.link} className="project--card__heading">
                    {post.title}
                </a>
            </div>
        ));
    };

    return (
        <div className="hero">
            <div className="preview__box">
                <h2 className="preview__heading">
                    Projects <hr />
                    {projects.isLoading ? "Loading..." : loadProjects()}
                </h2>
            </div>
            <h1 className="greet">
                Hi, I'm Raman Verma
                <span>
                    <p className="info">
                        A <span style={{ color: "#ee6c4d" }}>GoLang</span>{" "}
                        fanatic,{" "}
                        <span style={{ color: "#ee6c4d" }}>Typescript</span>{" "}
                        lover and{" "}
                        <span style={{ color: "#ee6c4d" }}>Flutter</span>{" "}
                        developer
                        <br />
                        With a little bit of interest in{" "}
                        <span style={{ color: "#ee6c4d" }}>AI</span> and{" "}
                        <span style={{ color: "#ee6c4d" }}>Deep Learning</span>.
                    </p>
                </span>
                <Social />
            </h1>
            <div className="preview__box">
                <h2 className="preview__heading">
                    Blog <hr />
                    {blog.isLoading || blog.isNull
                        ? "beep bop could not find any blogs"
                        : loadBlog()}
                </h2>
            </div>
        </div>
    );
};

export default Hero;
