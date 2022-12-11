import Header from "./components/Header";
import Post from "./Post";
import "./styles.css";

export default () => {
  return (
    <div>
      <Header />
      <Post
        author="Claudio Silva Jr"
        content="Muito legal"
      />
      <Post
        author="Autor"
        content="Muito legal tbm"
      />
    </div>
  )
}
