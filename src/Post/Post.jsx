import { Link, useNavigate } from "react-router-dom";



const Post = ({ post }) => {
    const { id, title } = post;

    const navigate = useNavigate();

    const postStyle = {
        border: '5px solid red',
        padding: '5px',
        borderRadius: '25px',
        margin: '15px',
        color:'green'
        
    }

    const handleShowDetails = ()=>{
        navigate(`/post/${id}`);
    }
    return (
        <div style={postStyle}>
            <h4>Post of Id:{id}</h4> 
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Details</Link>
            <Link to={`/post/${id}`}><button >Show Details</button></Link>
            <button onClick={handleShowDetails}>Click to show details</button>
        </div>
    );
};

export default Post;