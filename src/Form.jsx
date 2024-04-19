import {Input} from "./Input.jsx";


// eslint-disable-next-line react/prop-types
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
