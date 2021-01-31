## Install

```shell
yarn add require-env-variable
```

or

```shell
npm install require-env-variable
```

## Usage

```typescript
import { requireEnv } from "require-env-variable";

const { NODE_ENV, SSLKEY, SSLCERT, PORT } = requireEnv(
  "NODE_ENV",
  "SSLKEY",
  "SSLCERT",
  "PORT"
);
```

Returns the environment variables specified, but if any of the environment variables are not defined, the process exits (throws a catchable error).
