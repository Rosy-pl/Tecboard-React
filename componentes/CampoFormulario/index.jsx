import"./campo-formulario.estilo.css"

export function CampoFormulario({children}){

  return(
    <fieldset className="campo-form"> 
        {children}
    </fieldset>
  )


}