import s from './FeaturedPosts.module.scss';

const FeaturedPosts = () => {
    return (
        <section className={s.featuredPosts}>
            <div className={`${s.container} container`}>
                Featured posts
            </div>
        </section>
    )
}

export default FeaturedPosts;