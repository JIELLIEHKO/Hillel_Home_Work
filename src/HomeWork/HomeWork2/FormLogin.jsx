import {Input} from "./Input.jsx";
import {Button2} from "./Button2.jsx";


// eslint-disable-next-line react/prop-types
export function FormLogin({classForm, type, placeholder}) {
    return (<>
        <form className={classForm}>
            <Input
                type={type}
                placeholder={placeholder}
            />
            <Button2></Button2>

        </form>
    </>);
}