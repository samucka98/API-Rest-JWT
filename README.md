# API-Rest-JWT

## Nome da api: auth-jwt

> Resources
>  1. <strong>access::</strong> `Para acesso `
>  2. <strong>admin::</strong> `Para operações que requerem  autorização`

## URIs

| Method | URI                       | Description  |
|--------|---------------------------|--------------|
| *POST* | `auth-jwt/access/login`   | Realiza o login e gera o token |
| *POST* | `auth-jwt/admin/register` | Faz o cadastro de um novo usuário requer um token |
| *GET*  | `auth-jwt/admin/users`    | Lista todos os usuários cadastrados, requer um token |
| *GET*  | `auth-jwt/admin/user/:id` | Lista um único usuário pelo id |
