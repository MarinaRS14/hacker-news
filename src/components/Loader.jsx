import { PropagateLoader } from 'react-spinners';

const override = {
  display: 'block',
  margin: '0 auto',
  padding: '100px',
  borderColor: '#ff7f50',
};

function Loader() {
  return <PropagateLoader color="#ff7f50" size={20} cssOverride={override} />;
}

export default Loader;
