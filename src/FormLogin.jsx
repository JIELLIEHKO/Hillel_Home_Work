import {Input} from "./Input.jsx";
import {Button} from "./Button.jsx";

// eslint-disable-next-line react/prop-types
export function FormLogin({classForm, type, placeholder}) {

    return (<>
        <form className={classForm}>
            <Input
                type={type}
                placeholder={placeholder}
            />

            <Button
                isActive={null}
                onClick={null}
            >
                Login
            </Button>
        </form>
    </>);
}