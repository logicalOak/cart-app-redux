
/**
 * Format a number as a price
 * @param number - The number to format.
 */
export const formatPrice = (number) =>
    Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(number / 100)

export const createCopy = (items) => JSON.parse(JSON.stringify(items))
export const sumByKey = (object, key) =>object.reduce((acc, cur) => cur[key] + acc, 0)