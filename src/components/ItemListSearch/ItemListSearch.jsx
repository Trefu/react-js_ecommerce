export const ItemListSearch = ({ onSearch }) => {
    return (
        <div className="m-b_32">
            <input id="buscador" placeholder="Buscar productos..." type="text"></input>
            <button onClick={() => { onSearch(document.getElementById('buscador').value) }}>Buscar</button>
        </div>
    )
}