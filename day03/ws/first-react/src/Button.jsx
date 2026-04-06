const handleEvent = (name, which, e) => {
    console.log(name, which);
    console.log(e.clientX, e.clientY);
    console.log(e.shiftKey);
}

const Button = ({name}) => (
    <button 
    onMouseEnter={
        (e) => handleEvent(name, 'MouseEnter', e)
    }
    onMouseLeave={
        (e) => handleEvent(name, 'MouseLeave', e)
    }
    onDoubleClick={
        (e) => handleEvent(name, 'DoubleClick', e)
    }
    onContextMenu={
        (e) => handleEvent(name, 'onContextMenu', e)
    }
    >
        {name}
    </button>
)

export default Button