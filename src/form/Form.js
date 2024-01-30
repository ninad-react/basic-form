import {useState} from 'react';
import "./style.css";

const Form = () => {
    const[name, setName] = useState('');
    const[isHover, setIsHover] = useState(false);
    const[isValid, setIsValid] = useState(true);

    const onMouseEnterHandler = () => {
        setIsHover(true);
    }

    const onMouseLeaveHander = () => {
        setIsHover(false);
    }

    const clr = isHover ? "red" : "black";

    const handleChange = (e) => {
        const value = e.target.value;
        setName(value);
        setIsValid(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value))
    };

    const handleClick = (valid) => {
        valid ? alert(`Your email id is : ${name}`) : alert("Invalid E-mail address");
    }

    const handleKeyPress = (e) => {
        setName(e.target.value);
    }


  return (
    <div className='form-container'>
        <h2>Login Page</h2>
        <form>
            <input 
                type='email' 
                placeholder='Enter your Email' 
                value={name}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                required 
            />
            <p>You have entered : {name}</p>
            <button type='submit' 
                onMouseEnter={onMouseEnterHandler} 
                onMouseLeave={onMouseLeaveHander} 
                style={{backgroundColor : clr}}
                onClick={() => {handleClick(isValid)}}
            >
                Submit
            </button>
        </form>
    </div>
  )
}

export default Form;