import MainHeader from './MainHeader';
import'./Layout.module.css';
const { Fragment } = require('react');

const Layout = (props) => {
  return (
    <Fragment > 
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
