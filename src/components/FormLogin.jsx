import {Input} from "./Input.jsx";
import {Button} from "./Button.jsx";


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