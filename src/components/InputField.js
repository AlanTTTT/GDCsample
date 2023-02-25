
const InputField = (props) => {
    const { handleChange,  name, type, value, placeholder } = props;
    return (
      <div className="col-sm-12 col-md-4 col-lg-4">
        <input className="form-control" type={type} onChange={handleChange} value={value} placeholder={placeholder} name={name} required />
      </div>
    )
  }
  
  export default InputField