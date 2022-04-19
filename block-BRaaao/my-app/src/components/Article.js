import data from "../data.json";
function Articles() {
  return (
    <div className="container">
      <div className="grid">
        {data.map((info) => (
          <Article key={info.author} {...info} />
        ))}
      </div>
    </div>
  );
}
function Article(props) {
  return (
    <div className="wrapper ">
      <img src={props.urlToImage} alt="" width="380" />
      <div>
        <h2>{props.author}</h2>
        <h3>Title: {props.title}</h3>
        <p>{props.description}</p>
      </div>
      <button>
        <a href={props.url}>Read More!</a>
      </button>
    </div>
  );
}
export default Articles;
