const Post = ({ title, summary, cover, content, createdAt }) => {
  return (
    <div className="post">
      <div className="image">
        <img src="images/world.jpg" alt="jsja" />
      </div>
      <div className="texts">
        <h2>{title}</h2>
        <p className="info">
          <a className="author">Ikponmwosa</a>
          <time>{createdAt}</time>
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
};

export default Post;
