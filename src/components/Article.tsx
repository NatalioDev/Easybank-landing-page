import "./styles/article.css"


type Props = {
  author: string,
  title: string,
  description: string,
}

export default function Article({author, title, description}:Props) {
  return (
    <div className="card">
        <div className="card_image">
            <figure className="card_img">

            </figure>
        </div>
        <div className="card_info">
            <span className="info_author">{author}</span>
            <h2 className="card_info_title">{title}</h2>
            <p className="card_info_description">{description}</p>
        </div>
    </div>
  )
}
