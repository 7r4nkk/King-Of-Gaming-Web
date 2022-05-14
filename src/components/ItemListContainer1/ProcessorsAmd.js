export const processorsAmd=[{
    id:'1',
    name: 'PROCESADOR AMD RYZEN 9',
    price: 14.99,
    image:'https://www.amd.com/system/files/styles/992px/private/2020-09/616656-amd-ryzen-9-5000-series-PIB-1260x709_0.png?itok=flFMuxbT',
    categoria: 'procesadores'
},
{
    id:'2',
    name: 'PROCESADOR AMD RYZEN 7',
    price: 9.99,
    image:'https://www.amd.com/system/files/styles/992px/private/2020-09/616656-amd-ryzen-7-5000-series-PIB-1260x709_0.png?itok=AeRSJIGY',
    categoria: 'procesadores'
},
{
    id:'3',
    name: 'PROCESADOR AMD RYZEN 5',
    price: 4.99,
    image:'https://www.amd.com/system/files/styles/992px/private/2020-09/616656-amd-ryzen-5-5000-series-PIB-fan-1260x709.png?itok=m1h1cfYf',
    categoria: 'procesadores'
},
{
    id:'4',
    name: 'PROCESADOR AMD RYZEN 3',
    price: 1.99,
    image:'https://www.amd.com/system/files/styles/992px/private/2020-04/450000-ryzen3-3rd-gen-pib-1260x709_0.png?itok=aakbKqGh',
    categoria: 'procesadores' 
},
]

const product={
    id:'1',
    name: 'RYZEN 9 5950X',
    subname: 'Procesador AMD',
    price: 14.99,
    image:'https://www.amd.com/system/files/styles/992px/private/2020-09/616656-amd-ryzen-9-5000-series-PIB-1260x709_0.png?itok=flFMuxbT',
    socket: 'AM4',
    cores: 16,
    hilos: 32,
    basefrecuencia: 3.4,
    maxfrecuencia: 4.9,
    tdp: 105,
    details:'Clave en el rendimiento de tu computador de escritorio, ya no tienes que pensar en cómo distribuir el tiempo y acciones porque ahora las tareas en simultáneo son posibles. AMD cuenta con un catálogo de productos que se adaptan a los requerimientos de todo tipo de usuarios: juegos en línea, edición a gran escala, contenido en múltiples plataformas y más.',
    categoria: 'procesadores'
}


export const traerProducto = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(product);
        }, 1000);
    });
};


