const UserProfile = (props) => {
    return (
        <div style={{ border: '1px solid gray', borderRadius: '5px', padding: '10px', margin: '10px' }}>
            <h2 style={{ color: 'blue', marginBottom: '5px' }}>{props.name}</h2>
            <p>Age: <span style={{ fontWeight: 'bold', color: 'darkgreen' }}>{props.age}</span></p>
            <p>Bio: {props.bio}</p>
        </div>
    );
};

export default UserProfile;