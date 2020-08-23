//Action creators
//Enviar mensaje
export const sendMessage = (e) => {
    e.preventDefault();
    return {
      type: "SEND",
    };
  };

//Borrar mensaje
export const deleteMessage = (index) => {
    return {
      type: "DELETE",
      payload: index
    };
  };

//Capturar el mensaje a enviar
export const setInputMessage = (e) => {
    return {
      type: "SET_INPUT_VALUE",
      payload: e.target.value
    };
  };

//Mostrar opciones del mensaje
export const optionsMessage = (index) => {
    return {
      type: "SHOW_OPTIONS",
      payload: index
    };
  };
