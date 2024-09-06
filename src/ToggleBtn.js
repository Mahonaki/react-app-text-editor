export function ToggleButton() {
    return (
        <>
            <div className="toggle-wrapper">
                <p>Enable settings</p>
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                </label>
            </div>
        </>
    )
}