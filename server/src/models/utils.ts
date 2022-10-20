/**
 * Append a "$" to the name of each key in the provided object.
 * Values will not be changed.
 */
export const prepareParameters = (
  parameters: Record<string, string | number | boolean>
) =>
  Object.entries(parameters).reduce(
    (result, [key, value]) => ({
      ...result,
      [`$${key}`]: value,
    }),
    {}
  )
