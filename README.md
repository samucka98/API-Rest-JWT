# API-Rest-JWT

## Atores

*Usuários:* São os administradores do sistema, são eles que conseguem realizar o login e dependendo de suas permissões gerenciar outros recursos do sistema como cadastrar novos usuários, clientes e etc.

![](/src/assets/user.png)

## Endpoints

> Ao realizar o login o sistema gerará um token
> Ao acessar `admin` é realizada a validação do token

| Method   | URI                 | Description  |
|----------|---------------------|--------------|
| *POST*   | `/access/login`     | Realiza login |
| *POST*   | `/admin/users`      | Faz o cadastro de um novo usuário. |
| *GET*    | `/admin/users`      | Lista todos os usuários cadastrados. |
| *DELETE* | `/admin/users/:id`  | Deleta um usuário do banco de dados |
| *PATCH*  | `/admin/users/:id`  | Atualização parcial |
| *PUT*    | `/admin/users/:id`  | Atualização de todos os campos |