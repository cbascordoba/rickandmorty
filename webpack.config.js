// traer path de node para acceder donde nos estamos moviendo dentro del proyecto 
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// vamos a crear un modulo que vamos a exportar
module.exports = {
    entry: './src/index.js',
    // vamos a indicar el output donde va a ir nuestro proyecto ya compilado
    output:{
        path: path.resolve(__dirname,'dist'),
        // el compilado de nuestro js se va a llamar main.js
        filename: 'main.js'
    },
    resolve:{
        extensions:['.js'],

    },
    module:{
        rules:[
            {
                // rejects valores que queremos filtrar de una ruta, elementos o archivos.
                test:  /\.js?$/,
                // ahora vamos a excluir la carpeta node modules a lo que seria mi proyecto 
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                }
        }
    ]
    },
    plugins:[
        new HtmlWebpackPlugin(
            {
                inject: true,
                template: './public/index.html',
                filename: './index.html'
            }
        ),
    ]
}