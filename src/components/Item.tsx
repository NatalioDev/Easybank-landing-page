import "./styles/item.css";

type Props = {
  img : string,
  title: string,
  description: string
}

export default function Item({img, title, description}:Props) {
  return (
    <div className="item">
        <figure className="image_item">
            <img src={img} alt="icon"/>
        </figure>
        <h2 className="title_item">{title}</h2>
        <p className="description_item">{description}</p>
    </div>
  )
}
