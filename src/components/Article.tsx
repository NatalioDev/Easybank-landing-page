// Importamos estilos
import "./styles/article.css"

// Definimos el tipo de las props que recibe el componente Article.
type Props = {
  author: string,
  title: string,
  description: string,
  image: string,
}

export default function Article({author, title, description, image}:Props) {

  return (
    <div className="card">

        {/* Contenedor de la imagen del artículo */}
        <div className="card_image">
            <figure style={{
              width: '100%',
              height: '200px',
              backgroundImage: `url(${image})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',}}>
            </figure>
        </div>

        {/* Contenedor de la información del artículo */}
        <div className="card_info">

              {/* Autor del artículo */}
            <span className="info_author">{author}</span>

            {/* Título del artículo */}
            <h2 className="card_info_title">{title}</h2>

            {/* Descripción del artículo */}
            <p className="card_info_description">{description}</p>
        </div>
    </div>
  )
}
