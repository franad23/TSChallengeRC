import { isPrimeResult } from "./types"

export const getOnlyNumbersByDate = (date: string) => {
  return date.replace(/[^\d]/g, '')
} 

export const sumOfNumbers = (date: string) => {
  const numbers = getOnlyNumbersByDate(date)
  return numbers.split('').reduce((acc, curr) => Number(acc) + Number(curr), 0)
}

export const isPrime = (num: number): isPrimeResult | string => {
  if (num < 1) return "Para saber si es primo tiene que ser mayor a 0";
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return [num, false] ;
    }
  } 
  return [num, true];
}