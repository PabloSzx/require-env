## Install

```shell
yarn add require-env
```

```shell
npm install require-env --save
```

## Usage

```typescript
import requireEnv from "require-env";

const { NODE_ENV, SSLKEY, SSLCERT, PORT } = requireEnv([
  "NODE_ENV",
  "SSLKEY",
  "SSLCERT",
  "PORT",
]);
```

Returns the environment variables specified, but if any of the environment variables don't exist, the process exits
