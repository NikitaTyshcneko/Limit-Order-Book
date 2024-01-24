export { Order };

function Order({ data }) {
    const summary = Object.entries(data).map(([key, value]) => <div className={key} key={key}>{value}</div>);

    return (
        <div className="order">
            {summary}
        </div>
    );
}