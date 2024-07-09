/*
Vamos a ver cómo funcionan los módulos a modo demostrativo.



Para ello vamos a empezar creando una nueva constante en nuestro fichero:
*/
// const person = {
// 	name: "Stephen",
// 	surname: "Strange"
// };

/**
Esta constante existe dentro de nuestro archivo modules.js, pero si queremos utilizarlo, por ejemplo, en main.js tendremos que exportarlo de su propio archivo.
Para realizar esta exportación le añadiremos la palabra reservada export a dicha constante:
 */
export const person = {
    name: "Stephen",
    surname: "Strange",
  };
  
  export const sayHello = () => {
    console.log("Hello!");
  };
  
  /**
   Hay otro método para exportar e importar información sin destructuring llamado export default, esto lo que hace es exportar por defecto una constante.
Esto lo que hará es, por un lado, permitirnos importar sin destructuring la información que exportemos de esta forma y, por otro lado, habilitar el renombrado de esta información en el fichero donde lo importemos.
   */
  const DEV_LAN = "JavaScript";
  
  export default DEV_LAN;