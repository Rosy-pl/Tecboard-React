import "./Formulario.estilo.css"
import { TituloFormulario } from "../TituloFormulario"
import { CampoFormulario } from "../CampoFormulario"
import { Label } from "../Label"
import { Input } from "../Input"
import { BotaoCriarEvento } from "../BotaoCriarEvento"
import { ListaSuspensa } from "../ListaSuspensa"

  

export function FormularioDeEvento({temas, aoSubmeter}) {

  function subForm(formData){
  
    

    console.log("formulario enviado",formData);

    const evento={

      capa:formData.get("capa"),
      tema:temas.find(function(item){

        return item.id === Number(formData.get("tema")) 
      }),
      data:new Date(formData.get("data")),
      titulo:formData.get("nomeEvento"),
    }
    aoSubmeter(evento)
  }



  return (
    <form className='form-evento' action={subForm}>

      <TituloFormulario titulo="Preencha para criar um evento" />
      <div className="campos">
        <CampoFormulario>
          <Label htmlFor='nomeEvento'>
            Qual o nome do evento?
          </Label>
          <Input type='text' id='nomeEvento' placeholder='Summer dev hits'name="nomeEvento" />
        </CampoFormulario>
        <CampoFormulario>
          <Label htmlFor='capa'>
            Qual é o endereço da imagen da capa?
          </Label>
          <Input type='text' id='capa' name="capa" placeholder='http://...' />
        </CampoFormulario>
        <CampoFormulario>
          <Label htmlFor='data'>
            Data do evento
          </Label>
          <Input type='date' id='data'name="data" />
        </CampoFormulario>
        <CampoFormulario>
          <Label htmlFor='tema'>
           Tema do evento
          </Label>
          <ListaSuspensa id="tema" name="tema" itens={temas}/>
          
        </CampoFormulario>
        
      </div>
       <div className="acoes">        
        <BotaoCriarEvento>
          Criar evento
        </BotaoCriarEvento>
        </div>

      


    </form>

  )
}