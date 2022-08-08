import PropTypes from 'prop-types';

function Suggest({ children }) {
    return ( 
        <nav>{ children }</nav>
    );
}

export default Suggest;

Suggest.propTypes = {
    children: PropTypes.node.isRequired
}