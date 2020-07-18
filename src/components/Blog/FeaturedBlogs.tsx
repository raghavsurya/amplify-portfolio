import React, { FunctionComponent } from 'react'

type FeatureBlogsProps = {
    title: string
}

const FeaturedBlogs: FunctionComponent<FeatureBlogsProps> = ({ title }) =>
    <div>
        Hey, I am featured blogs component
</div>

export default FeaturedBlogs;