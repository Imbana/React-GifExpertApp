export const getGifs = async(category)=>{

        
    const url = `https://api.giphy.com/v1/gifs/search?api_key=8MmkZTlTRVkCJSfTiR7VnViSHt4C6sW9&q=${encodeURI(category)}&limit=10`;

    const resp = await fetch(url);
    const {data} = await resp.json();


    const gifs = data.map( item =>{
        return {
            id: item.id,
            title:item.title,
            url: item.images.original.url,

        }
    }) 

    return gifs;
}
