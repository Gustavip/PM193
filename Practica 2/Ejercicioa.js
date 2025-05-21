const persona = {
    nombre: "Ivan Isay",
    edad :37,
    direccion:{
        ciudad: "QRO",
        pais: "MX"
    }
};

 const { nombre, edad, direccion: { ciudad, pais } } = persona;

console.log(nombre, edad, ciudad, pais );