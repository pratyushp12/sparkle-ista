
import React from 'react';
import { auth, createUserProfileData, signInWithGoogle } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button.component';
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

    handleSubmit = async event => {
        event.preventDefault();
        const {email,password}=this.state;
        try{
        await auth.signInWithEmailAndPassword(email,password);
        this.setState({email:'',password:''})
        }catch(error){
            console.error(error);
        }
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
            <div className='buttons'>
            <CustomButton type='submit'> Sign In </CustomButton>
            <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
            </div>
            </form>
            </div>

        )
    }
}

export default SignIn;