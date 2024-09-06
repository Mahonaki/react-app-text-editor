import { SaveBtn } from "./SaveBtn"
import { ToggleButton } from "./ToggleBtn"

export function InputField() {
    return (
        <>
            <section className="input-wrapper">
                <ToggleButton />
                <textarea type="text" id="input" name="input" placeholder="Text generator"></textarea>
                <input type="submit" id="generate-btn" className="button" name="generate" value="Generate"></input>
            </section>
            <SaveBtn />
        </>
    )
}