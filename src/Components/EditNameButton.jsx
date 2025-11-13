import '../css/EditNameButton.css'
import {useState , useEffect} from 'react'
import {useDispatch , useSelector} from'react-redux'
import {userProfile} from '../Slices/userSlice'
import {updateUserName} from '../Slices/userSlice'

function EditNameButton() {
    const [isEditing, setIsEditing] = useState(false)
    const toggleEdit = () => setIsEditing (prev => !prev)
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.info);
    const token = useSelector((state) => state.auth.token)
    console.log("token =", token)
    console.log("user =", user)
    if(user) {
        console.log("user name =", user.userName)
    }

    const [userName, setUserName] = useState();

    useEffect(() => {
        if (token) {
            dispatch(userProfile(token))
        }
    }, [token, dispatch])

    useEffect (() => {
        if (user) {
            setUserName(user.userName);
        }
    }, [user])

    const handleCancel = (e) => {
        e.preventDefault();
        setIsEditing(false)
    }

    const handleSave = (e) => {
        e.preventDefault();
        setIsEditing(false);
        dispatch(updateUserName({token, userName}));
    }

    if(!user) {
        return <div>Chargement du profile...</div>
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
                    <input type="text" id="username" placeholder={user.userName} onChange={(e) => setUserName(e.target.value)}/>
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