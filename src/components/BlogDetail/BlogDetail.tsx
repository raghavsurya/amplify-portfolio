import React, { FunctionComponent } from 'react'
import './Blogdetail.scss';
import PrimaryButton from '../Button/PrimaryButton';

type BlogDetailProps = {
    title: string,
    datePublished: string,
    blogText: string,
    onClick: Function
}

function createMarkup(text: string) {
    return { __html: text };
}

const BlogDetail: FunctionComponent<BlogDetailProps> = (blogDetailProps: BlogDetailProps) =>
    <div className="blogDetail">
        <PrimaryButton onClick={blogDetailProps.onClick}>
            Back
        </PrimaryButton>
        <div className="title">
            {blogDetailProps.title}
        </div>
        <div className="datePublished">
            {blogDetailProps.datePublished}
        </div>
        <div dangerouslySetInnerHTML={createMarkup(blogDetailProps.blogText)} className="bodyBlog">
        </div>
    </div >

export default BlogDetail;
