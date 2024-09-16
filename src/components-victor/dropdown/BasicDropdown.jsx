import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import '../dropdown/BasicDropdown.css';


function BasicDropdown({ btnName, objectsArray, handleOnClick }) {
  return (
    <DropdownButton className='dropdown-button' id="dropdown-basic-button" title={btnName}>
      {objectsArray.map((object, index) => (
        <Dropdown.Item onClick={handleOnClick} href={object.href ? object.href : "#"} key={index} value={object.value ? object.value : null}>{object.item}</Dropdown.Item>
      ))}
    </DropdownButton>
  );
}

export default BasicDropdown;
