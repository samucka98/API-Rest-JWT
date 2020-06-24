# API-Rest-JWT

## Atores

*Usuários:* São os administradores do sistema, são eles que conseguem realizar o login e dependendo de suas permissões gerenciar outros recursos do sistema como cadastrar novos usuários, clientes e etc.

## Endpoints

> Ao realizar o login o sistema gerará um token
> Ao acessar `admin` é realizada a validação do token

| Method   | URI                           | Description  |
|----------|-------------------------------|--------------|
| *POST*   | `/dashboard/access/login`     | Realiza login |
| *POST*   | `/dashboard/admin/users`      | Faz o cadastro de um novo usuário. |
| *GET*    | `/dashboard/admin/users`      | Lista todos os usuários cadastrados. |
| *DELETE* | `/dashboard/admin/users/:id`  | Deleta um usuário do banco de dados |
| *PUT*    | `/dashboard/admin/users/:id`  | Atualização |