export default (envVariablesArray: string[]) => {
  const envVariables: { [envVariable: string]: string } = {};

  if (!Array.isArray(envVariablesArray)) {
    console.error("Array of environment variables required");
    return {};
  }
  const missingVariables = [];
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
