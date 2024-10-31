import { Link } from "react-router-dom";


const Users = ({ user }) => {
    const { id, name, email, phone } = user;
    const userStyle = {
        border: '5px solid blue',
        padding: '10px',
        borderRadius: '20px',
        margin:'5px'
        
    }
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>email: {email}</p>
            <p>phone: {phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
        </div>
    );
};

export default Users;