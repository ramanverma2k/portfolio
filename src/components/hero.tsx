import React, { useState, useEffect } from "react";
import Social from "./social";
import "../styles/hero.css";

const Hero = () => {
    const mediumURL =
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ramanverma4183";

    const [blog, setBlog] = useState({
        items: [],
        isLoading: true,
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
                setBlog({ items: posts, isLoading: false, error: null });
            })
            .catch((err: any) =>
                setBlog({ items: [], isLoading: false, error: err })
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

    return (
        <div className="hero">
            <div className="preview__box">
                <h2 className="preview__heading">
                    Projects <hr />
                </h2>
            </div>
            <h1 className="greet">
                Hi, I'm Raman Verma
                <span>
                    <p className="info">
                        A <span style={{ color: "#ee6c4d" }}>GoLang</span>{" "}
                        fanatic,{" "}
                        <span style={{ color: "#ee6c4d" }}>Typescript</span>{" "}
                        lover,{" "}
                        <span style={{ color: "#ee6c4d" }}>Fullstack</span>{" "}
                        developer,
                        <br />
                        With a little bit of interest in{" "}
                        <span style={{ color: "#ee6c4d" }}>Deep Learning</span>.
                    </p>
                </span>
                <Social />
            </h1>
            <div className="preview__box">
                <h2 className="preview__heading">
                    Blog <hr />
                    {blog.isLoading ? "Loading..." : loadBlog()}
                </h2>
            </div>
        </div>
    );
};

export default Hero;
