export default <T extends string[]>(...envVariablesArray: T): Record<T[number], string> => {
  const envVariables: Record<T[number], string> = {} as Record<T[number], string>;

  const missingVariables: string[] = [];
  for (const v of envVariablesArray) {
    if (!process.env[v]) {
      missingVariables.push(v);
      continue;
    }
    envVariables[v] = process.env[v];
  }

  if (missingVariables.length) {
    console.error("Environment variables needed:", missingVariables);
    throw new Error("Environment variables missing");
  }
  return envVariables;
};
