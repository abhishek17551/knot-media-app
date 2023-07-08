const SortPosts = (posts,sortValue) => {
    if(sortValue === 'Trending') {
        return posts.sort((a,b) => b.likes.likeCount - a.likes.likeCount)
    }
    if(sortValue === 'Latest') {
        return posts.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt))
    }
    if(sortValue === 'Oldest') {
        return posts.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    }

    return posts
}

export {SortPosts}