import { Fragment } from 'react';
import classes from './MainHeader.module.css';

const MainHeader = () => {
 
  return (
    <Fragment>
    
      <footer className={classes.footer}>
        <h2>Powered by GLT </h2>
        <p>contact us <img src='https://www.freepnglogos.com/uploads/telegram-logo-17.png' alt='telegram' />  @ LaithTreiji </p>
        
      </footer>
    </Fragment>
  );
};
export default MainHeader;
