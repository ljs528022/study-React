function Component({children})
{
    console.log(children)

    return (
        <>
            <div>Component Object</div>
            <div>{children}</div>
        </>
    )
}

export default Component