### Microservice-timestamp
Microservice de apenas uma rota, ao acessar essa rotar passando uma data como parametro sua rota deve retornar um JSON no seguinte formato.
Caso não envie a data como parâmetro, retorna a data atual.

Exemplo de saida:
```JSON
{
    unix: 1451001600000
    utc: "Fri, 25 Dec 2015 00:00:00 GMT"
}
```
### Como instalar:
- Faça um clone do projeto no endereço: `git@github.com:FelipeBuso/microservice-timestamp.git`
- Entre no diretório criado;
- Digite `npm install` para instalar as dependencias;
- Digite `npm start` para iniciar o microservice

### Documentação:
Documentação disponível na rota `http://localhost:3000/api-docs/`
