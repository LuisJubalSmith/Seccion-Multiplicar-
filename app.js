const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

//destructuracion ej
const {
    crearArchivo,
    listarTabla
} = require('./multiplicar/multiplicar.js');

let comando = argv._[0];


switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        // console.log('Listar');
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`El archivo ${ archivo.red }`))
            .catch(e => console.log(e));
        // console.log('crear');
        break;
    default:
        console.log("Comando no reconosido");
}


// let base = '5';
// console.log(process.argv);
// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1]

// console.log(base);
// console.log('limite', argv.limite);
// console.log(argv2);

// console.log(multiplicar);
// let data = '';

// for (let i = 1; i <= 10; i++) {
//     data += `${base}*${i}=${base*i}\n`;
// }

// fs.writeFile(`tablas/tabla${base}.txt`, data, (err) => {

//     if (err) throw err;

//     console.log(`El archivo tabla${base}.txt ha sido creado`);

// });

// crearArchivo(base).then(archivo = console.log(`El archivo tabla${archivo}.txt ha si creado`)).catch(e => console.log(e));