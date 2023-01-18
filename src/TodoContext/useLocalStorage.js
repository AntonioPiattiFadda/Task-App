import React from "react";

function useLocalStorage (itemName, initialValue) { // Cambiamos los nombres de las variables para que puedan ser usadas con cualquier tipo de variable.
    // Creamos el estado inicial para nuestros errores y carga
    const [error, setError] = React.useState(false); //No entiendo como funciona con valores booleanos.
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue); 
  
  
  
    React.useEffect(()=>{
      // Simulamos un segundo de delay de carga 
      setTimeout(()=>{
        // Manejamos la tarea dentro de un try/catch por si ocurre algún error
        try{
          // Traemos nuestros TODOs almacenados
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
  
          if (!localStorageItem) {
            // Si el usuario es nuevo no existe un item en localStorage, por lo tanto guardamos uno con un array vacío
            localStorage.setItem(itemName, JSON.stringify(initialValue)); // Esto lo hacemos porque capaz nos manden un string y no un array para guardar.
            parsedItem = initialValue;
          } else {
            // Si existen Item en el localStorage los regresamos como nuestros Item
            parsedItem = JSON.parse(localStorageItem);
          }
          setItem(parsedItem);
        } catch (error) {
         // En caso de un error lo guardamos en el estado
          setError(error); // No lo entiendo aun
        }finally {
          // También podemos utilizar la última parte del try/cath (finally) para terminar la carga
          setLoading(false); 
        }
  
      }, 1000);
    });
   
   
   
  
  
  // Guardamos nuestros Item del localStorage en nuestro estado
  
  const saveItem = (newItem) => {
   try{
     // Convertimos a string nuestros Item
     const stringifiedItem = JSON.stringify(newItem);
     // Los guardamos en el localStorage
     localStorage.setItem(itemName, stringifiedItem);
     // Actualizamos nuestro estado
     setItem(newItem);
   } catch{
    setError(error);
   }
  };
    
  return { // Si tengo mas de 2 parametros lo tengo que mandar como un objeto
      item,
      saveItem,
      loading,
      error,
    };
  
  }

  export { useLocalStorage };