import {FormLogin} from "./FormLogin.jsx";

export function Main() {
    return (<>

        <main className="content">

            <h1 className="title">
                The best pizza.<br/><span className="text-yellow">Straight out of the oven, straight to you.</span>
            </h1>
            <p className="sub-title">👋 Welcome! Please start by telling us your name:</p>

            <FormLogin
                type={'text'}
                placeholder={'Your full name'}
                classForm={"login-form"}
            />

        </main>
    </>);
}
