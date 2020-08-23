import * as moment from 'moment';

const INITIAL_STATE={
    MessagePC:[
        {
        content:"Hello Orlando, I'm your PC friend",
        time:"moment()",
        showOptions:false
        },
        {
            content:"Can I help you?",
            time:"moment()",
            showOptions:false
        },
        {
            content:"I can teach you how to develop software using React JS",
            time:"moment()",
            showOptions:false
        },
        {
            content:"See you soon!:)",
            time:"moment()",
            showOptions:false
        }
    ],
    messages:[],
    messagescop:[],
    inputMessage:"",
  
}

export const chatReducer=(previousState=INITIAL_STATE,action)=>{
    switch(action.type){
        case "SEND":
            let timeNow=moment().format('LT');
            let newMessage=[...previousState.messages,
                {content:previousState.inputMessage,
                 time:timeNow,
                 showOptions:false}]
           return {
               ...previousState,
                messages:newMessage,
                messagescop:newMessage,
               inputMessage:""
           }
        case "DELETE":
            let mesList = [...previousState.messages]
            let resultsMes=mesList.filter((mes,i)=> i !== action.payload)
            return {
                ...previousState,
                messages:resultsMes
            }
        case "SET_INPUT_VALUE":
            let copiaState={...previousState.inputMessage}
            copiaState=action.payload
            return {...previousState,inputMessage:copiaState}
        case "SHOW_OPTIONS":
            const newMessages = previousState.messages.map((mes, index) => {
                if (index === action.payload) {
                  const newMessage = { ...mes };
                  newMessage.showOptions = !newMessage.showOptions;
                  return newMessage;
                }
                return mes;
              });
              console.log('Arreglo cambiado',newMessages)
            return{
                ...previousState,
                messages:newMessages
            }
        default:
            return previousState;
    }
}

 