import React from 'react'
import CardBlog from "../components/blog/cardBlog.jsx";
import Socialmedia from "../components/blog/socialmedia.jsx";
import BlogHero from "../components/blog/blogHero.jsx";

const BlogPage = () => {
    return (
        <>
            <BlogHero/>
            <CardBlog/>
            <Socialmedia/>
        </>
    )
}
export default BlogPage
