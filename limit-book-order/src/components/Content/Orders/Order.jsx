import * as format from '../../../helpers/format.js';
export { Order };

function Order({ data }) {
    const renderer = ([key, value]) => <div className={key} key={key}>{format.formatRender(value, key)}</div>;
    const summary = Object.entries(data).map(renderer);

    return (
        <div className="order">
            {summary}
        </div>
    );
}