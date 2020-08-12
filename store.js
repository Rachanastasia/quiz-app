'use strict';

const STORE = [
  {
    index: 0, 
    button:'Start Quiz!', 
    heading:'<h1></h1>', 
    content:''
},

  {
    index: 1, 
    button:'Submit', 
    heading:'<h2>What does HTML stand for?</h2>', 
    content:[
      {
        index:0, 
        answer:'',
        value: false
      },
      {
        index:1, 
        answer:'',
        value:false 
      },
      {
        index:2, 
        answer:'',
        value: false
      },
      {
        index:3, 
        answer:'',
        value: true
      }
    ]
},

  {
    index: 2, 
    button:'Next', 
    heading:'<h2>What is an example of Proceedural programming?</h2>', 
    content: [
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
    index: 3, 
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
    heading:'', 
    content:''
  }
]