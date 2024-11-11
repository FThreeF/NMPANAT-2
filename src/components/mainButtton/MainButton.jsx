import s from './MainButton.module.scss';

const MainButton = ({ children, className, ...props }) => {
    return <button className={`${s.mainButton} ${className}`} {...props}>{children}</button>
}

export default MainButton;