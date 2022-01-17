
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridiItem from "./GifGridiItem";


const GifGrid = ({category}) => {

    const {data:images,loading} =  useFetchGifs(category);

console.log("TERCERP");
    return (
        <div className="card-grid">
            <h3>{category}</h3>
            {loading && <p className="animate__animated animate__flash animate__infinite">Loaging...</p>}
            {
                images.map(image=>(
                    <GifGridiItem 
                    key={image.id}
                    {...image}
                    />
                ))
            }

         </div>
    )
}

export default GifGrid
