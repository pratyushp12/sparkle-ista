import React from 'react';
import SignIn from '../../components/sign-in/sign-in.componenet';
import SignUp from '../../components/sign-up/sign-up.component';
import './signIn-and-signUp.styles.scss'

export const SignInSignOut = ()=>{
    return(
        <div className='sign-in-and-sign-up'>
            <SignIn />
            <SignUp />
        </div>
    )
}