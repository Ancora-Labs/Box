export function info(message, data = undefined) {
  if (data === undefined) {
    console.log(`[box] ${message}`);
    return;
  }
  console.log(`[box] ${message}`, data);
}

export function warn(message, data = undefined) {
  if (data === undefined) {
    console.warn(`[box][warn] ${message}`);
    return;
  }
  console.warn(`[box][warn] ${message}`, data);
}

export function error(message, data = undefined) {
  if (data === undefined) {
    console.error(`[box][error] ${message}`);
    return;
  }
  console.error(`[box][error] ${message}`, data);
}
