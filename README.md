# 🚀 WebFood - Desafio técnico 
> O desafio consiste em criar um CRUD com as tecnologias: [Ember JS](https://emberjs.com/), [Express JS](https://expressjs.com/pt-br/), [Postgres](https://www.postgresql.org/), [Bootstrap](https://getbootstrap.com/) ou [Tailwind CSS](https://tailwindcss.com/).


### Tecnologias utilizadas:
`Ember JS`, `Express JS`, `Postgres`, `Tailwind CSS`.

---

### Clone do projeto
```Bash
git clone git@github.com:DevViniciusAmaral/webfood.git
```

### 👨‍💻 Backend
Acesse a pasta `backend`:
```Bash
cd backend
```

Instale as dependências:
```Bash
yarn install
```

> Para o banco de dados `Postgres`, a aplicação se conecta com o usuário `postgres` e senha `admin`, o nome do banco criado para guardar as informações é `webfood`.

<br>

Inicie o servidor:
```Bash
yarn dev
```

Ao iniciar o servidor com sucesso, será logado no terminal uma mensagem semelhante a esta: `Server is running: http://localhost:3000`.

Para testar se está funcionando corretamente, vamos utilizar o [httpie](https://httpie.io/) para fazer uma requisição GET buscando a listagem de usuários cadastrados. Esperamos que ele retorne uma lista vazia inicialmente:

> Aqui utilizamos o `httpie`, mas fique a vontade para utilizar o `Insomnia`, `Postman` ou outro.

<br>

Abra o terminal e execute:
```Bash
http localhost:3000/user
```

Esperamos que a resposta se pareça com algo como:
```JSON
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 49
Content-Type: application/json; charset=utf-8
Date: Thu, 09 May 2024 10:43:47 GMT
ETag: W/"31-n+Cl2sda4IUgSkYUXGUWSdgeVuE"
Keep-Alive: timeout=5
X-Powered-By: Express

{
    "data": [],
    "message": "Users listed successfully"
}
```

Pronto! Está tudo funcionando corretamente. 😁👏

---

### 👨‍💻 Frontend
Acesse a pasta:
```Bash
cd frontend
```

Instale as dependências:
```Bash
yarn install
```

Execute o projeto:
```Bash
yarn start
```

Agora é só abrir o navegador com a url que foi disponibilizada. Será algo semelhante a:
`http://localhost:4200/`