import classes from "./Post.module.css";

function Post(props) {
  return (
    <div className={classes.post}>
      <h1> {props.title} </h1>
      <p> {props.body} </p>
    </div>
  );
}

export default Post;
