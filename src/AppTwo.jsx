import useFetch from "./hooks/useFetch";

const AppTwo = () => {
    const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts?_limit=10");

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Fetched Data</h1>
            <ul>
                {data && data.map((item) => (
                    <li key={item.id}>
                        <p>
                            {item.title}
                        </p>
                        <p>
                            {item.body}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AppTwo;
