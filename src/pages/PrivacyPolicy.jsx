const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-12 dark:text-white">Aviso de Privacidad</h1>
      
      <div className="prose dark:prose-invert">
        <p className="text-lg mb-6">
          Refugio Animal, con domicilio en Calle de los Animales #123, Col. Refugio, Ciudad, CP 12345, 
          es responsable del uso y protección de sus datos personales, y al respecto le informamos lo siguiente:
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">¿Para qué fines utilizaremos sus datos personales?</h2>
        <p className="mb-4">
          Los datos personales que recabamos de usted, los utilizaremos para las siguientes finalidades que son 
          necesarias para el servicio que solicita:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Procesar solicitudes de adopción</li>
          <li>Registrar donaciones y emitir recibos</li>
          <li>Mantener contacto con voluntarios</li>
          <li>Enviar información sobre eventos y campañas</li>
          <li>Dar seguimiento a casos específicos</li>
        </ul>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">¿Qué datos personales utilizaremos para estos fines?</h2>
        <p className="mb-6">
          Para llevar a cabo las finalidades descritas en el presente aviso de privacidad, utilizaremos los 
          siguientes datos personales:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Datos de identificación (nombre, dirección, teléfono, correo electrónico)</li>
          <li>Datos financieros (para procesar donaciones)</li>
          <li>Datos de contacto</li>
        </ul>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">¿Cómo puede acceder, rectificar o cancelar sus datos personales, u oponerse a su uso?</h2>
        <p className="mb-4">
          Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las 
          condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su 
          información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); 
          que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo 
          utilizada conforme a los principios, deberes y obligaciones previstas en la normativa (Cancelación); 
          así como oponerse al uso de sus datos personales para fines específicos (Oposición). Estos derechos 
          se conocen como derechos ARCO.
        </p>
        <p className="mb-6">
          Para el ejercicio de cualquiera de los derechos ARCO, usted deberá presentar la solicitud respectiva 
          a través de nuestro formulario de contacto o enviando un correo electrónico a 
          privacidad@refugioanimal.org.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">¿En qué momento puede revocar su consentimiento?</h2>
        <p className="mb-6">
          Usted puede revocar el consentimiento que, en su caso, nos haya otorgado para el tratamiento de sus 
          datos personales. Sin embargo, es importante que tenga en cuenta que no en todos los casos podremos 
          atender su solicitud o concluir el uso de forma inmediata, ya que es posible que por alguna obligación 
          legal requiramos seguir tratando sus datos personales.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">¿Cómo puede limitar el uso o divulgación de su información personal?</h2>
        <p className="mb-6">
          Usted puede limitar el uso o divulgación de sus datos personales enviando su solicitud a nuestro 
          formulario de contacto o al correo electrónico privacidad@refugioanimal.org. Los requisitos para 
          acreditar su identidad, así como el procedimiento para atender su solicitud, se le informarán al 
          recibir su petición.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Uso de cookies y tecnologías de seguimiento</h2>
        <p className="mb-6">
          Nuestro sitio web utiliza cookies y otras tecnologías de seguimiento para mejorar su experiencia de 
          usuario. Estas tecnologías nos ayudan a entender cómo interactúan los usuarios con nuestro sitio y 
          nos permiten mejorar nuestros servicios.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Cambios al aviso de privacidad</h2>
        <p className="mb-6">
          Nos reservamos el derecho de efectuar en cualquier momento modificaciones o actualizaciones al presente 
          aviso de privacidad, para la atención de novedades legislativas, políticas internas o nuevos 
          requerimientos para la prestación u ofrecimiento de nuestros servicios.
        </p>
        
        <p className="font-bold">
          Última actualización: 15 de junio de 2023
        </p>
      </div>
    </div>
  )
}

export default PrivacyPolicy