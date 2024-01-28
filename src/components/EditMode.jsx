
const EditMode = ({todo, setIsEditMode, handleEdit} ) => {


  return (
    <form onSubmit={handleEdit} className="d-flex justify-content-between w-100 gap-3">
    <select defaultValue={todo.status} className="form-select shadow w-50">
        <option value={"default"}>Varsayılan</option>
        <option value={"important"}>Önemli</option>
        <option value={"daily"}>Günlük</option>
        <option value={"job"}>İş</option>
    </select>

    <input 
    /* defaultValue reacta ait bir özellik api den gelen veriyi bir kez ilgili alanda tutmaya yarar html deki gibi value deseydik içeriği değiştiremiyorduk, defaultValue ile değiştirebiliriz api den gelen veriyi */
    defaultValue={todo.title}
    className="form-control w-100 shadow" 
    type="text" />

    <div className="btn-group">
        <button 
        type="submit"
        className="btn btn-success btn-sm">Onayla</button>
        <button 
        type="button"
        onClick={() => setIsEditMode(false)}
        className="btn btn-secondary btn-sm">İptal</button>
    </div>
    </form>
  )
}

export default EditMode


