import '../css/EditNameButton.css'
import {useState} from 'react'

function EditNameButton() {
    const [isEditing, setIsEditing] = useState(false)
    const toggleEdit = () => setIsEditing (prev => !prev)
    const handleCancel = (e) => {
        e.preventDefault();
        setIsEditing(false)
    }
    const handleSave = (e) => {
        e.preventDefault();
        /* Ajouter l'API */
        setIsEditing(false);
    }

    return( 
        <>
            <button
                className={`edit-button ${isEditing ? 'editing' : 'unediting'}`}
                onClick={toggleEdit}>
                Edit Name</button>
            <form class={`edit-name-form ${isEditing ? "visible" : "hidden"}`}>
                <div className="input-group">
                    <label for="username">User name</label>
                    <input type="text" id="username"/>
                </div>
                <div className="input-group">
                    <label for="firstname">First name</label> /* Utiliser le reducer user.info */
                    <input type="text" disabled id="firstname" placeholder="Tony"/>
                </div>
                <div className="input-group">
                    <label for="lastname">Last name</label> /* Utiliser le reducer user.info */
                    <input type="text" disabled id="lastname" placeholder="Stark"/>
                </div>
                <div className='button-container'>
                    <button
                        className="edit-button option"
                        onClick={handleSave}>Save</button>
                    <button 
                        className={`edit-button option ${isEditing ? "" : "closing"} `}
                        onClick={handleCancel}>Cancel</button>
                </div>
            </form>
        </>
    )
}

export default EditNameButton