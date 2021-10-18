import ButtonPanel from '../button-panel';

const Layout = props => {
    const { data } = props;
    return < div className="button-panel-row">
        {data.map((cols, i) => {
            return (
                <div className="button-panel-column" key={i} id={i}>
                    {cols.map((row, j) => <ButtonPanel {...row}  key={`button-panel-${j}`} id={`button-panel-${j}`}/>)}
                </div>
            )
        })}
    </div>
}
export default Layout;