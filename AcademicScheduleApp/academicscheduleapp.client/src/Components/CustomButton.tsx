export function CustomButton({children, isSelected, onClick} : {children:string, isSelected:boolean, onClick?:()=>void}) {
    return (
        <>
            <button className='button' onClick={onClick} style={{backgroundColor: isSelected ? 'lightgray' : ''}}>{children}</button>
        </>
    )
}