import * as moment from 'moment';

const INITIAL_STATE = {
    MessagePC: [
        {
            userId: 2,
            content: "Hello Orlando, I'm your PC friend",
            time: moment().format('LT'),
            showOptions: false
        },
        {
            userId: 2,
            content: "Can I help you?",
            time: moment().format('LT'),
            showOptions: false
        },
        {
            userId: 2,
            content: "I can teach you how to develop software using React JS",
            time: moment().format('LT'),
            showOptions: false
        },
        {
            userId: 2,
            content: "See you soon!:)",
            time: moment().format('LT'),
            showOptions: false
        }
    ],
    messages: [],
    messagescop: [],
    inputMessage: "",
    resPC: []
}

export const chatReducer = (previousState = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SEND":
            let timeNow = moment().format('LT');
            let arrayPC = previousState.MessagePC
            let newMessage = [...previousState.messages,
            {
                userId: 1,
                content: previousState.inputMessage,
                time: timeNow,
                showOptions: false
            }]
            //Response PC
            let msgePC = arrayPC[Math.floor(Math.random() * arrayPC.length)]
            let newMessagePC = [...previousState.resPC, msgePC]
            let finalArray=[...newMessage, ...newMessagePC]
            return {
                ...previousState,
                messages: finalArray,
                messagescop: newMessage,
                inputMessage: "",
            }
        case "DELETE":
            let mesList = [...previousState.messages]
            let resultsMes = mesList.filter((mes, i) => i !== action.payload)
            return {
                ...previousState,
                messages: resultsMes
            }
        case "SET_INPUT_VALUE":
            let copiaState = { ...previousState.inputMessage }
            copiaState = action.payload
            return { ...previousState, inputMessage: copiaState }
        case "SHOW_OPTIONS":
            const newMessages = previousState.messages.map((mes, index) => {
                if (index === action.payload) {
                    const newMessage = { ...mes };
                    newMessage.showOptions = !newMessage.showOptions;
                    return newMessage;
                }
                return mes;
            });
            console.log('Arreglo cambiado', newMessages)
            return {
                ...previousState,
                messages: newMessages
            }
        default:
            return previousState;
    }
}

