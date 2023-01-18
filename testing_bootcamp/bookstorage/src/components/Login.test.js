import {render,screen,cleanup} from '@testing-library/react'
import {expect, jest, test} from '@jest/globals';
import {userEvent} from '@testing-library/user-event'
import Login from "./Login";

describe('Login Page tests',()=>{//this is called suite and can contain multiple test cases
    afterEach(()=>{
        cleanup();
    })
    test('rendres the Login page',()=>{
        render(<Login />);
        const usernameFeild=screen.getByLabelText("Username");
        const passwordFeild=screen.getByLabelText("Password");
        const submitFeild=screen.getByTestId("submitbtn");

        expect(usernameFeild).toBeInTheDocument();
        expect(passwordFeild).toBeInTheDocument();
        expect(submitFeild).toBeInTheDocument();

    
        
    });
    
 
   
})

