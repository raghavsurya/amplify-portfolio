import { listBlogs } from '../graphql/queries';
import { GraphQLResult } from '@aws-amplify/api';

interface Blog {
    id?: string,
    name?: string,
    date?: string,
    blogText?: string,
}

function mapListBlogsQuery(listBlogsQuery: any): Blog[] {
    return listBlogsQuery.data?.listBlogs?.items?.map((blog: Blog) => ({
        id: blog?.id,
        name: blog?.name,
        date: blog?.date,
        blogText: blog?.blogText,
    } as Blog)) || []

}

export default Blog;
export { mapListBlogsQuery as mapListBlogs }