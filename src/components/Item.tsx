// Importamos estilos
import "./styles/item.css";

// Definimos el tipo de las props que recibe el componente Item.
type Props = {
  img : string,
  title: string,
  description: string
}

// Definimos el componente funcional Item.
export default function Item({img, title, description}:Props) {
  return (
    <div className="content_item">
        {/* Elemento de la imagen del Item */}
        <figure className="content_image_item">
            <img src={img} alt="icon"/>
        </figure>

        {/* Titulo del Item */}
        <h2 className="content_title_item">{title}</h2>

        {/* Descripción del Item */}
        <p className="content_description_item">{description}</p>
    </div>
  )
}
