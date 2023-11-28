import "./styles/article.css"


type Props = {
  author: string,
  title: string,
  description: string,
  image: string,
}

export default function Article({author, title, description, image}:Props) {

  // const styles = {
  //   background: `url(${image}) , var(--very-light-gray)`,
  //   width: '100%',
  //   display: 'flex',
  //   justifyContent: 'center',
  //   backgroundRepeat: 'no-repeat',
  //   backgroundPositionX: '43.4vw',
  //   backgroundPositionY: '-260px',
  //   }


  return (
    <div className="card">
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
        <div className="card_info">
            <span className="info_author">{author}</span>
            <h2 className="card_info_title">{title}</h2>
            <p className="card_info_description">{description}</p>
        </div>
    </div>
  )
}
