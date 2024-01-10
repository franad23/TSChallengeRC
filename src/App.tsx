import { FormEvent, useState } from 'react'
import './App.css'
import { sumOfNumbers, isPrime } from './helpers'
import { isPrimeResult } from './types';

function App() {
  const [primeResult, setPrimeResult] = useState<isPrimeResult | string>();
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmitDate = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const date =(e.currentTarget.elements[0] as HTMLInputElement).value

    const sum = sumOfNumbers(date);
    const isPrimeOrNot: isPrimeResult | string = isPrime(sum);
    setTimeout(() => {
      setPrimeResult(isPrimeOrNot);
      setLoading(false);
    }, 2000);
  }

  return (
    <>
      <h1>2024: Un Año de Códigos</h1>
      <div className="card">
        <form className='dateInputContainer' onSubmit={handleSubmitDate}>
          <label>Ingresa una fecha:</label>
          <input type="date" className='inputDate' required/>
          <button type="submit">Calcular</button>
        </form>
      </div>
      <p className="read-the-docs">
      {primeResult !== undefined && !loading ? (
          `El resultado de la suma es ${primeResult[0]}, tupla: ${JSON.stringify(primeResult)} y es ${
            primeResult[1] ? "primo" : "no primo"
          }`
        ) : (
          loading && 'Calculando...'
        )}
      </p>
    </>
  )
}

export default App
