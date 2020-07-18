import * as React from "react";
import BlogCard from '../components/Card'

type BlogProps = {
    title: string,
    subText: string,
    datePublished?: string,
}

function Blogs() {
    return (
        <BlogCard>
            <div className="title">
                This is a test blog"
            </div>
            <div className="datePublished">
                20 Mar 2020
            </div>
            <div className="subText">
                Click on this blog to view its full contents
            </div>
            <h3>hahahahahahahahahahahaha heheheheheheheh</h3>
        </BlogCard>
    )
}

export default Blogs;