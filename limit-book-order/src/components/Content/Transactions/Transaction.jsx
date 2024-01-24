export { Transaction };

function Transaction({ data }) {
    const summary = Object.entries(data).map(([key, value]) => <div className={key} key={key}>{value}</div>);

    return (
        <div className="transaction">
            {summary}
        </div>
    );
}