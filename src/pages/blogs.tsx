//eslint-disable
import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listBlogs } from '../graphql/queries';
import BlogCard from '../components/Card'
import Blog, { mapListBlogs } from "../models/blogs";
import callGraphQL from "../models/typedQueries";
import BlogDetail from '../components/BlogDetail';

function Blogs() {
    const [blogs, setBlogs] = useState<Blog[]>();

    useEffect(() => {
        fetchBlogs();
    }, []);

    async function fetchBlogs() {
        try {
            const blogData = await callGraphQL(listBlogs);
            const blogs = mapListBlogs(blogData);
            setBlogs(blogs);

        } catch (err) {
            console.log("error fetching blogs");
        }
    }

    function createMarkup(text: string) {
        return { __html: text };
    }

    return (
        <div>
            {blogs?.map((blog: Blog) => {
                return <BlogCard key={blog.id}>
                    <div className="title">
                        {blog.name}
                    </div>
                    <div className="datePublished">
                        {blog.date}
                    </div>
                    <div className="subText" dangerouslySetInnerHTML={createMarkup(blog.blogText)}>
                    </div>
                </BlogCard>
            })}
        </div>

    );
}

export default Blogs;