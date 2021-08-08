export const BuyerForm = ({ formId }) => {
    return (
        <>
            <form id={formId} className="any-f bdr-g-l_3 bg-g-l_1 b-r_5 p_32 w_35p">
                <div className="i-c m-b_16">
                    <label htmlFor="name">Nombre</label>
                    <input name="name" type="text" />
                </div>

                <div className="i-c m-b_16">
                    <label htmlFor="phone">Telefono</label>
                    <input name="phone" type="number" />
                </div>

                <div className="i-c">
                    <label htmlFor="email">Email</label>
                    <input name="email" type="email" />
                </div>

                <div className="error-c">
                    <h4>Atención</h4>
                    <p>Mensaje de error</p>
                </div>
            </form>
        </>
    );
}