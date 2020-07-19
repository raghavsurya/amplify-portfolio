import React, { FunctionComponent } from 'react'

type BlogDetailProps = {
    title: string,
    datePublished: string,
    blogText: string
}

const BlogDetail: FunctionComponent<BlogDetailProps> = ({ title, datePublished, blogText }) =>
    <div className="blogDetail">
        <div className="title">
            {title}
        </div>
        <div className="datePublished">
            {datePublished}
        </div>
        <div className="bodyBlog">
            {blogText}
        </div>
    </div>

export default BlogDetail;
