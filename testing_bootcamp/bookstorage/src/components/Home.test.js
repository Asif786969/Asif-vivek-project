import {render,screen,cleanup} from '@testing-library/react'
import {expect, jest, test} from '@jest/globals';
import Home from "./Home";

describe('Home page tests',()=>{//this is called suite and can contain multiple test cases
    afterEach(()=>{
        cleanup();
    })
    test('rendres the first image existence',()=>{
        
        
        const { getByAltText } = render(<Home />);

         const image = getByAltText("First slide");

         expect(image.src).toContain("https://thumbs.dreamstime.com/b/old-book-flying-letters-magic-light-background-bookshelf-library-ancient-books-as-symbol-knowledge-history-218640948.jpg"); 
    
        
    });
    test('rendres the second image existence',()=>{
        
        
        const { getByAltText } = render(<Home />);

         const image = getByAltText("Second slide");

         expect(image.src).toContain("https://thumbs.dreamstime.com/b/blurred-image-many-old-books-bookshelf-library-81867124.jpg");
          
        
    });

    test('rendres the third image existence',()=>{
        
        
        const { getByAltText } = render(<Home />);

         const image = getByAltText("Third slide");

         expect(image.src).toContain("https://thumbs.dreamstime.com/b/coffee-cup-reading-books-girl-having-break-fresh-studying-55084904.jpg");
        
    });

   
})

