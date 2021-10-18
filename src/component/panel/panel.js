import Header from '../header';
import Layout from '../layout';

const Panel = (props) => {
    const { title, data } = props;
    return <div className="panel">
        <Header  title={title} props />
        <Layout data={data}></Layout>
    </div>
}


export default Panel;