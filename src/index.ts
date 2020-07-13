import "colors";

export function requireEnv<T extends string[]>(
  ...envVariablesArray: T
): Record<T[number], string> {
  const envVariables: Record<T[number], string> = {} as Record<
    T[number],
    string
  >;

  const missingVariables: string[] = [];
  for (const v of envVariablesArray) {
    const envV = process.env[v];
    if (!envV) {
      missingVariables.push(v);
      continue;
    }
    envVariables[v] = envV;
  }

  if (missingVariables.length) {
    const error = Error(
      (
        "Environment variables missing: ".black +
        "[".black +
        ' "'.black +
        missingVariables.map((v) => v.red.underline.bold).join('", "'.black) +
        '" '.black +
        "]".black
      ).bgWhite
    );

    Error.captureStackTrace(error, requireEnv);

    throw error;
  }

  return envVariables;
}

export default requireEnv;
