const Input = ({handleChange,type,name,value,placeholder,error}) =>{
    return(
    <fieldset>
        <label>{name}</label>

        <input type={type} name={name} placeholder={placeholder} value={value} onChange={handleChange} />

        {error && <small>{error}</small> }
    </fieldset>
    )
}

export default Input