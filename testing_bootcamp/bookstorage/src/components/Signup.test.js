import {render,screen,cleanup} from '@testing-library/react'
import {expect, jest, test} from '@jest/globals';
import Signup from "./Signup";

describe('Signup Page tests',()=>{//this is called suite and can contain multiple test cases
    afterEach(()=>{
        cleanup();
    })
    test('rendres the Signup page',()=>{
        render(<Signup />);
        

    
        
    });
    
 
   
})

