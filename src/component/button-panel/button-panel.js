import Button from '../button';
import Header from '../header';
const ButtonPanel = props => {
    const { label, ...buttonConfig } = props;
    return (<div className="button-panel" key={label}>
        <Header title={label} />
        <div className="content">
            <Button {...buttonConfig} />
        </div>
    </div>)
}
export default ButtonPanel;