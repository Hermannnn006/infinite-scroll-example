import PropTypes from 'prop-types';
import Navbar from '../components/Navbar'

const DefaultLayout = ({ children }) => {


  return (
    <div className="flex flex-col h-screen">
      <Navbar />
        {children}
    </div>
  )
}

// PropTypes validation
DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DefaultLayout;
