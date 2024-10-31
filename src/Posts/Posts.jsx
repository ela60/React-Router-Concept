import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";



const Posts = () => {
    const postStyleHere = {
        display: 'grid',
         gridTemplateColumns: 'repeat(3,1fr)',
        gap:'10px'
    }

    const posts = useLoaderData();
    return (
        <div>
            <h2>Posts:{posts.length}</h2>
            <div style={postStyleHere}>
                {
                    posts.map(post =><Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;