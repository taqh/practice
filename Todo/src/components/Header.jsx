import { useEffect, useState } from "react";


function Header() {

    const [darkMode, setDarkMode] = useState(false);
    function toggleTheme () {
        setDarkMode(prevTheme => !prevTheme)
    }

    // check user theme preference
    useEffect(() => {
        
        const prefersDark = window.matchMedia(
            '(prefers-color-scheme: dark)'
        ).matches;
        if (prefersDark) {
            setDarkMode(true);
        }
    }, []);

    return (
        <header>
            <h1 className="title">Todo</h1>
            <label className="toggle" data-dark={darkMode} htmlFor="themeSwitch">
                <input id="themeSwitch" onChange={toggleTheme} type="checkbox" className="switch"/>
            </label>
        </header>
    )
}

export default Header