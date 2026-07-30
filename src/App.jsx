
import './App.css'
import { FormularioDeEvento } from '../componentes/Formulario'
import { Tema } from '../componentes/Tema'
import { Banner } from '../componentes/Banner'
import { CardEvento } from '../componentes/CardEvento'
import { useState } from "react"
function App() {

  const temas = [
    {
      id: 1,
      nome: "front-end"
    },
    {
      id: 2,
      nome: "beck-end"
    },
    {
      id: 3,
      nome: "devops"
    },
    {
      id: 4,
      nome: "inteligência artificial"
    },
    {
      id: 5,
      nome: "data science"
    },
    {
      id: 6,
      nome: "cloud"
    }
  ]

  const [eventos, setEventos] = useState([
    {
      capa: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
      tema: temas[0],
      data: new Date(),
      titulo: 'Mulheres no Front'
    }
  ]);

  function adicionarEvento(evento) {

    setEventos([...eventos, evento])
  }

  return (
    <main>
      <header>
        <img src="/Logo.png" alt='logo da tecboard' />
      </header>
      <Banner />
      <FormularioDeEvento temas={temas} aoSubmeter={adicionarEvento} />

      <section className='container'>

        {temas.map(function (tema) {

          if(!eventos.some(function(evento){

            return evento.tema.id== tema.id
          })){

            return null
          }

          return (
            <section key={tema.id}>
              <Tema tema={tema} />

              <div className='eventos'>
                {eventos.filter(function(evento){
                  return evento.tema.id == tema.id

                })
                .map(function (evento, index) {

                  return <CardEvento evento={evento} key={index} />

                })}
              </div>


            </section>

          )
        })}

      </section>


    </main>

  )
}










export default App
