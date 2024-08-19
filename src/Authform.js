import React, { useState } from 'react';

function Authform() {
    const [activeForm, setActiveForm] = useState('login');

    const handleButtonClick = (formType) => {
        setActiveForm(formType);
    };

    return (
        <div className="container">
            <div className="form-container">
                <div className="form-toggle">
                    <button 
                        className={activeForm === 'login' ? 'active' : ''}
                        onClick={() => handleButtonClick('login')}
                    >
                        Login
                    </button>

                    <button 
                        className={activeForm === 'signup' ? 'active' : ''}
                        onClick={() => handleButtonClick('signup')}
                    >
                        SignUp
                    </button>
                </div>
                {activeForm ==='login' ? (
                    <div className='form'>
                        <h2>login Form</h2>
                        <input type='mail' placeholder='Enter your Email'/>
                        <input type='password' placeholder='Enter your password'/>
                        <a href='#'> forget your password</a>
                        <button>Login</button>
                        <p>Don't have an account? <a href='#' onClick={()=> setActiveForm ('signup')}>Sign Up</a></p>
                    </div>
                ) : <>    
                <div className='form'>
                         <h2>SignUp Form</h2>
                        <input type='mail' placeholder='Enter your Email'/>
                        <input type='password' placeholder='Enter your password'/>
                        <button>SignUp</button>
                        </div>
                
                </>}
            </div>
        </div>
    );
}

export default Authform; 
