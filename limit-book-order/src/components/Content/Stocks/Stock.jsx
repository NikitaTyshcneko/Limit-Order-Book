export function Stock({ data }) {
    const summary = Object.entries(data).map(([key, value]) => <div className={key} key={key}>{value}</div>);

    return (
        <div className="stock" key={data.id}>
            {summary}
        </div>
    );
}