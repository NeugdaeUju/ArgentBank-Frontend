import '../css/EditNameButton.css'
import {useState} from 'react'

function EditNameButton() {
    const [isEditing, setIsEditing] = useState(false)
    const toggleEdit = () => setIsEditing (prev => !prev)

    return( 
        <>
            <button
                className={`edit-button ${isEditing ? 'editing' : ''}`}
                onClick={toggleEdit}>
                Edit Name</button>
            <form class="edit-name-form">
                <div className="input-group">
                    <label for="username">User name</label>
                    <input type="text" id="username"/>
                </div>
                <div className="input-group">
                    <label for="firstname">First name</label>
                    <input type="text" disabled id="firstname" placeholder="Tony"/>
                </div>
                <div className="input-group">
                    <label for="lastname">Last name</label>
                    <input type="text" disabled id="lastname" placeholder="Stark"/>
                </div>
                <div className='button-container'>
                    <button type="submit" className="edit-button option">Save</button>
                    <button className="edit-button option">Cancel</button>
                </div>
            </form>
        </>
    )
}

export default EditNameButton