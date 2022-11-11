import style from './Button.module.css';


export const Button = props => {
    return <button className={style.Button}type="button"
    onClick={props.onClick}>LOAD MORE</button>
}