
import React from 'react';
import FormInput from '../form-input/form-input.component';
import './sign-in.component.styles.scss'

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email:'',password:''})

    }

    handleChange = event=>{
        const {value,name} = event.target;
        this.setState({[name] : value})
    }

    render(){
        return(
            <div className='sign-in'> 
            <h2>Already have an account</h2>
            <span>Sign In with your email and password</span>
            <form onSubmit={this.handleSubmit}>
            <FormInput 
            name='email' 
            type='email' 
            value={this.state.email} required 
            handleChange={this.handleChange}
            label='Enter your Email'
            />
            <FormInput 
            name='password' 
            type='password' 
            value={this.state.password} required 
            handleChange={this.handleChange}
            label='Enter your Password'
            />
            
            <input type='submit' value='Login'></input>

            </form>
            </div>

        )
    }
}

export default SignIn;