import {Form} from "../Form.jsx";

export function Header() {
    return (<>
        <header className="header">
            <a className="logo" href="/public">Pizza Day</a>

            <Form
                type={null}
                placeholder="Search for the order #"
                classForm={null}
            />

        </header>
    </>);
}
