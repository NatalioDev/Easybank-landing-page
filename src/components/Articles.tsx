// CSS
import "./styles/articles.css";

// Component
import Article from "./Article";



export default function Articles() {

  const articles = [
    {
      id:1,
      author: "By Claire Robinson",
      title: "Receive money in any currency with no fees",
      description: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
    },
    {
      id:2,
      author: "By Wilson Hutton",
      title: "Treat yourself without worrying about money",
      description: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
    },
    {
      id:3,
      author: "By Wilson Hutton",
      title: "Take your Easybank card wherever you go",
      description: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
    },
    {
      id:4,
      author: "By Claire Robinson",
      title: "Our invite-only Beta accounts are now live!",
      description: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
    }
  ]

  return (
    <div className="articles">
        <section className="articles_wrapper">
            <h2 className="articles_title">Latest Articles</h2>
            {articles.map(({author, title, description}) => (
              <Article
                author={author}
                title={title}
                description={description}
              />
            ))}
        </section>
    </div>
  )
}
