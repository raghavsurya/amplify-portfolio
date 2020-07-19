//eslint-disable
import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listBlogs } from '../graphql/queries';
import BlogCard from '../components/Card'
import Blog, { mapListBlogs } from "../models/blogs";
import callGraphQL from "../models/typedQueries";
// type BlogProps = {
//     title: string,
//     subText: string,
//     datePublished?: string,
// }


//let blogsData: any[] | import("@aws-amplify/api-graphql").GraphQLResult<object> | import("zen-observable-ts").default<object> = [];


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

    return (
        <div>
            {blogs?.map((blog) => {
                return <BlogCard key={blog.id}>
                    <div className="title">
                        {blog.name}
                    </div>
                    <div className="datePublished">
                        {blog.date}
                    </div>
                    <div className="subText">
                        {blog.blogText}
                    </div>
                    <h3>hahahahahahahahahahahaha heheheheheheheh</h3>
                </BlogCard>
            })}
        </div>

    );
}

export default Blogs;