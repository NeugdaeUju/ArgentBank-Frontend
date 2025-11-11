// ...existing code...
import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import {faPencil} from '@fortawesome/free-solid-svg-icons'
import '../css/dropdown.css'

function Dropdown ({date, description, amount, balance}) {
    const  [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(prev => !prev);
    const [isEdit , setIsEdit] = useState (false);
    const toggleCategoryEdit = () => setIsEdit(prev =>!prev)

    return (
      <div className="dropdown">
        <div
          className={`dropdown__row ${isOpen ? "is-open" : ""}`}
          onClick={toggleDropdown}
          aria-expanded={isOpen}
        >
          <span className='dropdown__date'>{date}</span>
          <span className='dropdown__description'>{description}</span>
          <span className='dropdown__amount'>{amount}</span>
          <span className='dropdown__balance'>{balance}</span>
          <FontAwesomeIcon icon={faChevronDown} className="dropdown__chev"/>
        </div>

        <div className={`dropdown__content ${isOpen ? "visible" : "hidden"}`}>
            <div className='dropdown__content--transaction'>
                <p className="content-name">Transaction Type</p>
                <p className="content-value">Electronic</p>
            </div>
            <div className='dropdown__content--category'>
                <p className="content-name">Category</p>
                <div className="content-value">
                    <p>Food</p>
                    <FontAwesomeIcon icon={faPencil} 
                        onClick={toggleCategoryEdit}
                        className={`dropdown__edit ${isEdit ? "edit" : ""} faPencil`}
                       aria-expanded={isEdit} />
                    <div>
                        <select
                            className={`dropdown__content ${isEdit ? "visible" : "hidden"}`}>
                            <option>Food</option>
                            <option>Bill</option>
                            <option>Activities</option>
                            <option>Other</option>
                            <option>Education</option>
                        </select>
                    </div>
                </div>
                
            </div>
            <div className='dropdown__content--note'>
                <p className="content-name">Note</p>
                <div  className="content-value">
                    <p>lorem ispum</p>
                    <FontAwesomeIcon icon={faPencil} className="faPencil"/>
                </div>
            </div>
        </div>
      </div>
    )
}

export default Dropdown
// ...existing code...




/*import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import {faPencil} from '@fortawesome/free-solid-svg-icons'
import '../css/dropdown.css'

function Dropdown ({date, description, amount, balance}) {
    const  [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(prev => !prev);

    return <>
    <div className="dropdown">
        <div className={`dropdown__button ${isOpen ? "dropdown__text--open" : "dropdown__text--close"}`} onClick={toggleDropdown}>
            <p className='dropdown__date'>{date}</p>
            <p  className='dropdown__description'>{description}</p>
            <p className='dropdown__amount'>{amount}</p>
            <p  className='dropdown__balance'>{balance}</p>
           <FontAwesomeIcon icon={faChevronDown} />
        </div>
        <div className='dropdown__content'>
            <div className='dropdown__content--transaction'>
                <p>Transaction Type</p>
                <p>Electronic</p>
            </div>
            <div className='dropdown__content--category'>
                <p>Category</p>
                <p>Food</p>
                <FontAwesomeIcon icon={faPencil} />
            </div>
            <div className='dropdown__content--note'>
                <p>Note</p>
                <p>lorem ispum</p>
                <FontAwesomeIcon icon={faPencil} />
            </div>
        </div>
    </div>
    </>
}

export default Dropdown*:/

/*${page === "logement" ? "dropdown--logement" : ""}*/