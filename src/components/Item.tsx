import "./styles/item.css";

type Props = {
  img : string,
  title: string,
  description: string
}

export default function Item({img, title, description}:Props) {
  return (
    <div className="content_item">
        <figure className="content_image_item">
            <img src={img} alt="icon"/>
        </figure>
        <h2 className="content_title_item">{title}</h2>
        <p className="content_description_item">{description}</p>
    </div>
  )
}
