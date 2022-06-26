
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    const { images, isLoading} = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>

            {/* preguntar si el isLoading esta en true */}
            {
                isLoading && (<h2>Cargando ... </h2>) //si is loading esta en en true va ejecutar la segunda parte
                
            }
            
            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifItem
                            key={image.id}
                            {...image}//estoy esparciendo todo los datos y los envio como props,(por separado)
                        />
                    ))
                }
            </div>
        </>
    )
}