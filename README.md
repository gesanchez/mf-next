# NextJS Microfrontend con Federacion de modulos

## Configurando .npmrc
Es necesario configurar el archivo .npmrc para poder descargar ciertos modulos, para ello agregar la siguiente linea

@module-federation:registry=https://r.privjs.com/:_authToken=1ac11445-6945-4413-b14b-0ec5b5c696c4

## Instalacion de dependencias
1. En la raiz del proyecto ejecutar el siguiente comando
```sh
yarn install
```

2. Instalar las dependencias en cada una de los microfrontend para ellos ingresaremos a la carpeta *home*; abrimos el _package.json_, removemos la linea `nextjs-shared": "*"` y ejecutamos el siguiente comando
```sh
yarn install
```
Despues de que la instalacion halla sido exitosa, agregar la linea removida al package.json

3. Ingresar a la carpeta *checkout*; abrimos el _package.json_, removemos la linea `nextjs-shared": "*"` y ejecutamos el siguiente comando
```sh
yarn install
```
Despues de que la instalacion halla sido exitosa, agregar la linea removida al package.json

## Correr en modo local
1. En la raiz del proyecto ejecutar el siguiente comando
```sh
yarn run start
```

Luego abrir la siguiente direccion en el browser http://localhost:3001 (Shell) o http://localhost:3000 (Checkout)

