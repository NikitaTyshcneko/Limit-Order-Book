export { Transaction };

function Transaction({ data }) {
    const renderer = ([key, value]) => <div className={key} key={key}>{value}</div>;
    const summary = Object.entries(data).map(renderer);

    return (
        <div className="transaction">
            {summary}
        </div>
    );
}