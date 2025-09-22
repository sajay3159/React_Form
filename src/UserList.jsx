
const UserList = ({ items }) => {
    return (
        <ul style={{ listStyle: "none" }}>
            {items.map((user, index) => (
                <li key={index}>{user}</li>
            ))}
        </ul>
    );
};

export default UserList;
