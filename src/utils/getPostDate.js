export const getPostDate = (createdDate) => {
    const postedDate = new Date(createdDate)
    const presentTime = new Date()
    const milliSecs = Math.floor(presentTime - postedDate)
    const sec = Math.floor(milliSecs/1000)

    if(secs > 59) {
        const min = Math.floor(sec/60);
            if(min > 59) {
                const hr = Math.floor(min / 60);  
                if (hr > 23) {
                    return postedDate.toLocaleDateString('en-us', {
                        day: "numeric",
                        year: "numeric",
                        month: "short",
                    })
                } else {
                    return hr > 1 ? `${hr} hrs ago` : `${hr} hr ago`;
                }
            } else {
                return min > 1 ? `${min} mins ago` : `${min} min ago`;
            }
    } else {
        return sec > 1 ? `${sec} secs ago` : `${sec} sec ago`;
    }
}