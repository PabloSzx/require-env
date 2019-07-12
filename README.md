## Install

```shell
yarn add require-env-variable
```

or

```shell
npm install require-env-variable --save
```

## Usage

```typescript
import requireEnv from "require-env-variable";

const { NODE_ENV, SSLKEY, SSLCERT, PORT } = requireEnv([
  "NODE_ENV",
  "SSLKEY",
  "SSLCERT",
  "PORT",
]);
```

Returns the environment variables specified, but if any of the environment variables don't exist, the process exits
