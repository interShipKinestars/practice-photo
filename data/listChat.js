import { Images } from "../config/image.config"

const ListChat = [
  {
    members:[
      {
        id: 1,
        avatar: Images.avatar1,
        name: 'Ridhwan Nordin',
      },
      {
        id: 2,
        avatar: Images.avatar3,
        name: 'Jon Tyson',
      }
    ],
    messages:[
      {
        from:2, 
        to:1, 
        text:"Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!"
      },
      {
        from:1,
        to:2, 
        text:"A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images."
      },
      {
        from:2, 
        to:1, 
        text:"Thank you! That was very helpful!"
      },
    ]
  },
  
  {
    members:[
      {
        id: 1,
        avatar: Images.avatar1,
        name: 'Ridhwan Nordin',
      },
      {
        id: 2,
        avatar: Images.avatar4,
        name: 'Simon Zhu',
      }
    ],
    messages:[
      {
        from:2, 
        to:1, 
        text:"Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!"
      },
      {
        from:1,
        to:2, 
        text:"A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images."
      },
      {
        from:2, 
        to:1, 
        text:"I know... I’m trying to get the funds."
      },
    ]
  },
  {
    members:[
      {
        id: 1,
        avatar: Images.avatar1,
        name: 'Ridhwan Nordin',
      },
      {
        id: 2,
        avatar: Images.avatar2,
        name: 'Clem Onojeghuo',
      }
    ],
    messages:[
      {
        from:2, 
        to:1, 
        text:"Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!"
      },
      {
        from:1,
        to:2, 
        text:"A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images."
      },
      {
        from:2, 
        to:1, 
        text:"I’m looking for tips around capturing the milky way. I have a 6D with a 24-100mm..."
      },
    ]
  },
  {
    members:[
      {
        id: 1,
        avatar: Images.avatar1,
        name: 'Ridhwan Nordin',
      },
      {
        id: 2,
        avatar: Images.avatar5,
        name: 'Rev Shawn',
      }
    ],
    messages:[
      {
        from:2, 
        to:1, 
        text:"Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!"
      },
      {
        from:1,
        to:2, 
        text:"A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images."
      },
      {
        from:2, 
        to:1, 
        text:"Wanted to ask if you’re available for a portrait shoot next week."
      },
    ]
  },
]

export{ListChat}