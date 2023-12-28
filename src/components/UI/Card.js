import classes from './Card.module.css';

const Card = props => {
  return <div>
      <header className={classes.header}>
      
      <h1> مولّد برنامج الفحص الخاص بكلية الطب البشري</h1>
      </header>
     <div className={classes.card}>
    {props.children}</div>
    </div>
};

export default Card;