'use strict';

const STORE = [
  //we need a counter to keep track of which page we are on
  //how do we move this counter forward when the 
  {
    index: 0, 
    button:'Start Quiz!', 
    buttonType: 'button',
    heading:'Are you ready to answer some questions about coding?', 
    content:''
},

  {
    index: 1, 
    name: 'acronymHTML',
    button:'Submit', 
    buttonType: 'submit',
    heading:'What does HTML stand for?', 
    content:[
      {
        index:0, 
        answer:'Hypertext Makeup Language',
        value: false
      },
      {
        index:1, 
        answer:'How To Make Lunch',
        value: false
      },
      {
        index:2, 
        answer:'Hypertext Markup Language',
        value: true
      },
      {
        index:3, 
        answer:'',
        value: false
      }
    ]
    
},


  {
    index: 2, 
    name: 'exampleProceedural',
    button:'Next', 
    buttonType: 'submit',
    heading:'What is an example of Proceedural programming?', 
    content: [
      {
        index:0, 
        answer:'fshdskhdf',
        value: false
      },
      {
        index:1, 
        answer:'',
        value:true 
      },
      {
        index:2, 
        answer:'',
        value: false
      },
      {
        index:3, 
        answer:'',
        value: false
      }
    ]
},
  {
    
    index: 3, 
    name: 'whatIsJQuery',
    button:'Next',
    buttonType: 'submit', 
    heading:'What is jQuery?', 
    content:[
      {
        index:0, 
        answer:'A JavaScript Framework',
        value: false
      },
      {
        index:1, 
        answer:'XXX',
        value: false
      },
      {
        index:2, 
        answer:'XXX',
        value: false
      },
      {
        index:3, 
        answer:'A Javascript Library',
        value: true
      }
    ]
  },
  {
    index: 4, 
    name: 'acronymOOP',
    button:'Next', 
    buttonType: 'submit',
    heading:'What is OOP?', 
    content: [
      {
        index:0, 
        answer:'',
        value: true
      },
      {
        index:1, 
        answer:'',
        value: false 
      },
      {
        index:2, 
        answer:'',
        value: false
      },
      {
        index:3, 
        answer:'',
        value: false
      }
    ]
  },
  {
    index: 5, 
    name: 'webLanguage',
    button:'Next',
    buttonType: 'submit', 
    heading:'What is the primary programming language used for web development?', 
    content:[
      {
        index:0, 
        answer:'',
        value: false
      },
      {
        index:1, 
        answer:'',
        value:true 
      },
      {
        index:2, 
        answer:'',
        value: false
      },
      {
        index:3, 
        answer:'',
        value: false
      }
    ]
  },
  {
    index: 6, 
    button:'Play Again?', 
    buttonType: 'button',
    heading:'Your Score is:', 
    content:'Hello'
    //this is where we should store the object that counts right
    //answers???
  }
]

//instead of having h1 and h2, we could just increase the size
//of h1, add a class of larger and alter in css.
//I think that would fix alignment issues
