export function PriceSum(id, packages) {
  let count = 0;
  packages.filter((packages) => packages.customerid === id).forEach((value) => { count += value.price })
  return count
}

export function WeightSum(id, packages) {
  let count = 0;
  packages.filter((packages) => packages.customerid === id).forEach((value) => { count += parseInt(value.weight.substring(0, value.weight.length - 2)) })
  return `${count}kg`
}