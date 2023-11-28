import Item from "./Item";
import "./styles/content.css"

export default function Content() {
  const items = [
    {
      id:1,
      img : "images/icon-online.svg",
      title: "Online Banking",
      description: `Our modern web and mobile applications allow you to keep<br/>track of your finances
      wherever you are in the world.`,
    },
    {
      id:2,
      img : "images/icon-budgeting.svg",
      title: "Simple Budgeting",
      description: `See exactly where your money<br/>goes each month. Receive notifications when you’re
      close to hitting your limits.`,
    },
    {
      id:3,
      img : "images/icon-onboarding.svg",
      title: "Fast Onboarding",
      description: `We don’t do branches. Open your account in minutes online and start taking control
      of your finances<br/>right away.`,
    },
    {
      id:4,
      img : "images/icon-api.svg",
      title: "Open API",
      description: `Manage your savings, investments, pension, and much more from one account. Tracking
      your money has never been easier.`,
    },
  ]
  return (
    <div className="content_wrapper">
        <section className="content">
            <h2 className="content_title">Why choose Easybank?</h2>
            <p className="content_description">
            We leverage Open Banking to turn your bank account into your financial hub. Control
            your finances like never before.
            </p>
            <div className="content_choose">
              {items.map(({ img, title, description}) => (
                <Item
                  img={img}
                  title={title}
                  description={description}
                />
              ))}
            </div>
        </section>
    </div>
  )
}
