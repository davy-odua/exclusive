function Title({name, header, left, right}){
    return(
        <>
        <div className="titles">
            <div className="intro">
                <div className="title-color"></div>
                <h3>{name}</h3>
            </div>
            <div className="title-text">
                <h1>{header}</h1>
                <div className="arrow">
                    <a>{left}</a>
                    <a>{right}</a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Title