import "./styles/hero.css"


export default function Hero() {
  return (
    <div className="hero_container">
        <div className="hero_wrapper">
            <section className="hero_info">
                <h1 className="hero_info_title">Next generation digital banking</h1>
                <p className="hero_info_description ">
                Take your financial life online. Your Easybank account will be a one-stop-shop
                for spending, saving, budgeting, investing, and much more.
                </p>
                <div className="hero_btn">
                    <a href="#" className="hero_request_btn">Request invite</a>
                </div>
            </section>
            <div className="hero_image">
                <figure>
                    <img src="images/image-mockups.png" alt="pattern image" className="hero_image_img" />
                </figure>
            </div>
        </div>
    </div>
)}
