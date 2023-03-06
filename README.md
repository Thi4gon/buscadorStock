# Guide Pt-br instruções

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 15.2.1.

## Em primeiro lugar

Execute `npm install` para instalar as dependências node_modules e package-lock.json.

## Servidor de desenvolvimento

Execute `npm run start` para um servidor de desenvolvimento. Navegue até `http://localhost:4200/`. O aplicativo será recarregado automaticamente se você alterar qualquer um dos arquivos de origem.

Ou execute `ng serve --proxy-config proxy.conf.json`, você precisa fazer isso por causa da configuração do proxy para habilitar CORS em angular.

![image](https://user-images.githubusercontent.com/12023179/223028027-a88b04c7-d1c6-4246-b3a6-3bf2e8db733d.png)



## Construir

Execute `ng build` para compilar o projeto. Os artefatos de compilação serão armazenados no diretório `dist/`.

## Executando testes de unidade

Execute `ng test` para executar os testes de unidade via [Karma](https://karma-runner.github.io).

## AWS amplify

https://projects.d3hx11gvitaalu.amplifyapp.com

Tomei a liberdade de subir em um servidor da AWS na amazon, para funcionar no ambiente da AWS vc vai precisar baixar a extenção no chrome chamada MOESIF CORS, e ativa-la quando for fazer a busca por esse link do AWS amplify. Isso se da por conta de que meu proxy so funcona no localHost ( ambiente de desenvolvimento ).

![image](https://user-images.githubusercontent.com/12023179/223026768-6a92c1bf-8cde-44c9-92d9-d017f3fed9ff.png)

## Informação adicional

Está API está retornando um array com os horarios (timestamps), como falado na explicação da task, (chart.result.timestamp) porém só vem os dados de um mesmo dia, minuto a minuto. 
Com isso eu cruzei esses dados com o valor de abertura (chart.result.indicators.quote.open) 


#----------------------------------------------------------------------------------------------------------------------------------------------------

# Guide English instructions

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.1.

## First of all

Run `npm install` to install node_modules dependencies and package-lock.json. 

## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

Or run `ng serve --proxy-config proxy.conf.json` you need to do this becouse of the proxy config to enable CORS in angular.

![image](https://user-images.githubusercontent.com/12023179/223028027-a88b04c7-d1c6-4246-b3a6-3bf2e8db733d.png)

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## AWS amplify

https://projects.d3hx11gvitaalu.amplifyapp.com

I have uploaded the project in AWS amplify, so to run it, you will need to download a chrome Extension called: MOESIF CORS, and enable it when enter in the page to make the stocks search. You need this extension becouse my proxy only runs on localHost ( developement environment )

![image](https://user-images.githubusercontent.com/12023179/223026768-6a92c1bf-8cde-44c9-92d9-d017f3fed9ff.png)

## aditional info

This API is returning an array with all timeStamps, as mentioned in the explanation of the task on (chart.result.timestamp) but it only comes with data from the same day, minute by minute.
With that, I crossed this data with the opening value (chart.result.indicators.quote.open)

