
const TextareaField = (props) => {
    const { handleChange, name, placeholder, value } = props;
    return (
      <div className="col-sm-12 col-md-12 col-lg-12">
        <textarea onChange={handleChange} name={name} rows="4" className="form-control" value={value} placeholder={placeholder}></textarea>
      </div>
    )
  }
  
  export default TextareaField
  