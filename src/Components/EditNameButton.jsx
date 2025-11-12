import '../css/EditNameButton.css'
import {useState , useEffect} from 'react'
import {useDispatch , useSelector} from'react-redux'
import {userProfile} from '../Slices/userSlice'

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

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.info);
    const token = useSelector((state) => state.auth.token)

    useEffect(() => {
        if (token) {
            dispatch(userProfile(token))
        }
    }, [token, dispatch])

    return( 
        <>
            <button
                className={`edit-button ${isEditing ? 'editing' : 'unediting'}`}
                onClick={toggleEdit}>
                Edit Name</button>
            <form class={`edit-name-form ${isEditing ? "visible" : "hidden"}`}>
                <div className="input-group">
                    <label for="username">User name</label>
                    <input type="text" id="username" placeholder={user.userName}/>
                </div>
                <div className="input-group">
                    <label for="firstname">First name</label>
                    <input type="text" disabled id="firstname" value={user.firstName}/>
                </div>
                <div className="input-group">
                    <label for="lastname">Last name</label>
                    <input type="text" disabled id="lastname" value={user.lastName}/>
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