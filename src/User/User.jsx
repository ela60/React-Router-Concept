import { useLoaderData } from "react-router-dom";
import Users from "../users/Users";


const User = () => {
    const users = useLoaderData();
    const userStylehere = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap:'10px'
            
        
    }
    return (
        <div>
            <h3>Our User:{ users.length}</h3>
            <p>All data are loaded here</p>
            <div style={userStylehere}>
                {
                    users.map(user => <Users key={user.id} user={user}></Users>)
                }
            </div>
        </div>
    );
};

export default User;