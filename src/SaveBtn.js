export function SaveBtn() {
    window.onload = function saveTextFile() {
        const txt = document.getElementById('input');
        // console.log(txt)
        document.getElementById('save-btn').onclick = function(code) {
            this.href = 'data:text/plain;charset=utf-11,' + encodeURIComponent(txt.value);
        };
    };

    return (
        <a id="save-btn" className="button" download="code.txt">Save</a>
    )
}