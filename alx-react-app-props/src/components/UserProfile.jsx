import { useContext } from 'react';
import UserContext from '../UserContext';

function UserProfile() {
    const userData = useContext(UserContext);

    return (
        <div>
            <h2>{userData.name}</h2>
            <p>Age: Not Specified</p>
            <p>Email: {userData.email}</p>
        </div>
    );
}

const UserProfile = (props) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Bio: {props.bio}</p>
        </div>
    );
};

export default UserProfile;