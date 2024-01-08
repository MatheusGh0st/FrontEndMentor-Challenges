import SwitchToDarkIcon from "../images/icon-moon.svg";
import SwitchToLightIcon from "../images/icon-sun.svg";

export default function Header({ themeLight, setThemeLight }) {
    const switchThemeIcon = themeLight ? SwitchToDarkIcon : SwitchToLightIcon;

    const changeTheme = () => {
        setThemeLight(!themeLight);
    }

    return (
        <header>
            <h1>TODO</h1>
            <button onClick={changeTheme}>
                <img src={switchThemeIcon} alt="Theme" />
            </button>
        </header>
    )
}