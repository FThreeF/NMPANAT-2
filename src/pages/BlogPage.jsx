import BlogHeader from '../sections/blogHeader/BlogHeader';
import AllPosts from '../sections/allPosts/AllPosts';
import AllCategories from '../sections/allCategories/AllCategories';
import JoinOurTeam from '../sections/joinOurTeam/JoinOurTeam';

const BlogPage = () => {
    return (
        <>
            <BlogHeader />
            <AllPosts />
            <AllCategories />
            <JoinOurTeam />
        </>
    )
}

export default BlogPage;