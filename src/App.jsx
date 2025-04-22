import { useState } from 'react'
import Cabecera from './top'
import empleados from './utils/empleados.jsx'
import './App.css'
import Pie from './pie'

function Empleados() {
  return (
    <div className='contenedorEmpleados'>
      {empleados.map((empleado, index) => (
        <div key={index} className='empleado'>
          <p><strong>Nombre:</strong> {empleado.name}</p>
          <p><strong>Apellidos: </strong> {empleado.lastName}</p>
          <p><strong>Hobbies:</strong> {empleado.hobbies.join(', ')}</p>
          <p><strong>Edad:</strong> {empleado.age}</p>
        </div>
      ))}
    </div>
  )
}

function Calculadora() {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [resultado, setResultado] = useState('')

  const sumar = () => setResultado(parseFloat(num1 || 0) + parseFloat(num2 || 0))
  const restar = () => setResultado(parseFloat(num1 || 0) - parseFloat(num2 || 0))
  const multiplicar = () => setResultado(parseFloat(num1 || 0) * parseFloat(num2 || 0))
  const dividir = () => {
    if (parseFloat(num2) === 0) {
      setResultado('No se puede dividir por cero')
      return
    }
    setResultado(parseFloat(num1 || 0) / parseFloat(num2 || 0))
  }

  return (
    <div className='calculadora'>

      <h2>Calculadora</h2>

      <input type='number' value={num1} onChange={(num) => setNum1(num.target.value)} placeholder='Número 1' />
      <input type='number' value={num2} onChange={(num) => setNum2(num.target.value)} placeholder='Número 2' />

      <div className='botones'>

        <button onClick={sumar}>Sumar</button>
        <button onClick={restar}>Restar</button>
        <button onClick={multiplicar}>Multiplicar</button>
        <button onClick={dividir}>Dividir</button>

      </div>

      <h3>Resultado: {resultado}</h3>

    </div>
  )
}

function App() {
  return (
    <>
      <Cabecera />
      <Calculadora />
      <h2>Empleados</h2>
      <Empleados />
      <Pie />
    </>
  )
}

export default App
