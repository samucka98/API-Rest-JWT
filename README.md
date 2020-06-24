# API-Rest-JWT

## Atores

*Usuarios:* Sao os administradores do sistema, são eles que podem realizar login e cadastrar novos usuários

## Endpoints

| Method   | URI                 | Description  |
|----------|---------------------|--------------|
| *POST*   | `/access/login`     | Realiza o login e gera o token |
| *POST*   | `/admin/users`      | Faz o cadastro de um novo usuário requer um token |
| *GET*    | `/admin/users`      | Lista todos os usuários cadastrados, requer um token |
| *DELETE* | `/admin/users/:id`  | Deleta um usuário do banco de dados |