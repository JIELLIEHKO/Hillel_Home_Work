
// eslint-disable-next-line react/prop-types
export function Button({children, onClick, isActive}) {

    return ( <>
        <button
            className={isActive ? 'button active' : 'button'}
            onClick={onClick}
        >
            {children}
        </button>
    </>);
}
