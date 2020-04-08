# SiedClient

Para instalar esta aplicação, é necessário ter instalado em sua máquina:

1. NodeJs - v10+
2. Angular v9+

Após fazer o clone deste repositório, execute o comando para instalar as dependências:

<code>npm install</code>

Após, é preciso ter o angular cli instalado. Para instalar, use:
<code>npm install -G @angular/cli</code>

Assim, ele ira instalar a ultima versão da aplicação de linha de comando.

Agora, esta aplicação roda com um proxy a ser executado em modo de desenvolvimento. Logo, ao invés de executar <code>ng serve</code>

execute: <code> npm start</code>

O servidor em Java precisa estar em execução para que esta aplicação funcione perfeitamente. Por padrão, a aplicação Java esta sendo executado na porta 9001.

## Build

Para Buildar a aplicação em modo de produção, e rodar em seu servidor Apache, nGinx ou outro compativel. Use:

<code>ng build --prod</code>

Lembre-se de mudar a rota no parametro URL do arquivo environmnet com o domínio pai. Por exemplo:

https://catolicamacae.com.br

## Problema de CROS ORIGIN
Para resolver facilmente esta segurança, é preciso fazer a configuração ou a nível de servidor, ou a nível de aplicação através do SpringBoot Application.
Ou, para facilitar, executar um software que gerencia containers para trabalhar com recursos de microserviços. Pois, a plataforma fora construída de forma a ser escalada num formato horizontal. Ou seja, multiplas aplicações com funcionalidades distintas.
