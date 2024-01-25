export function Stock({ data }) {
    const renderer = ([key, value]) => <div className={key} key={key}>{value}</div>;
    const summary = Object.entries(data).map(renderer);

    return (
        <div className="stock" key={data.id}>
            {summary}
        </div>
    );
}