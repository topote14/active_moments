This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Docs

### Hooks

- **useLogin** puede retornar:

    - **error**: estado de tipo { error: boolean, message: string } para la gestión de errores.

    - **loader**: devuelve un booleano, representa periodos de carga.
    
    - **formType**: estado que gestiona el tipo de formulario, devuelve un booleano.

    - **onSetFormTypeHandler**: manejador del estado formType, no recibe parametros.

    - **onRegisterHandler**: recibe 4 parametros de tipo string **(username, email, password, confirmPassword)**. Se encarga del registro del usuario.

    - **onAuthHandler**: recibe 2 parametros de tipo string **(username, password)**, username puede referenciar un nombre de usuario o un email. Se encarga de la autenticación del usuario.

```bash
# Ejemplos
const { onRegisterHandler, onAuthHandler } = useLogin()

onRegisterHandler("usuario1", "usuario1@gmail.com", "passwordUsuario1", "passwordUsuario1")

onAuthHandler("usuario1", "passwordUsuario1")
```

### Utilities

- **validateRegister**: recibe 4 parametros de tipo string **(username, email, password, confirmPassword)**. Valida todos los datos y devuelve un objeto de tipo:

```bash
{
    error: boolean,
    message: string
}
```

### Context

- **useUserContext** puede retornar:

    - **user**: estado del usuario.
    - **setUser**: manejador del estado **user**.

### Endpoints

- **/api/user**: devuelve el payload del token si es que existe.

## Getting Started

Requires the following environment variables:

```bash
TOKEN_SECRET=[JWT_SECRET_WORD]
API_HOST=[API_HOST]
API_PORT=[API_PORT]
NEXT_PUBLIC_API_URL=http://$API_HOST:$API_PORT

# Example
TOKEN_SECRET=k3DoL89SqkEpC
API_HOST=127.0.0.1
API_PORT=3001
NEXT_PUBLIC_API_URL=http://$API_HOST:$API_PORT
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
