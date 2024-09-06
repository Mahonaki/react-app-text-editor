import { useState, useEffect } from "react";
import { SettingsTab } from "./SettingsTab";


export const ToggleButton = ({ label, toggled, onClick }) => {
    const [isToggled, toggle] = useState(toggled);
    
    useEffect(() => { 
        callback()
    }, [])

    function callback() {
        toggle(!isToggled);
        onClick(!isToggled);
        checkToggleStatus();
    };

    function checkToggleStatus() {
        if (isToggled) {
            return <SettingsTab />;
        }
        else {
            return null;
        }
    }


    return (
        <>
        <div className="toggle-wrapper">
            <p className="toggle-title">{label}</p>
            <label className="switch">
                <input className="toggle-input" type="checkbox" defaultChecked={isToggled} onClick={callback} />
                <span className="slider"></span>
            </label>
        </div>
        </>
    );

};