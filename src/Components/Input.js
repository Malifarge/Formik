const Input = ({handleChange,type,name,value,placeholder,error, disabled}) =>{
    return(
    <fieldset>
        <div>
            <label>{name}</label>

            <input type={type} name={name} placeholder={placeholder} value={value} onChange={handleChange} disabled={disabled} style={error && {
                "border" : "2px solid red"
            }}/>
        </div>

        {error && <small>{error}</small> }
    </fieldset>
    )
}

export default Input