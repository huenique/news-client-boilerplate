export async function genericResults(
  title: string,
  result: unknown,
): Promise<{ title: string; result: unknown }> {
  return {
    title: title,
    result: result,
  }
}
