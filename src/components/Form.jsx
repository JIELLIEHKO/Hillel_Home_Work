import {Input} from "./Input.jsx";

export function Form({classForm, type, placeholder}) {
    return (<>
        <form className={classForm}>
            <Input
                type={type}
                placeholder={placeholder}
            />

        </form>
    </>);
}
