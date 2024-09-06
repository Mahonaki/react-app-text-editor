import { useState } from "react";
import { SettingsTab } from "./SettingsTab";

export const ToggleButton = ({ label, toggled, onClick }) => {
    const [isToggled, toggle] = useState(toggled);

    function callback() {
        toggle(!isToggled);
        onClick(!isToggled);
    };

    if (isToggled) {
        return (
            <>
                <div className="toggle-wrapper">
                    <p className="toggle-title">{label}</p>
                    <label className="switch">
                        <input className="toggle-input" type="checkbox" defaultChecked={isToggled} onClick={callback} />
                        <span className="slider"></span>
                    </label>
                </div>
                <SettingsTab />
            </>
        )
    }
    else {
        return (
            <div className="toggle-wrapper">
                <p className="toggle-title">{label}</p>
                <label className="switch">
                    <input className="toggle-input" type="checkbox" defaultChecked={isToggled} onClick={callback} />
                    <span className="slider"></span>
                </label>
            </div>
        );
    }

};