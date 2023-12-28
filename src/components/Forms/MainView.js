import Card from '../UI/Card';
import classes from './MainView.module.css';
import { Link } from 'react-router-dom';
import { Fragment, useState } from 'react';

const MainView = () => {
  const [checked, setChecked] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  return (
    <Fragment>
      <Card>
       
          <div className={classes.nav}>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMUAAAEACAMAAAA0tEJxAAAAhFBMVEX///8AAABFRUXd3d38/Pz19fXq6urt7e3x8fEjIyPS0tL5+flOTk7Z2dnV1dXz8/OVlZV/f3+hoaEZGRm2trZiYmK+vr5SUlKPj4/l5eVYWFitra1JSUl5eXmJiYkyMjI6Ojpra2sNDQ2fn58gICDIyMheXl4pKSk1NTVBQUEWFhZoaGh+mEW1AAAFo0lEQVR4nO2di1riMBCFLVJEEC/ggmtloequl33/91uLrOxFyDk0kxz95n+ANgfSZuZkJj04cBzHcRzHcRzHcRzHcRzHcRzHcRzH+ZAcTqvz+ua42HD7eH0xrgZnuUcGMqjqSbGDp6vLXu4x7mY0vtklYMN82s091i0MvmEK1pxc6gnp391SGlbUp7mH/RejL7yEFYtp7qG/MejsqaFhoqFjBD7Q2/+PQW4JB2XdUkNDPcwrooqgoSHntOqfRBLxsoBkEzGNpuGFh0wL+kVMES/keMiH8WbTby6Ti+g/RBdRFOPEInrPBiJSy+jvjL1bUCUUMbSYTq8kXDhmZiKKYpRKBJdHkEwS5bRRF7v/uU4i4shWRFGcp1Dxw1pFkSADvDQXUSzNE/LyODyK1txZq7hKIKIojOPbXhIR1tlG7Gh8G4eWIti/YjKbX70wn7FmVW2pgnkqOtVfwcRpRXklX+1ElPfwKM7fCSTKO1zFNzsV8Fqxdfkdo1dYlGYqrrERdI62X6JEE93vViK+YvcPTAbw2TJ7vs+h2wezTsyJu9/xh7ahC00GIHrAHg6jKQVNKGgi1MiVLmxUIO/JYywcRcyHExsVyE4LOA2+A5e6NVn4+sCdv6AXQ/wHk2RpANwYNjCQP8PEYgPe80TiDzhaJuH5z/B9CbsYeFX8MBBxBqSqxMbWYfhqTwb7ZEBqQQUN4csdG6zegJdGWcXABDV41QIPN/XbAUGZgYp58KZLah4DMWH85HsYri/g3ozAihFfRT+c/3P+KhBbxlcBeMzcBspZDhVA/MEZet0cKoCHsa+vojydVuOL6x3hD+laZFGx4ajRM/9fz4zz64FYwNBZ+4NGz918tg6w4NzilfCD9py6MqQ3mFZkth926B7tjLVohCOQWe4hAtRBFT9zDxEgHAsYGs6xAF5RKWtC9gTwB033k+IQtt+Tv2h5gFjQyBuMCTCh8lV1wgCGikbl9i4QazBNFNUGYCdE/7FALN+r3IMMgnQ6JKu82xek2O1Jr93nHwAR+hMKqohRDz9GiIg0JZD704XKc9SXPKgKY5G5xScEVj+RuvifBKsovucMutScQiLS1AXvDVjUM5H+K4DUaIV5OW0bhmC93oO0m/YI/hXS3scSFNHJPdBdwH3H+XtztwM3ASmbBmD1Z1E8C79lYREZ+idh8PYZcisnJbiIW6Py0wgQjUy684loUdR9PxEiHmRzI6YLXOuMkz9gOkdkEzw0dmowbeJpwZARsRA1A0uqC1x0/4vrxxeNZLmmONHMCDQK1oiaHpAZ+4ZRw0hbkM2iDaKBB7L5uEE0Guca2UVNfrg/coVoFRTW1ScugmvGF93VJk9OzD3c9+F68W9yD/d9OBGib6dwj8anEyG62HEiRFM7ToRo7MSJEK2V5USI5hPcK1Y0s+NEiBZ5cGGHqFHARbGilU/EuTGFrO9EHbT7LHq2PHVun2rdE2UULHOPdguU7ySaThz0mDO6RCNxzhWXbZZizpQXDWLBQ3vWiAaxnGcjGsRyq53sxiOzUIhG4tw7VlZEl9g+1S3uIBJUXRGEuS87ndBC6wbdCl/ivGDZxY5Zs0VdzAZ8uVvmHup2iP144apSvPhM1LJpwOeTbATIFKmo5qcNNaxC1HhqwCNZ2WCcCQJF94BX4I/24qbTloVRtz1xEngMjHxpzlcWVXG2x0cZ9VRw+xSiKkqrTz0lVcFVb4mqoOqtZVVwJY2qKuy/MJRABVesrKoizcd5jFUMF59BBVdzraoi1SeGTFUk+fCWuYocEyq+CtPPG6ZSAZyg/QFUmH/fMImKWB+4zqsix3s2uor0QbmFCuSTMPoq0qcWFipS2wY2KrjCZVEVeda82CrQc5+0VeRZuWOryBLQRleR3E5bI38squM4juM4juM4juM4juM4juM4juM4jpOZX42BV5S1h9NFAAAAAElFTkSuQmCC"
              alt="secondeYear"
            />
             <Link to="/SecondeYear">
            <button>اختر مواد السنة الثانية</button>
            </Link>
          </div>
        

        
          <div className={classes.nav}>
            <img
              src="data:image/png;base64,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"
              alt="ThirdYear"
            />
            <Link to="/ThirdYear">
            <button>اختر مواد السنة الثالثة</button>
            </Link>
          </div>
        

        
          <div className={classes.nav}>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMUAAAEACAMAAAA0tEJxAAAAZlBMVEX///8AAADW1tb6+vpYWFgnJyePj4+Kiorc3NwyMjIgICDo6Oj19fXX19c1NTXQ0NCVlZXi4uJra2vFxcVhYWGnp6dFRUUrKytQUFCgoKC6uro/Pz8RERF/f392dnaysrIXFxdoaGgbi4+rAAADYElEQVR4nO3c21LbQBCEYQXFkhEG44SEnCHv/5K5Ivik7ZGtKvVs/X29wvtVDYJqr9Q0hBBCCCGEEEIIIYQQQgghhBBSW56G1WiG9dK7C+bLh1Jult5eLHdFRBbFzxoU38uIHAoxT0kUtzUoHhUig2InERkUqxoUvUb4K9YBhL/iVw2K3xGEu+ImhHBXxBDmij81KLZBhLciirBWfKpB8TmMMFa0cYSx4qkGxY8JCFvFZgrCVvGxBsXLJISpYto8uSq+1aAol7JJFLJES6H4WoNClbIpFNPnyVEhSv4cCl3KJlAEStkEClnyZ1BESll7xf1lCDPFcw2KWClrrgiXaM6KdqhBcfE8OSkmlGi+ijb0pZG7IlryWyuumScbxeaaebJRxEt+Y8WkUtZVoUo0OW4WClHyP8o/6g4KUcoO+vs9A4UqPXYpFKLk7wPftS6vEKXsa5NBoecpg0KU/F2TQSFK2aHJoFAl2jqFQpT8fZNBIUrZocmgUCcb3x6r8FaIkr97W2etEPO0+r/QWaFONr4/pmOsaB/KO+vflxorRMk/7C31VahSdv+xL1tFK0r+fn+xrUKUsquDxa4KVaIdPkZoqtiIJ0O6w+WmClHKro6WeyqmzZOpYiP6pf74AkuFKGWfTy5wVKhS9vQxZ0PF5rW8o+70EkPF3/KGTufJUaFOyp57bN5OcSda/DPzZKgQJf+5efJTXDJPdgpVyp6dJzuFKPlvRy7zUqiT1/cZFKqUHZknM4Uo+cfmyUtx+eswjBSqlB2dJyuFKPnH58lJoU5ej92frBTqpGxhnowUouQvzZOPortqGyYKVcoW58lF0YqT/A/ieg+FOslfuj/ZKK6cJw+FKvnVPHko1MlrvQUDhSplT/pMR4UqZfU8OSjUyevIBhZXqHmS9ycHhTp5HZmn5RXq5HXs4xdWqJI/cH9aXqFOXpf/H3dRqNerRD9cKtQ/YtdElbJd04aiFduzP2kexdQ3Scyd7SyKae9XmT/z/LagQIECBQoUKFCgQIECBQoUKFCgQIECRV7F9PfMzpt52ubZIve7W3qHkUjF0u+gCAWFT1D4BIVPUPgEhU9Q+ASFT1D4BIVPUPgEhU9Q+ASFT1D4BIVPUPgEBSGEEEIIIYQQQgghhBBCCCGEEHKcf87jOmckZW+bAAAAAElFTkSuQmCC"
              alt="FouthYear"
            />{' '}
            <Link to="/FourthYear">
            <button>اختر مواد السنة الرابعة</button>
            </Link>
          </div>
        
        
        
          <div className={classes.nav}>
            <img
              src="data:image/png;base64,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"
              alt="FifthYear"
            />
            <Link to="/FifthYear">
            <button>اختر مواد السنة الخامسة</button>
            </Link>
          </div>
        
          <section className={classes.Button}>
    <section >
          <h2>سوف أتأكد من المعلومات وعلى مسؤوليتي</h2>
          <input 
            type="checkbox"
            checked={checked}
            onChange={(e) => {
              setChecked(e.target.checked);
              setButtonDisabled(!e.target.checked);
            }}
          /> 
        </section>
    <button disabled={buttonDisabled} >
        <Link to="/TablePage">إنشاء الجدول</Link>
      </button>
    </section>
      </Card>
  
    
    </Fragment>
  );
};
export default MainView;
