import "colors";

export function requireEnv<T extends string[]>(
  ...envVariablesArray: T
): Record<T[number], string> {
  const envVariables: Record<T[number], string> = {} as Record<
    T[number],
    string
  >;

  const missingVariables: string[] = [];
  for (const name of envVariablesArray) {
    const value = process.env[name];
    if (!value) {
      missingVariables.push(name);
      continue;
    }

    Object.defineProperty(envVariables, name, {
      value,
    });
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
