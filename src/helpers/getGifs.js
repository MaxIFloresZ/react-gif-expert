//puede estas fuer o en otro achivo el getGifs y que resiba la categoria
export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=4TaBgAfWjMEfXGixYmwsXt1AOsR3iweE&q=${category}&limit=10`
    const resp = await fetch(url);
    const { data } = await resp.json()

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))


    return gifs;
}