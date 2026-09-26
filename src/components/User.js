const User = (props) => {
    return (
        <div className="user-container">
            <h2>User Profile</h2>
            <p>Name: {props.name}</p>
            <p>Email: {props.email}</p>
        </div>
    );
};

export default User;