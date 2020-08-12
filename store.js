'use strict';

const STORE = [
  //we need a counter to keep track of which page we are on
  //how do we move this counter forward when the 
  {
    index: 0, 
    button:'Start Quiz!', 
    heading:'<h1>Are you ready to answer some questions about coding?</h1>', 
    content:''
},

  {
    index: 1, 
    name: 'acronymHTML',
    button:'Submit', 
    heading:'<h2>What does HTML stand for?</h2>', 
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
    heading:'<h2>What is an example of Proceedural programming?</h2>', 
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
    heading:'<h2>What is jQuery?</h2>', 
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
    heading:'<h2>What is OOP?</h2>', 
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
    heading:'<h2>What is the primary programming language used for web development?</h2>', 
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
    heading:'<h1>Your Score is </h1>', 
    content:'Hello'
  }
]

//instead of having h1 and h2, we could just increase the size
//of h1, add a class of larger and alter in css.
//I think that would fix alignment issues
