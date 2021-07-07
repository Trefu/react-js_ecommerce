import './ItemCount.css';

export const ItemCount = ({ title, count, onAdd }) => {
    return (
        <div className="item-count">
            {title ? <h4>{title}</h4> : <></>}
            <div className="button-container">
                <button onClick={() => onAdd(count + 1)}>+</button>
                <p>{count}</p>
                <button onClick={() => onAdd(count - 1)}>-</button>
            </div>
        </div>
    )
}