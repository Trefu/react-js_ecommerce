import { ItemCount } from "../../components/ItemCount/ItemCount"

export const ItemListContainer = ({ saludo }) => {
    return (
        <section className="basic-container m-t_32">
            <div> {saludo} </div>
            <br/>
            <ItemCount stock={5} initial={1}/>
        </section>
    )
}