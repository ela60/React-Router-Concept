import { Navigate, useLoaderData } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData();
    const { id, title, body } = post;
    const postDetailsStyle = {
        border: '15px solid tomato',
        padding: '5px',
        borderRadius: '20px',
        margin: '25px',
        fontWeight:'bold'
        
    }

    const handleGoBack = () => {
       Navigate(-1);
    }
    return (
        <div style={postDetailsStyle}>
            <h3>post details about:{ id}</h3> 
            <p>Tile:{title}</p>
            <p><small>Body:{body}</small></p>
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default PostDetails;