<script>
  // Respuestas basadas en palabras clave
  var responses = {
  &quot;hola&quot;: &quot;&#161;Hola! &#191;En qué puedo ayudarte?&quot;,
  &quot;hola &#191;qué tal?&quot;: &quot;&#161;Hola! &#191;En qué puedo ayudarte?&quot;,
  &quot;hola, &#191;qué tal?&quot;: &quot;&#161;Hola! &#191;En qué puedo ayudarte?&quot;,
  &quot;hola, qué tal?&quot;: &quot;&#161;Hola! &#191;En qué puedo ayudarte?&quot;,
  &quot;che&quot;: &quot;&#161;Hola! &#191;En qué puedo ayudarte?&quot;,
&quot;che!&quot;: &quot;&#161;Hola! &#191;En qué puedo ayudarte?&quot;,
&quot;&#161;che!&quot;: &quot;&#161;Hola! &#191;En qué puedo ayudarte?&quot;,
  &quot;pregunta&quot;: &quot;&#191;En qué puedo ayudarte?&quot;,
  &quot;prueba&quot;: &quot;&#161;Hola! El chat funciona correctamente. &#191;En qué puedo ayudarte?&quot;,
  &quot;probando&quot;: &quot;&#161;Hola! El chat funciona correctamente. &#191;En qué puedo ayudarte?&quot;,
  &quot;una pregunta&quot;: &quot;&#191;En qué puedo ayudarte?&quot;,
  &quot;una duda&quot;: &quot;&#191;En qué puedo ayudarte?&quot;,
  &quot;tengo una pregunta&quot;: &quot;&#191;En qué puedo ayudarte?&quot;,
  &quot;tengo una duda&quot;: &quot;&#191;En qué puedo ayudarte?&quot;,
  &quot;necesito información&quot;: &quot;&#191;Sobre qué tema?&quot;,
  &quot;necesito informacion&quot;: &quot;&#191;Sobre qué tema?&quot;,
  &quot;adiós&quot;: &quot;&#161;Hasta luego! &#161;Gracias por visitarnos!&quot;,
  &quot;adios&quot;: &quot;&#161;Hasta luego! &#161;Gracias por visitarnos!&quot;,
  &quot;&#191;cómo estás?&quot;: &quot;&#161;Estoy aquí para ayudarte! &#191;Tienes alguna pregunta?&quot;,
  &quot;default&quot;: &quot;Lo siento, no tengo una respuesta para esa pregunta.&quot;,
  &quot;buen día&quot;: &quot;&#161;Buen día! &#191;En qué puedo ayudarte?&quot;,
  &quot;buenos días&quot;: &quot;&#161;Buenos días! &#191;En qué puedo ayudarte?&quot;,
  &quot;buen dia&quot;: &quot;&#161;Buen día! &#191;En qué puedo ayudarte?&quot;,
  &quot;buenos dias&quot;: &quot;&#161;Buenos días! &#191;En qué puedo ayudarte?&quot;,
  &quot;buenas tardes&quot;: &quot;&#161;Buenas tardes! &#191;En qué puedo ayudarte?&quot;,
  &quot;buenas noches&quot;: &quot;&#161;Buenas noches!&quot;,
  &quot;hey&quot;: &quot;&#191;En qué puedo ayudarte?&quot;,
  &quot;nada&quot;: &quot;Ok.&quot;,
  &quot;chau&quot;: &quot;&#161;Chau, hasta luego! &#161;Gracias por visitarnos!&quot;,
  &quot;hasta luego&quot;: &quot;&#161;Hasta luego! &#161;Gracias por visitarnos!&quot;,
  &quot;hasta pronto&quot;: &quot;&#161;Hasta pronto! &#161;Gracias por visitarnos!&quot;,
  &quot;bye&quot;: &quot;Bye! Thanks for visiting us!&quot;,
  &quot;english&quot;: &quot;This is an automated chat in Spanish. If you need further assistance, send us an email at empalmelobosweb@gmail.com - Thanks!&quot;,
  &quot;do you speak english&quot;: &quot;No, this is an automated chat in Spanish. If you need further assistance, send us an email at empalmelobosweb@gmail.com - Thanks!&quot;,
  &quot;entiendes&quot;: &quot;Entiendo en base a palabras clave para orientarte, este es un chat automatizado.&quot;,
  &quot;me entiendes&quot;: &quot;Entiendo en base a palabras clave para orientarte, este es un chat automatizado.&quot;,
  &quot;&#191;entiendes?&quot;: &quot;Entiendo en base a palabras clave para orientarte, este es un chat automatizado.&quot;,
  &quot;entendés&quot;: &quot;Entiendo en base a palabras clave para orientarte, este es un chat automatizado.&quot;,
  &quot;me entendés&quot;: &quot;Entiendo en base a palabras clave para orientarte, este es un chat automatizado.&quot;,
  &quot;&#191;me entendés?&quot;: &quot;Entiendo en base a palabras clave para orientarte, este es un chat automatizado.&quot;,
   &quot;entendes&quot;: &quot;Entiendo en base a palabras clave para orientarte, este es un chat automatizado.&quot;,
  &quot;me entendes&quot;: &quot;Entiendo en base a palabras clave para orientarte, este es un chat automatizado.&quot;,
  &quot;&#191;me entendes?&quot;: &quot;Entiendo en base a palabras clave para orientarte, este es un chat automatizado.&quot;,
  &quot;podemos hablar&quot;: &quot;No. Solo entiendo en base a palabras clave para orientarte, este es un chat automatizado.&quot;,
  &quot;podemos conversar&quot;: &quot;No. Solo entiendo en base a palabras clave para orientarte, este es un chat automatizado.&quot;,
  &quot;podemos charlar&quot;: &quot;No. Solo entiendo en base a palabras clave para orientarte, este es un chat automatizado.&quot;,
  &quot;podemos hablar?&quot;: &quot;No. Solo entiendo en base a palabras clave para orientarte, este es un chat automatizado.&quot;,
  &quot;podemos conversar?&quot;: &quot;No. Solo entiendo en base a palabras clave para orientarte, este es un chat automatizado.&quot;,
  &quot;podemos charlar?&quot;: &quot;No. Solo entiendo en base a palabras clave para orientarte, este es un chat automatizado.&quot;,
  &quot;&#191;podemos hablar?&quot;: &quot;No. Solo entiendo en base a palabras clave para orientarte, este es un chat automatizado.&quot;,
  &quot;&#191;podemos conversar?&quot;: &quot;No. Solo entiendo en base a palabras clave para orientarte, este es un chat automatizado.&quot;,
  &quot;&#191;podemos charlar?&quot;: &quot;No. Solo entiendo en base a palabras clave para orientarte, este es un chat automatizado.&quot;,
  &quot;podés hablar&quot;: &quot;No. Solo entiendo en base a palabras clave para orientarte, este es un chat automatizado.&quot;,
  &quot;podés conversar&quot;: &quot;No. Solo entiendo en base a palabras clave para orientarte, este es un chat automatizado.&quot;,
  &quot;podés charlar&quot;: &quot;No. Solo entiendo en base a palabras clave para orientarte, este es un chat automatizado.&quot;,
  &quot;podés hablar?&quot;: &quot;No. Solo entiendo en base a palabras clave para orientarte, este es un chat automatizado.&quot;,
  &quot;podés conversar?&quot;: &quot;No. Solo entiendo en base a palabras clave para orientarte, este es un chat automatizado.&quot;,
  &quot;podés charlar?&quot;: &quot;No. Solo entiendo en base a palabras clave para orientarte, este es un chat automatizado.&quot;,
  &quot;&#191;podés hablar?&quot;: &quot;No. Solo entiendo en base a palabras clave para orientarte, este es un chat automatizado.&quot;,
  &quot;&#191;podés conversar?&quot;: &quot;No. Solo entiendo en base a palabras clave para orientarte, este es un chat automatizado.&quot;,
  &quot;&#191;puedes charlar?&quot;: &quot;No. Solo entiendo en base a palabras clave para orientarte, este es un chat automatizado.&quot;,
  &quot;puedes hablar&quot;: &quot;No. Solo entiendo en base a palabras clave para orientarte, este es un chat automatizado.&quot;,
  &quot;puedes conversar&quot;: &quot;No. Solo entiendo en base a palabras clave para orientarte, este es un chat automatizado.&quot;,
  &quot;puedes charlar&quot;: &quot;No. Solo entiendo en base a palabras clave para orientarte, este es un chat automatizado.&quot;,
  &quot;puedes hablar?&quot;: &quot;No. Solo entiendo en base a palabras clave para orientarte, este es un chat automatizado.&quot;,
  &quot;puedes conversar?&quot;: &quot;No. Solo entiendo en base a palabras clave para orientarte, este es un chat automatizado.&quot;,
  &quot;puedes charlar?&quot;: &quot;No. Solo entiendo en base a palabras clave para orientarte, este es un chat automatizado.&quot;,
  &quot;&#191;puedes hablar?&quot;: &quot;No. Solo entiendo en base a palabras clave para orientarte, este es un chat automatizado.&quot;,
  &quot;&#191;puedes conversar?&quot;: &quot;No. Solo entiendo en base a palabras clave para orientarte, este es un chat automatizado.&quot;,
  &quot;hacer&quot;: &quot;Visitá nuestro <a href='https://www.empalmelobos.com.ar/p/recorrido-autoguiado-por-empalme-lobos.html' target='_blank'>Mapa de Recorrido Autoguiado</a> y el <a href='https://www.empalmelobos.com.ar/p/calendario-de-actividades.html' target='_blank'>Calendario de Actividades</a> para más información.&quot;,
  &quot;hacer&quot;: &quot;Visitá nuestro mapa de <a href='https://www.empalmelobos.com.ar/p/recorrido-autoguiado-por-empalme-lobos.html' target='_blank'>Recorrido Autoguiado</a> y el <a href='https://www.empalmelobos.com.ar/p/calendario-de-actividades.html' target='_blank'>Calendario de Actividades</a> para más información.&quot;,
  &quot;qué se puede hacer&quot;: &quot;Visitá nuestro mapa de <a href='https://www.empalmelobos.com.ar/p/recorrido-autoguiado-por-empalme-lobos.html' target='_blank'>Recorrido Autoguiado</a> y el <a href='https://www.empalmelobos.com.ar/p/calendario-de-actividades.html' target='_blank'>Calendario de Actividades</a> para más información.&quot;,
&quot;que se puede hacer&quot;: &quot;Visitá nuestro mapa de <a href='https://www.empalmelobos.com.ar/p/recorrido-autoguiado-por-empalme-lobos.html' target='_blank'>Recorrido Autoguiado</a> y el <a href='https://www.empalmelobos.com.ar/p/calendario-de-actividades.html' target='_blank'>Calendario de Actividades</a> para más información.&quot;,
&quot;qué hacer&quot;: &quot;Visitá nuestro mapa de <a href='https://www.empalmelobos.com.ar/p/recorrido-autoguiado-por-empalme-lobos.html' target='_blank'>Recorrido Autoguiado</a> y el <a href='https://www.empalmelobos.com.ar/p/calendario-de-actividades.html' target='_blank'>Calendario de Actividades</a> para más información.&quot;,
&quot;que hacer&quot;: &quot;Visitá nuestro mapa de <a href='https://www.empalmelobos.com.ar/p/recorrido-autoguiado-por-empalme-lobos.html' target='_blank'>Recorrido Autoguiado</a> y el <a href='https://www.empalmelobos.com.ar/p/calendario-de-actividades.html' target='_blank'>Calendario de Actividades</a> para más información.&quot;,
  &quot;&#191;puedes charlar?&quot;: &quot;No. Solo entiendo en base a palabras clave para orientarte, este es un chat automatizado.&quot;
};

  
  var keywordResponses = {
&quot;gracias&quot;: &quot;&#161;De nada! Estoy aquí para ayudarte.&quot;,
&quot;gracias!&quot;: &quot;&#161;De nada! Estoy aquí para ayudarte.&quot;,
&quot;&#161;gracias!&quot;: &quot;&#161;De nada! Estoy aquí para ayudarte.&quot;,
&quot;thanks!&quot;: &quot;You&#39;re welcome!&quot;,
&quot;thanks&quot;: &quot;You&#39;re welcome!&quot;,
&quot;thank you&quot;: &quot;You&#39;re welcome!&quot;,
&quot;thank you very much&quot;: &quot;You&#39;re welcome!&quot;,
&quot;horario de trenes&quot;: &quot;En <a href='https://www.empalmelobos.com.ar/p/horarios-de-trenes.html' target='_blank'>esta página</a> encontrarás los horarios de trenes.&quot;,
&quot;horarios de trenes&quot;: &quot;En <a href='https://www.empalmelobos.com.ar/p/horarios-de-trenes.html' target='_blank'>esta página</a> encontrarás los horarios de trenes.&quot;,
&quot;horarios del tren&quot;: &quot;En <a href='https://www.empalmelobos.com.ar/p/horarios-de-trenes.html' target='_blank'>esta página</a> encontrarás los horarios de trenes.&quot;,
&quot;horario del tren&quot;: &quot;En <a href='https://www.empalmelobos.com.ar/p/horarios-de-trenes.html' target='_blank'>esta página</a> encontrarás los horarios de trenes.&quot;,
&quot;colectivo&quot;: &quot;Para información sobre horarios y recorridos de colectivos a Empalme Lobos, visitá <a href='https://www.empalmelobos.com.ar/p/horarios-de-colectivos.html' target='_blank'>esta página</a>.&quot;,
&quot;colectivos&quot;: &quot;Para información sobre horarios y recorridos de colectivos a Empalme Lobos, visitá <a href='https://www.empalmelobos.com.ar/p/horarios-de-colectivos.html' target='_blank'>esta página</a>.&quot;,
&quot;horario&quot;: &quot;Si necesitás los horarios de transporte público acá tenés los horarios de trenes (<a href='https://www.empalmelobos.com.ar/p/horarios-de-trenes.html' target='_blank'>click acá</a>) y los horarios de colectivos a Empalme Lobos (<a href='https://www.empalmelobos.com.ar/p/horarios-de-colectivos.html' target='_blank'>click acá</a>).&quot;,
&quot;horarios&quot;: &quot;Si necesitás los horarios de de transporte público acá tenés los horarios de trenes (<a href='https://www.empalmelobos.com.ar/p/horarios-de-trenes.html' target='_blank'>click acá</a>) y los horarios de colectivos a Empalme Lobos (<a href='https://www.empalmelobos.com.ar/p/horarios-de-colectivos.html' target='_blank'>click acá</a>).&quot;,
&quot;tren&quot;: &quot;Podrás encontrar información sobre los servicios de trenes en Empalme Lobos en <a href='https://www.empalmelobos.com.ar/p/horarios-de-trenes.html' target='_blank'>esta página</a>.&quot;,
&quot;trenes&quot;: &quot;Podrás encontrar información sobre los servicios de trenes en Empalme Lobos en <a href='https://www.empalmelobos.com.ar/p/horarios-de-trenes.html' target='_blank'>esta página</a>.&quot;,
&quot;ramales&quot;: &quot;En <a href='https://www.empalmelobos.com.ar/p/horarios-de-trenes.html' target='_blank'>esta página</a> encontrarás información sobre los ramales y horarios de trenes.&quot;,
&quot;remis&quot;: &quot;No podemos recomendarte ningún servicio.&quot;,
&quot;remises&quot;: &quot;No podemos recomendarte ningún servicio.&quot;,
&quot;remís&quot;: &quot;No podemos recomendarte ningún servicio.&quot;,
&quot;actividad&quot;: &quot;En el <a href='https://www.empalmelobos.com.ar/p/calendario-de-actividades.html' target='_blank'>Calendario de Actividades</a> podrás encontrar más información.&quot;,
&quot;actividades&quot;: &quot;En el <a href='https://www.empalmelobos.com.ar/p/calendario-de-actividades.html' target='_blank'>Calendario de Actividades</a> podrás encontrar más información.&quot;,
&quot;evento&quot;: &quot;En el <a href='https://www.empalmelobos.com.ar/p/calendario-de-actividades.html' target='_blank'>Calendario de Actividades</a> podrás encontrar más información.&quot;,
&quot;eventos&quot;: &quot;En el <a href='https://www.empalmelobos.com.ar/p/calendario-de-actividades.html' target='_blank'>Calendario de Actividades</a> podrás encontrar más información.&quot;,
&quot;combi&quot;: &quot;No hay combis en Empalme Lobos, los servicios se encuentran en centro de Lobos. Para más información: Lobos Bus (tel.: 02227 431346), Del Sur (tel.: 02227 430803), Zeros Tour (cel.: 2227 440428).&quot;,
&quot;combis&quot;: &quot;No hay combis en Empalme Lobos, los servicios se encuentran en centro de Lobos. Para más información: Lobos Bus (tel.: 02227 431346), Del Sur (tel.: 02227 430803), Zeros Tour (cel.: 2227 440428).&quot;,
&quot;hora abre&quot;: &quot;No tengo información actualizada sobre horarios de comercios o instituciones.&quot;,
&quot;hora cierra&quot;: &quot;No tengo información actualizada sobre horarios de comercios o instituciones.&quot;,
&quot;cuándo abre&quot;: &quot;No tengo información actualizada sobre horarios de comercios o instituciones.&quot;,
&quot;cuándo cierra&quot;: &quot;No tengo información actualizada sobre horarios de comercios o instituciones.&quot;,
&quot;cuando abre&quot;: &quot;No tengo información actualizada sobre horarios de comercios o instituciones.&quot;,
&quot;cuando cierra&quot;: &quot;No tengo información actualizada sobre horarios de comercios o instituciones.&quot;,
&quot;último tren&quot;: &quot;Visitá la página de <a href='https://www.empalmelobos.com.ar/p/horarios-de-trenes.html' target='_blank'>Horarios de Trenes</a>.&quot;,
&quot;ultimo tren&quot;: &quot;Visitá la página de <a href='https://www.empalmelobos.com.ar/p/horarios-de-trenes.html' target='_blank'>Horarios de Trenes</a>.&quot;,
&quot;primer tren&quot;: &quot;Visitá la página de <a href='https://www.empalmelobos.com.ar/p/horarios-de-trenes.html' target='_blank'>Horarios de Trenes</a>.&quot;,
&quot;visitar Empalme&quot;: &quot;para visitar a nuestro pueblo, podés llegar desde Buenos Aires por tren, colectivo o combi. Para los horarios de trenes en <a href='https://www.empalmelobos.com.ar/p/horarios-de-trenes.html' target='_blank'>esta página</a> encontrarás la información que necesitás. Desde Once tenés el colectivo línea 88 y las combis de Buenos Aires, La Plata, Roque Pérez, Monte son las siguientes: Lobos Bus (tel.: 02227 431346), Del Sur (tel.: 02227 430803), Zeros Tour (cel.: 2227 440428). Estos servicios también cubren a localidades vecinas. También tenés colectivos desde Roque Pérez, Mercedes, Navarro, etc. Para eso consultá con la Terminal de Ómnibus de Lobos: 2227 432582&quot;,
&quot;visitar a Empalme&quot;: &quot;Para visitar a nuestro pueblo, podés llegar desde Buenos Aires por tren, colectivo o combi. Para los horarios de trenes en <a href='https://www.empalmelobos.com.ar/p/horarios-de-trenes.html' target='_blank'>esta página</a> encontrarás la información que necesitás. Desde Once tenés el colectivo línea 88 y las combis de Buenos Aires, La Plata, Roque Pérez, Monte son las siguientes: Lobos Bus (tel.: 02227 431346), Del Sur (tel.: 02227 430803), Zeros Tour (cel.: 2227 440428). Estos servicios también cubren a localidades vecinas. También tenés colectivos desde Roque Pérez, Mercedes, Navarro, etc. Para eso consultá con la Terminal de Ómnibus de Lobos: 2227 432582&quot;,
&quot;visita a Empalme&quot;: &quot;Para visitar a nuestro pueblo, podés llegar desde Buenos Aires por tren, colectivo o combi. Para los horarios de trenes en <a href='https://www.empalmelobos.com.ar/p/horarios-de-trenes.html' target='_blank'>esta página</a> encontrarás la información que necesitás. Desde Once tenés el colectivo línea 88 y las combis de Buenos Aires, La Plata, Roque Pérez, Monte son las siguientes: Lobos Bus (tel.: 02227 431346), Del Sur (tel.: 02227 430803), Zeros Tour (cel.: 2227 440428). Estos servicios también cubren a localidades vecinas. También tenés colectivos desde Roque Pérez, Mercedes, Navarro, etc. Para eso consultá con la Terminal de Ómnibus de Lobos: 2227 432582&quot;,
&quot;visito Empalme&quot;: &quot;Para visitar a nuestro pueblo, podés llegar desde Buenos Aires por tren, colectivo o combi. Para los horarios de trenes en <a href='https://www.empalmelobos.com.ar/p/horarios-de-trenes.html' target='_blank'>esta página</a> encontrarás la información que necesitás. Desde Once tenés el colectivo línea 88 y las combis de Buenos Aires, La Plata, Roque Pérez, Monte son las siguientes: Lobos Bus (tel.: 02227 431346), Del Sur (tel.: 02227 430803), Zeros Tour (cel.: 2227 440428). Estos servicios también cubren a localidades vecinas. También tenés colectivos desde Roque Pérez, Mercedes, Navarro, etc. Para eso consultá con la Terminal de Ómnibus de Lobos: 2227 432582&quot;,
&quot;visitar&quot;: &quot;Si te referís visitar Empalme Lobos, podés llegar desde Buenos Aires por tren, colectivo o combi. Para los horarios de trenes en <a href='https://www.empalmelobos.com.ar/p/horarios-de-trenes.html' target='_blank'>esta página</a> encontrarás la información que necesitás. Desde Once tenés el colectivo línea 88 y las combis de Buenos Aires, La Plata, Roque Pérez, Monte son las siguientes: Lobos Bus (tel.: 02227 431346), Del Sur (tel.: 02227 430803), Zeros Tour (cel.: 2227 440428). Estos servicios también cubren a localidades vecinas. También tenés colectivos desde Roque Pérez, Mercedes, Navarro, etc. Para eso consultá con la Terminal de Ómnibus de Lobos: 2227 432582&quot;,
&quot;pasa el último&quot;: &quot;Para los horarios del transporte público visitá la página de <a href='https://www.empalmelobos.com.ar/p/horarios-de-trenes.html' target='_blank'>Horarios de Trenes</a> y <a href='https://www.empalmelobos.com.ar/p/horarios-de-colectivos.html' target='_blank'>Horarios de Colectivos</a>.&quot;,
&quot;pasa el ultimo&quot;: &quot;Para los horarios del transporte público visitá la página de <a href='https://www.empalmelobos.com.ar/p/horarios-de-trenes.html' target='_blank'>Horarios de Trenes</a> y <a href='https://www.empalmelobos.com.ar/p/horarios-de-colectivos.html' target='_blank'>Horarios de Colectivos</a>.&quot;,
&quot;último colectivo&quot;: &quot;Visitá la página de <a href='https://www.empalmelobos.com.ar/p/horarios-de-colectivos.html' target='_blank'>Horarios de Colectivos</a>.&quot;,
&quot;ultimo colectivo&quot;: &quot;Visitá la página de <a href='https://www.empalmelobos.com.ar/p/horarios-de-colectivos.html' target='_blank'>Horarios de Colectivos</a>.&quot;,
&quot;primer colectivo&quot;: &quot;Visitá la página de <a href='https://www.empalmelobos.com.ar/p/horarios-de-colectivos.html' target='_blank'>Horarios de Colectivos</a>.&quot;,
&quot;publicitar&quot;: &quot;Si querés promocionar tu negocio, escribinos a empalmelobosweb@gmail.com.&quot;,
&quot;publicidad&quot;: &quot;Si querés promocionar tu negocio, escribinos a empalmelobosweb@gmail.com.&quot;,
&quot;policía&quot;: &quot;La seccional de Empalme Lobos se encuentra en San Patricio 140. Teléfono: 42-2121&quot;,
&quot;bomberos&quot;: &quot;No hay destacamento de bomberos en Empalme Lobos. La ayuda depende del destacamento de Lobos, ubicado en Ameghino 142. Teléfono: 42-1111.&quot;,
&quot;hospital&quot;: &quot;En Empalme disponemos de una Sala de Primeros Auxilios en la calle San Patricio, casi esquina 16 de Septiembre. Teléfono: 432 218.&quot;,
&quot;auxilios&quot;: &quot;La Sala de Primeros Auxilios se encuentra en la calle San Patricio, casi esquina 16 de Septiembre. Teléfono: 432 218.&quot;,
&quot;farmacia&quot;: &quot;Si necesitás una farmacia, la Farmacia Apella en Arévalo 3076 tiene guardia pasiva para urgencias. Teléfono: 2227 583909.&quot;,
&quot;emergencia&quot;: &quot;Este chat no está habilitado para responder a consultas relacionadas a emergencias. La Sala de Primeros Auxilios de Empalme Lobos se encuentra en la calle San Patricio, casi esquina 16 de Septiembre. Teléfono: 432 218. Si necesitás una farmacia, la Farmacia Apella en Arévalo 3076 tiene guardia pasiva para urgencias. Teléfono: 2227 583909.&quot;,
&quot;error&quot;: &quot;Si encontraste un error en nuestro sitio envianos un mensaje a: empalmelobosweb@gmail.com.&quot;,
&quot;reclamo&quot;: &quot;Si tenés un reclamo sobre Empalme o sobre nuestro sitio envianos un mensaje a: empalmelobosweb@gmail.com.&quot;,
&quot;reclamar&quot;: &quot;Si tenés un reclamo sobre Empalme o sobre nuestro sitio envianos un mensaje a: empalmelobosweb@gmail.com.&quot;,
&quot;denuncia&quot;: &quot;Si tenés una denuncia, lamentablemente no podemos ayudarte, pero envianos un mensaje a: empalmelobosweb@gmail.com.&quot;,
&quot;denunciar&quot;: &quot;Si tenés una denuncia, lamentablemente no podemos ayudarte, pero envianos un mensaje a: empalmelobosweb@gmail.com.&quot;,
&quot;vender&quot;: &quot;Si querés vender algo en nuestra página de productos envianos un email a: empalmelobosweb@gmail.com.&quot;,
&quot;tiempo&quot;: &quot;Si querés saber cómo va a estar el tiempo en Empalme, visitá <a href='https://www.empalmelobos.com.ar/p/el-tiempo-en-empalme-lobos.html' target='_blank'>esta página</a>.&quot;,
&quot;clima&quot;: &quot;Si querés saber cómo va a estar el tiempo en Empalme, visitá <a href='https://www.empalmelobos.com.ar/p/el-tiempo-en-empalme-lobos.html' target='_blank'>esta página</a>.&quot;,
&quot;pronóstico&quot;: &quot;Si querés saber cómo va a estar el tiempo en Empalme, visitá <a href='https://www.empalmelobos.com.ar/p/el-tiempo-en-empalme-lobos.html' target='_blank'>esta página</a>.&quot;,
&quot;pronostico&quot;: &quot;Si querés saber cómo va a estar el tiempo en Empalme, visitá <a href='https://www.empalmelobos.com.ar/p/el-tiempo-en-empalme-lobos.html' target='_blank'>esta página</a>.&quot;,
&quot;plagio&quot;: &quot;El contenido de nuestro sitio es original, pero no somos responsables del contenido ofrecido por terceros. Visitá nuestra página de <a href='https://www.empalmelobos.com.ar/p/terminos-y-condiciones-de-uso.html' target='_blank'>Términos y Condiciones de Uso</a> o envianos un email a: empalmelobosweb@gmail.com.&quot;,
&quot;administrador&quot;: &quot;Si querés contactarte con el administrador de esta página envianos un email a: empalmelobosweb@gmail.com.&quot;,
&quot;empleo&quot;: &quot;Nosotros no ofrecemos trabajo, pero si querés publicar un clasificado envianos un email a: empalmelobosweb@gmail.com.&quot;,
&quot;trabajo&quot;: &quot;Nosotros no ofrecemos trabajo, pero si querés publicar un clasificado envianos un email a: empalmelobosweb@gmail.com.&quot;,
&quot;genealógico&quot;: &quot;Nosotros no ofrecemos ayuda para investigación genealógica, sin embargo respondemos con algunos recursos en nuestra página de <a href='https://www.empalmelobos.com.ar/p/preguntas-frecuentes.html' target='_blank'>Preguntas Frecuentes</a>. Si tenés datos para aportar y contribuir a la historia local envianos un email a: empalmelobosweb@gmail.com.&quot;,
&quot;genealogía&quot;: &quot;Nosotros no ofrecemos ayuda para investigación genealógica, sin embargo respondemos con algunos recursos en nuestra página de <a href='https://www.empalmelobos.com.ar/p/preguntas-frecuentes.html' target='_blank'>Preguntas Frecuentes</a>. Si tenés datos para aportar y contribuir a la historia local envianos un email a: empalmelobosweb@gmail.com.&quot;,
&quot;abuelo&quot;: &quot;Nosotros no ofrecemos ayuda para investigación genealógica, sin embargo respondemos con algunos recursos en nuestra página de <a href='https://www.empalmelobos.com.ar/p/preguntas-frecuentes.html' target='_blank'>Preguntas Frecuentes</a>. Si tenés datos para aportar y contribuir a la historia local envianos un email a: empalmelobosweb@gmail.com.&quot;,
&quot;abuela&quot;: &quot;Nosotros no ofrecemos ayuda para investigación genealógica, sin embargo respondemos con algunos recursos en nuestra página de <a href='https://www.empalmelobos.com.ar/p/preguntas-frecuentes.html' target='_blank'>Preguntas Frecuentes</a>. Si tenés datos para aportar y contribuir a la historia local envianos un email a: empalmelobosweb@gmail.com.&quot;,
&quot;familia&quot;: &quot;Nosotros no ofrecemos ayuda para investigación genealógica, sin embargo respondemos con algunos recursos en nuestra página de <a href='https://www.empalmelobos.com.ar/p/preguntas-frecuentes.html' target='_blank'>Preguntas Frecuentes</a>. Si tenés datos para aportar y contribuir a la historia local envianos un email a: empalmelobosweb@gmail.com.&quot;,
&quot;familiar&quot;: &quot;Nosotros no ofrecemos ayuda para investigación genealógica, sin embargo respondemos con algunos recursos en nuestra página de <a href='https://www.empalmelobos.com.ar/p/preguntas-frecuentes.html' target='_blank'>Preguntas Frecuentes</a>. Si tenés datos para aportar y contribuir a la historia local envianos un email a: empalmelobosweb@gmail.com.&quot;,
&quot;código postal&quot;: &quot;El código postal de Empalme Lobos es 7249.&quot;,
&quot;código telefónico&quot;: &quot;El código telefónico del Partido de Lobos es 02227.&quot;,
&quot;código telefonico&quot;: &quot;El código telefónico del Partido de Lobos es 02227.&quot;,
&quot;codigo postal&quot;: &quot;El código postal de Empalme Lobos es 7249.&quot;,
&quot;codigo telefónico&quot;: &quot;El código telefónico del Partido de Lobos es 02227.&quot;,
&quot;codigo telefonico&quot;: &quot;El código telefónico del Partido de Lobos es 02227.&quot;,
&quot;código&quot;: &quot;Si te referís al postal, el de Empalme Lobos es 7249. Por otra parte, si te referís al código telefónico, el código telefónico del Partido de Lobos es 02227.&quot;,
&quot;codigo&quot;: &quot;Si te referís al postal, el de Empalme Lobos es 7249. Por otra parte, si te referís al código telefónico, el código telefónico del Partido de Lobos es 02227.&quot;,
  &quot;necesito ayuda&quot;: &quot;Seguro, decime &#191;cómo puedo ayudarte?&quot;,
&quot;ayuda&quot;: &quot;Seguro, decime &#191;cómo puedo ayudarte?&quot;,
&quot;podés ayudarme?&quot;: &quot;Seguro, decime cómo.&quot;,
&quot;podes ayudarme?&quot;: &quot;Seguro, decime cómo.&quot;,
&quot;puedes ayudarme?&quot;: &quot;Seguro, decime cómo.&quot;,
&quot;ayudarme?&quot;: &quot;Seguro, decime cómo.&quot;,
&quot;&#191;podés ayudarme?&quot;: &quot;Seguro, decime cómo.&quot;,
&quot;&#191;podes ayudarme?&quot;: &quot;Seguro, decime cómo.&quot;,
&quot;&#191;puedes ayudarme?&quot;: &quot;Seguro, decime cómo.&quot;,
&quot;&#191;ayudarme?&quot;: &quot;&#191;Cómo te puedo ayudar?&quot;,
&quot;ayudarme&quot;: &quot;&#191;Cómo te puedo ayudar?&quot;,
&quot;tengo un problema&quot;: &quot; &#191;Cuál es el problema?&quot;,
&quot;tengo problema&quot;: &quot; &#191;Cuál es el problema?&quot;,
&quot;tengo problemas&quot;: &quot; &#191;Cuál es el problema?&quot;,
&quot;tengo unos problemas&quot;: &quot; &#191;Cuál es el problema?&quot;,
&quot;donar algo&quot;: &quot;Envianos un email a empalmelobosweb@gmail.com y nos pondremos en contacto. Muchas gracias.&quot;,
&quot;quiero donar algo&quot;: &quot;Envianos un email a empalmelobosweb@gmail.com y nos pondremos en contacto. Muchas gracias.&quot;,
&quot;donar material&quot;: &quot;Envianos un email a empalmelobosweb@gmail.com y nos pondremos en contacto. Muchas gracias.&quot;,
&quot;quiero material&quot;: &quot;Envianos un email a empalmelobosweb@gmail.com y nos pondremos en contacto. Muchas gracias.&quot;,
&quot;quisiera material&quot;: &quot;Envianos un email a empalmelobosweb@gmail.com y nos pondremos en contacto. Muchas gracias.&quot;,
&quot;cómo puedo donar&quot;: &quot;Envianos un email a empalmelobosweb@gmail.com y nos pondremos en contacto. Muchas gracias.&quot;,
&quot;como puedo donar&quot;: &quot;Envianos un email a empalmelobosweb@gmail.com y nos pondremos en contacto. Muchas gracias.&quot;,
&quot;donar&quot;: &quot;Envianos un email a empalmelobosweb@gmail.com y nos pondremos en contacto. Muchas gracias.&quot;,
&quot;donación&quot;: &quot;Desde este sitio no realizamos donaciones, pero si querés donar material u objetos para el patrimonio histórico envianos un email a empalmelobosweb@gmail.com y nos pondremos en contacto. Muchas gracias.&quot;,
&quot;contacto de&quot;: &quot;Visitá Nuestra página de <a href='https://www.empalmelobos.com.ar/p/telefonos-utiles.html' target='_blank'>Teléfonos Útiles</a>.&quot;,
&quot;no funciona&quot;: &quot;En la página de <a href='https://www.empalmelobos.com.ar/p/preguntas-frecuentes.html' target='_blank'>Preguntas Frecuentes</a> podrás encontrar la sección sobre el funcionamiento el sitio y ver el estado de los diferentes servicios que usamos. Si tenés algún problema con el funcionamiento de alguna sección, por favor escribinos a empalmelobosweb@gmail.com.&quot;,
&quot;está lento&quot;: &quot;Si el sitio está lento verificá tu conexión o cerrá otras aplicaciones. En la página de <a href='https://www.empalmelobos.com.ar/p/preguntas-frecuentes.html' target='_blank'>Preguntas Frecuentes</a> podrás encontrar la sección sobre el funcionamiento el sitio y ver el estado de los diferentes servicios que usamos. Si tenés algún problema con el funcionamiento de alguna sección, por favor escribinos a empalmelobosweb@gmail.com.&quot;,
&quot;está lenta&quot;: &quot;Si el sitio está lento verificá tu conexión o cerrá otras aplicaciones. En la página de <a href='https://www.empalmelobos.com.ar/p/preguntas-frecuentes.html' target='_blank'>Preguntas Frecuentes</a> podrás encontrar la sección sobre el funcionamiento el sitio y ver el estado de los diferentes servicios que usamos. Si tenés algún problema con el funcionamiento de alguna sección, por favor escribinos a empalmelobosweb@gmail.com.&quot;,
&quot;esta lento&quot;: &quot;Si el sitio está lento verificá tu conexión o cerrá otras aplicaciones. En la página de <a href='https://www.empalmelobos.com.ar/p/preguntas-frecuentes.html' target='_blank'>Preguntas Frecuentes</a> podrás encontrar la sección sobre el funcionamiento el sitio y ver el estado de los diferentes servicios que usamos. Si tenés algún problema con el funcionamiento de alguna sección, por favor escribinos a empalmelobosweb@gmail.com.&quot;,
&quot;esta lenta&quot;: &quot;Si el sitio está lento verificá tu conexión o cerrá otras aplicaciones. En la página de <a href='https://www.empalmelobos.com.ar/p/preguntas-frecuentes.html' target='_blank'>Preguntas Frecuentes</a> podrás encontrar la sección sobre el funcionamiento el sitio y ver el estado de los diferentes servicios que usamos. Si tenés algún problema con el funcionamiento de alguna sección, por favor escribinos a empalmelobosweb@gmail.com.&quot;,
&quot;está roto&quot;: &quot;Si un link no funciona avisanos así realizamos la actualización. Escribinos a empalmelobosweb@gmail.com.&quot;,
&quot;problema con el sitio&quot;: &quot;En nuestra página de <a href='https://www.empalmelobos.com.ar/p/preguntas-frecuentes.html' target='_blank'>Preguntas Frecuentes</a> tenemos una sección sobre el estatus del sitio. Si hay algún error con alguna función podrás encontrar los recursos para consultar allí. Sino envianos un email a empalmelobosweb@gmail.com.&quot;,
&quot;problema con la página&quot;: &quot;En nuestra página de <a href='https://www.empalmelobos.com.ar/p/preguntas-frecuentes.html' target='_blank'>Preguntas Frecuentes</a> tenemos una sección sobre el estatus del sitio. Si hay algún error con alguna función podrás encontrar los recursos para consultar allí. Sino envianos un email a empalmelobosweb@gmail.com.&quot;,
&quot;problema con la pagina&quot;: &quot;En nuestra página de <a href='https://www.empalmelobos.com.ar/p/preguntas-frecuentes.html' target='_blank'>Preguntas Frecuentes</a> tenemos una sección sobre el estatus del sitio. Si hay algún error con alguna función podrás encontrar los recursos para consultar allí. Sino envianos un email a empalmelobosweb@gmail.com.&quot;,
&quot;no carga&quot;: &quot;En nuestra página de <a href='https://www.empalmelobos.com.ar/p/preguntas-frecuentes.html' target='_blank'>Preguntas Frecuentes</a> tenemos una sección sobre el estatus del sitio. Si hay algún error con alguna función podrás encontrar los recursos para consultar allí. Sino envianos un email a empalmelobosweb@gmail.com.&quot;,
&quot;mapas&quot;: &quot;Si necesitás mapas de Empalme, tenemos uno turístico e interactivo en la página de <a href='https://www.empalmelobos.com.ar/p/recorrido-autoguiado-por-empalme-lobos.html' target='_blank'>Recorrido Autoguiado</a>.&quot;,
&quot;mapa&quot;: &quot;Si necesitás mapas de Empalme, tenemos uno turístico e interactivo en la página de <a href='https://www.empalmelobos.com.ar/p/recorrido-autoguiado-por-empalme-lobos.html' target='_blank'>Recorrido Autoguiado</a>.&quot;,
&quot;qr&quot;: &quot;Nuestros códigos QR son usados en las siguientes secciones: <a href='https://www.empalmelobos.com.ar/p/recorrido-autoguiado-por-empalme-lobos.html' target='_blank'>Recorrido Autoguiado</a>, <a href='https://www.empalmelobos.com.ar/p/horarios-de-trenes.html' target='_blank'>Horarios de Trenes</a> y <a href='https://www.empalmelobos.com.ar/p/horarios-de-colectivos.html' target='_blank'>Horarios de Colectivos</a>.&quot;,
&quot;transporte&quot;: &quot;Podés llegar a Empalme desde Lobos con la línea 501, o en tren desde Lobos también o desde Cañuelas o Merlo. En Lobos también contrarás los servicios de remises. Ver también: <a href='https://www.empalmelobos.com.ar/p/horarios-de-trenes.html' target='_blank'>Horarios de Trenes</a> y <a href='https://www.empalmelobos.com.ar/p/horarios-de-colectivos.html' target='_blank'>Horarios de Colectivos</a>.&quot;,
&quot;transporte&quot;: &quot;Podés llegar a Empalme desde Lobos con la línea 501, o en tren desde Lobos también o desde Cañuelas o Merlo. En Lobos encontrarás los servicios de remises. Ver también: <a href='https://www.empalmelobos.com.ar/p/horarios-de-trenes.html' target='_blank'>Horarios de Trenes</a> y <a href='https://www.empalmelobos.com.ar/p/horarios-de-colectivos.html' target='_blank'>Horarios de Colectivos</a>.&quot;,
&quot;cómo llegar&quot;: &quot;Podés llegar a Empalme desde Lobos con la línea 501, o en tren desde Lobos también o desde Cañuelas o Merlo. En Lobos encontrarás los servicios de remises. Ver también: <a href='https://www.empalmelobos.com.ar/p/horarios-de-trenes.html' target='_blank'>Horarios de Trenes</a> y <a href='https://www.empalmelobos.com.ar/p/horarios-de-colectivos.html' target='_blank'>Horarios de Colectivos</a>.&quot;,
&quot;cómo llego&quot;: &quot;Podés llegar a Empalme desde Lobos con la línea 501, o en tren desde Lobos también o desde Cañuelas o Merlo. En Lobos encontrarás los servicios de remises. Ver también: <a href='https://www.empalmelobos.com.ar/p/horarios-de-trenes.html' target='_blank'>Horarios de Trenes</a> y <a href='https://www.empalmelobos.com.ar/p/horarios-de-colectivos.html' target='_blank'>Horarios de Colectivos</a>.&quot;,
&quot;como llegar&quot;: &quot;Podés llegar a Empalme desde Lobos con la línea 501, o en tren desde Lobos también o desde Cañuelas o Merlo. En Lobos encontrarás los servicios de remises. Ver también: <a href='https://www.empalmelobos.com.ar/p/horarios-de-trenes.html' target='_blank'>Horarios de Trenes</a> y <a href='https://www.empalmelobos.com.ar/p/horarios-de-colectivos.html' target='_blank'>Horarios de Colectivos</a>.&quot;,
&quot;como llego&quot;: &quot;Podés llegar a Empalme desde Lobos con la línea 501, o en tren desde Lobos también o desde Cañuelas o Merlo. En Lobos encontrarás los servicios de remises. Ver también: <a href='https://www.empalmelobos.com.ar/p/horarios-de-trenes.html' target='_blank'>Horarios de Trenes</a> y <a href='https://www.empalmelobos.com.ar/p/horarios-de-colectivos.html' target='_blank'>Horarios de Colectivos</a>.&quot;,
&quot;como llegar?&quot;: &quot;Podés llegar a Empalme desde Lobos con la línea 501, o en tren desde Lobos también o desde Cañuelas o Merlo. En Lobos encontrarás los servicios de remises. Ver también: <a href='https://www.empalmelobos.com.ar/p/horarios-de-trenes.html' target='_blank'>Horarios de Trenes</a> y <a href='https://www.empalmelobos.com.ar/p/horarios-de-colectivos.html' target='_blank'>Horarios de Colectivos</a>.&quot;,
&quot;como llego?&quot;: &quot;Podés llegar a Empalme desde Lobos con la línea 501, o en tren desde Lobos también o desde Cañuelas o Merlo. En Lobos encontrarás los servicios de remises. Ver también: <a href='https://www.empalmelobos.com.ar/p/horarios-de-trenes.html' target='_blank'>Horarios de Trenes</a> y <a href='https://www.empalmelobos.com.ar/p/horarios-de-colectivos.html' target='_blank'>Horarios de Colectivos</a>.&quot;,
&quot;cómo llegar?&quot;: &quot;Podés llegar a Empalme desde Lobos con la línea 501, o en tren desde Lobos también o desde Cañuelas o Merlo. En Lobos encontrarás los servicios de remises. Ver también: <a href='https://www.empalmelobos.com.ar/p/horarios-de-trenes.html' target='_blank'>Horarios de Trenes</a> y <a href='https://www.empalmelobos.com.ar/p/horarios-de-colectivos.html' target='_blank'>Horarios de Colectivos</a>.&quot;,
&quot;cómo llego?&quot;: &quot;Podés llegar a Empalme desde Lobos con la línea 501, o en tren desde Lobos también o desde Cañuelas o Merlo. En Lobos encontrarás los servicios de remises. Ver también: <a href='https://www.empalmelobos.com.ar/p/horarios-de-trenes.html' target='_blank'>Horarios de Trenes</a> y <a href='https://www.empalmelobos.com.ar/p/horarios-de-colectivos.html' target='_blank'>Horarios de Colectivos</a>.&quot;,
&quot;&#191;cómo llegar?&quot;: &quot;Podés llegar a Empalme desde Lobos con la línea 501, o en tren desde Lobos también o desde Cañuelas o Merlo. En Lobos encontrarás los servicios de remises. Ver también: <a href='https://www.empalmelobos.com.ar/p/horarios-de-trenes.html' target='_blank'>Horarios de Trenes</a> y <a href='https://www.empalmelobos.com.ar/p/horarios-de-colectivos.html' target='_blank'>Horarios de Colectivos</a>.&quot;,
&quot;&#191;cómo llego?&quot;: &quot;Podés llegar a Empalme desde Lobos con la línea 501, o en tren desde Lobos también o desde Cañuelas o Merlo. En Lobos encontrarás los servicios de remises. Ver también: <a href='https://www.empalmelobos.com.ar/p/horarios-de-trenes.html'>Horarios de Trenes</a> y <a href='https://www.empalmelobos.com.ar/p/horarios-de-colectivos.html' target='_blank'>Horarios de Colectivos</a>.&quot;,  
&quot;se llega a empalme&quot;: &quot;Podés llegar a Empalme desde Lobos con la línea 501, o en tren desde Lobos también o desde Cañuelas o Merlo. En Lobos encontrarás los servicios de remises. Ver también: <a href='https://www.empalmelobos.com.ar/p/horarios-de-trenes.html' target='_blank'>Horarios de Trenes</a> y <a href='https://www.empalmelobos.com.ar/p/horarios-de-colectivos.html' target='_blank'>Horarios de Colectivos</a>.&quot;,
&quot;llegar a empalme&quot;: &quot;Podés llegar a Empalme desde Lobos con la línea 501, o en tren desde Lobos también o desde Cañuelas o Merlo. En Lobos encontrarás los servicios de remises. Ver también: <a href='https://www.empalmelobos.com.ar/p/horarios-de-trenes.html'>Horarios de Trenes</a> y <a href='https://www.empalmelobos.com.ar/p/horarios-de-colectivos.html' target='_blank'>Horarios de Colectivos</a>.&quot;,
&quot;se llega&quot;: &quot;Podés llegar a Empalme desde Lobos con la línea 501, o en tren desde Lobos también o desde Cañuelas o Merlo. En Lobos encontrarás los servicios de remises. Ver también: <a href='https://www.empalmelobos.com.ar/p/horarios-de-trenes.html'>Horarios de Trenes</a> y <a href='https://www.empalmelobos.com.ar/p/horarios-de-colectivos.html' target='_blank'>Horarios de Colectivos</a>.&quot;,
&quot;llegar&quot;: &quot;Podés llegar a Empalme desde Lobos con la línea 501, o en tren desde Lobos también o desde Cañuelas o Merlo. En Lobos encontrarás los servicios de remises. Ver también: <a href='https://www.empalmelobos.com.ar/p/horarios-de-trenes.html'>Horarios de Trenes</a> y <a href='https://www.empalmelobos.com.ar/p/horarios-de-colectivos.html' target='_blank'>Horarios de Colectivos</a>.&quot;,
&quot;el aniversario&quot;: &quot;El 24 de marzo se celebra el aniversario de Empalme Lobos. Fue en esa fecha de 1896 cuando se autorizó la construcción de la Estación.&quot;,
&quot;noticias&quot;: &quot;Este no es un sitio de noticias, sino para la promoción de Empalme Lobos. Sin embargo, en <a href='https://www.empalmelobos.com.ar/p/titulares.html' taret='_blank'>esta página</a> encontrarás los titulares a las noticias publicadas en Lobos o con relación a ramales ferroviarios a nuestro partido.&quot;,
&quot;noticia&quot;: &quot;Este no es un sitio de noticias, sino para la promoción de Empalme Lobos. Sin embargo, en <a href='https://www.empalmelobos.com.ar/p/titulares.html' taret='_blank'>esta página</a> encontrarás los titulares a las noticias publicadas en Lobos o con relación a ramales ferroviarios a nuestro partido.&quot;,
&quot;ir a&quot;: &quot;Si querés ir a Empalme Lobos, podés visitar <a href='https://www.empalmelobos.com.ar/p/como-llegar.html' target='_blank'>esta página</a> para más información.&quot;,
&quot;fundación&quot;: &quot;Se considera el el 24 de marzo como el nacimiento de Empalme Lobos. Fue en esa fecha de 1896 cuando se autorizó la construcción de la Estación.&quot;,
&quot;501&quot;: &quot;La línea 501 conecta a Empalme Lobos con Lobos, para información sobre horarios y recorridos visitá <a href='https://www.empalmelobos.com.ar/p/horarios-de-colectivos.html' target='_blank'>esta página</a>.&quot;,
&quot;linea 501&quot;: &quot;La línea 501 conecta a Empalme Lobos con Lobos, para información sobre horarios y recorridos visitá <a href='https://www.empalmelobos.com.ar/p/horarios-de-colectivos.html' target='_blank'>esta página</a>.&quot;,
&quot;línea 501&quot;: &quot;La línea 501 conecta a Empalme Lobos con Lobos, para información sobre horarios y recorridos visitá <a href='https://www.empalmelobos.com.ar/p/horarios-de-colectivos.html' target='_blank'>esta página</a>.&quot;,
&quot;paro&quot;: &quot;Para información sobre paro en el transporte público te recomiendo que visites el sitio de <a href='https://wwwcronicaferroviaria.blogspot.com/' target='_blank'>Crónica Ferroviaria</a>.&quot;,
&quot;huelga&quot;: &quot;Para información sobre huelga en el transporte público te recomiendo que visites el sitio de <a href='https://wwwcronicaferroviaria.blogspot.com/' target='_blank'>Crónica Ferroviaria</a>.&quot;,
&quot;descarrilamiento&quot;: &quot;Para información sobre descarrilamiento en cualquiera de los ramales a Lobos te recomiendo que visites el sitio de <a href='https://wwwcronicaferroviaria.blogspot.com/' target='_blank'>Crónica Ferroviaria</a>.&quot;,
&quot;accidente ferroviario&quot;: &quot;Para información sobre accidente ferroviario en cualquiera de los ramales a Lobos te recomiendo que visites el sitio de <a href='https://wwwcronicaferroviaria.blogspot.com/' target='_blank'>Crónica Ferroviaria</a>.&quot;,
&quot;&#191;qué se puede hacer?&quot;: &quot;usá nuestro <a href='https://www.empalmelobos.com.ar/p/recorrido-autoguiado-por-empalme-lobos.html' target='_blank'>mapa de recorrido autoguiado</a> y allí encontrarás información sobre qué hacer en nuestra localidad, y consultá el <a href='https://www.empalmelobos.com.ar/p/calendario-de-actividades.html' target='_blank'>calendario de actividades</a> para ver qué eventos tienen lugar a lo largo del año&quot;,
&quot;&#191;que se puede hacer?&quot;: &quot;usá nuestro <a href='https://www.empalmelobos.com.ar/p/recorrido-autoguiado-por-empalme-lobos.html' target='_blank'>mapa de recorrido autoguiado</a> y allí encontrarás información sobre qué hacer en nuestra localidad, y consultá el <a href='https://www.empalmelobos.com.ar/p/calendario-de-actividades.html' target='_blank'>calendario de actividades</a> para ver qué eventos tienen lugar a lo largo del año&quot;,
&quot;qué se puede hacer?&quot;: &quot;usá nuestro <a href='https://www.empalmelobos.com.ar/p/recorrido-autoguiado-por-empalme-lobos.html' target='_blank'>mapa de recorrido autoguiado</a> y allí encontrarás información sobre qué hacer en nuestra localidad, y consultá el <a href='https://www.empalmelobos.com.ar/p/calendario-de-actividades.html' target='_blank'>calendario de actividades</a> para ver qué eventos tienen lugar a lo largo del año&quot;,
&quot;que se puede hacer?&quot;: &quot;usá nuestro <a href='https://www.empalmelobos.com.ar/p/recorrido-autoguiado-por-empalme-lobos.html' target='_blank'>mapa de recorrido autoguiado</a> y allí encontrarás información sobre qué hacer en nuestra localidad, y consultá el <a href='https://www.empalmelobos.com.ar/p/calendario-de-actividades.html' target='_blank'>calendario de actividades</a> para ver qué eventos tienen lugar a lo largo del año&quot;,
&quot;demora&quot;: &quot;No podemos darte información sobre demoras en el transporte público. Consultá al personal de estación (donde te encuentres), o buscá en redes sociales para encontrar información posteada por usuarios.&quot;,
&quot;demoras&quot;: &quot;No podemos darte información sobre demoras en el transporte público Consultá al personal de estación (donde te encuentres), o buscá en redes sociales para encontrar información posteada por usuarios.&quot;,
&quot;retraso&quot;: &quot;No podemos darte información sobre retrasos en el transporte público Consultá al personal de estación (donde te encuentres), o buscá en redes sociales para encontrar información posteada por usuarios.&quot;,
&quot;retrasos&quot;: &quot;No podemos darte información sobre retrasos en el transporte público. Consultá al personal de estación (donde te encuentres), o buscá en redes sociales para encontrar información posteada por usuarios.&quot;,
&quot;cancelacion&quot;: &quot;Para información sobre cancelaciones en cualquiera de los ramales a Lobos te recomiendo que visites el sitio de <a href='https://wwwcronicaferroviaria.blogspot.com/' target='_blank'>Crónica Ferroviaria</a>.&quot;,
&quot;cancelación&quot;: &quot;Para información sobre cancelaciones en cualquiera de los ramales a Lobos te recomiendo que visites el sitio de <a href='https://wwwcronicaferroviaria.blogspot.com/' target='_blank'>Crónica Ferroviaria</a>.&quot;,
&quot;cancelaciones&quot;: &quot;Para información sobre cancelaciones en cualquiera de los ramales a Lobos te recomiendo que visites el sitio de <a href='https://wwwcronicaferroviaria.blogspot.com/' target='_blank'>Crónica Ferroviaria</a>.&quot;,
&quot;boleto&quot;: &quot;Para información actualizada del boleto de tren visitá los siguientes sitios: <a href='https://www.argentina.gob.ar/transporte/trenes-argentinos/horarios-tarifas-y-recorridos/areametropolitana/linearoca/canuelas-monte-lobos' target='_blank'>Línea Cañuelas-Lobos</a> y <a href='https://www.argentina.gob.ar/transporte/trenes-argentinos/horarios-tarifas-y-recorridos/areametropolitana/lineasarmiento/merlo-lobos' target='_blank'>Línea Merlo - Lobos</a>.&quot;,
&quot;boletos&quot;: &quot;Para información actualizada del boleto de tren visitá los siguientes sitios: <a href='https://www.argentina.gob.ar/transporte/trenes-argentinos/horarios-tarifas-y-recorridos/areametropolitana/linearoca/canuelas-monte-lobos' target='_blank'>Línea Cañuelas-Lobos</a> y <a href='https://www.argentina.gob.ar/transporte/trenes-argentinos/horarios-tarifas-y-recorridos/areametropolitana/lineasarmiento/merlo-lobos' target='_blank'>Línea Merlo - Lobos</a>.&quot;,
&quot;tarifa&quot;: &quot;Para información actualizada de la tarifa de tren visitá los siguientes sitios: <a href='https://www.argentina.gob.ar/transporte/trenes-argentinos/horarios-tarifas-y-recorridos/areametropolitana/linearoca/canuelas-monte-lobos' target='_blank'>Línea Cañuelas-Lobos</a> y <a href='https://www.argentina.gob.ar/transporte/trenes-argentinos/horarios-tarifas-y-recorridos/areametropolitana/lineasarmiento/merlo-lobos' target='_blank'>Línea Merlo - Lobos</a>.&quot;,
&quot;tarifas&quot;: &quot;Para información actualizada de la tarifa de tren visitá los siguientes sitios: <a href='https://www.argentina.gob.ar/transporte/trenes-argentinos/horarios-tarifas-y-recorridos/areametropolitana/linearoca/canuelas-monte-lobos' target='_blank'>Línea Cañuelas-Lobos</a> y <a href='https://www.argentina.gob.ar/transporte/trenes-argentinos/horarios-tarifas-y-recorridos/areametropolitana/lineasarmiento/merlo-lobos' target='_blank'>Línea Merlo - Lobos</a>.&quot;,
&quot;hablar con alguien&quot;: &quot;Este es un chat automatizado. Envianos un email a empalmelobosweb@gmail.com.&quot;,
&quot;comunicarme con alguien&quot;: &quot;Este es un chat automatizado. Envianos un email a empalmelobosweb@gmail.com.&quot;,
&quot;hablar con una persona&quot;: &quot;Este es un chat automatizado. Envianos un email a empalmelobosweb@gmail.com.&quot;,
&quot;comunicarme con una persona&quot;: &quot;Este es un chat automatizado. Envianos un email a empalmelobosweb@gmail.com.&quot;,
&quot;hablar con el administrador&quot;: &quot;Este es un chat automatizado. Envianos un email a empalmelobosweb@gmail.com.&quot;,
&quot;comunicarme con el administrador&quot;: &quot;Este es un chat automatizado. Envianos un email a empalmelobosweb@gmail.com.&quot;,
&quot;hablar con el responsable&quot;: &quot;Este es un chat automatizado. Envianos un email a empalmelobosweb@gmail.com.&quot;,
&quot;comunicarme con el responsable&quot;: &quot;Este es un chat automatizado. Envianos un email a empalmelobosweb@gmail.com.&quot;,
&quot;hablar con la persona a cargo&quot;: &quot;Este es un chat automatizado. Envianos un email a empalmelobosweb@gmail.com.&quot;,
&quot;comunicarme con la persona a cargo&quot;: &quot;Este es un chat automatizado. Envianos un email a empalmelobosweb@gmail.com.&quot;,
&quot;hablar con el propietario&quot;: &quot;Este es un chat automatizado. Envianos un email a empalmelobosweb@gmail.com.&quot;,
&quot;comunicarme con el propietario&quot;: &quot;Este es un chat automatizado. Envianos un email a empalmelobosweb@gmail.com.&quot;,
&quot;tienen un teléfono de contacto&quot;: &quot;No. Nos podés contactar por el formulario de contacto en el sitio o enviándonos un email a empalmelobosweb@gmail.com.&quot;,
&quot;tienen un telefono de contacto&quot;: &quot;No. Nos podés contactar por el formulario de contacto en el sitio o enviándonos un email a empalmelobosweb@gmail.com.&quot;,
&quot;tienen una oficina&quot;: &quot;No disponemos de ningún lugar físico para esta actividad. Envianos un email a empalmelobosweb@gmail.com.&quot;,
&quot;tienen una oficina para visitarlos&quot;: &quot;No disponemos de ningún lugar físico para esta actividad. Envianos un email a empalmelobosweb@gmail.com.&quot;,
&quot;tienen un lugar para visitarlos&quot;: &quot;No disponemos de ningún lugar físico para esta actividad. Envianos un email a empalmelobosweb@gmail.com.&quot;,
&quot;tienen un local para visitarlos&quot;: &quot;No disponemos de ningún lugar físico para esta actividad. Envianos un email a empalmelobosweb@gmail.com.&quot;,
&quot;puedo visitarlos&quot;: &quot;No disponemos de ningún lugar físico para esta actividad. Envianos un email a empalmelobosweb@gmail.com.&quot;,
&quot;no ha sido publicado&quot;: &quot;Todos los comentarios son moderados, por lo que tardan en aparecer. Aquellos que no cumplan con los requisitos del sitio no serán publicados. Encontrarás más información en <a href='https://www.empalmelobos.com.ar/p/terminos-y-condiciones-de-uso.html' target='_blank'>Términos y Condiciones de Uso</a> y <a href='https://www.empalmelobos.com.ar/p/preguntas-frecuentes.html' target='_blank'>Preguntas Frecuentes</a>.&quot;,
&quot;comentario no aparece&quot;: &quot;Todos los comentarios son moderados, por lo que tardan en aparecer. Aquellos que no cumplan con los requisitos del sitio no serán publicados. Encontrarás más información en <a href='https://www.empalmelobos.com.ar/p/terminos-y-condiciones-de-uso.html' target='_blank'>Términos y Condiciones de Uso</a> y <a href='https://www.empalmelobos.com.ar/p/preguntas-frecuentes.html' target='_blank'>Preguntas Frecuentes</a>.&quot;,
&quot;no publican mi comentario&quot;: &quot;Todos los comentarios son moderados, por lo que tardan en aparecer. Aquellos que no cumplan con los requisitos del sitio no serán publicados. Encontrarás más información en <a href='https://www.empalmelobos.com.ar/p/terminos-y-condiciones-de-uso.html' target='_blank'>Términos y Condiciones de Uso</a> y <a href='https://www.empalmelobos.com.ar/p/preguntas-frecuentes.html' target='_blank'>Preguntas Frecuentes</a>.&quot;,
&quot;no publicaron mi comentario&quot;: &quot;Todos los comentarios son moderados, por lo que tardan en aparecer. Aquellos que no cumplan con los requisitos del sitio no serán publicados. Encontrarás más información en <a href='https://www.empalmelobos.com.ar/p/terminos-y-condiciones-de-uso.html' target='_blank'>Términos y Condiciones de Uso</a> y <a href='https://www.empalmelobos.com.ar/p/preguntas-frecuentes.html' target='_blank'>Preguntas Frecuentes</a>.&quot;,
&quot;no publicaron mis comentarios&quot;: &quot;Todos los comentarios son moderados, por lo que tardan en aparecer. Aquellos que no cumplan con los requisitos del sitio no serán publicados. Encontrarás más información en <a href='https://www.empalmelobos.com.ar/p/terminos-y-condiciones-de-uso.html' target='_blank'>Términos y Condiciones de Uso</a> y <a href='https://www.empalmelobos.com.ar/p/preguntas-frecuentes.html' target='_blank'>Preguntas Frecuentes</a>.&quot;,
&quot;comentarios no aparecen&quot;: &quot;Todos los comentarios son moderados, por lo que tardan en aparecer. Aquellos que no cumplan con los requisitos del sitio no serán publicados. Encontrarás más información en <a href='https://www.empalmelobos.com.ar/p/terminos-y-condiciones-de-uso.html' target='_blank'>Términos y Condiciones de Uso</a> y <a href='https://www.empalmelobos.com.ar/p/preguntas-frecuentes.html' target='_blank'>Preguntas Frecuentes</a>.&quot;,
&quot;queja&quot;: &quot;Si tenés algún reclamo sobre el sitio envianos un email a empalmelobosweb@gmail.com. Para otro tipo de reclamos consultá a las autoridades que corresponda.&quot;,
&quot;quejas&quot;: &quot;Si tenés algún reclamo sobre el sitio envianos un email a empalmelobosweb@gmail.com. Para otro tipo de reclamos consultá a las autoridades que corresponda.&quot;,
&quot;sobre una persona&quot;: &quot;En este sitio no brindamos información sobre ningún individuo.&quot;,
&quot;instagram&quot;: &quot;Esta es nuestra cuenta de Instagram: <a href='https://www.instagram.com/empalme.lobos/' target='blank'>@empalme.lobos</a>.&quot;,
&quot;x&quot;: &quot;Esta es nuestra cuenta de X: <a href='https://x.com/EmpalmeLobosOK' target='_blank'>@EmpalmeLobosOK</a>.&quot;,
&quot;twitter&quot;: &quot;Esta es nuestra cuenta de X (ex Twitter): <a href='https://x.com/EmpalmeLobosOK' target='_blank'>@EmpalmeLobosOK</a>.&quot;,
&quot;facebook&quot;: &quot;Este es nuestro grupo de Facebook: <a href='https://www.facebook.com/vecinosde.empalmelobos' target='_blank'>Vecinos de Empalme Lobos</a>.&quot;,
&quot;redes sociales&quot;: &quot;Estamos en <a href='https://www.instagram.com/empalme.lobos/' target='blank'>Instagram</a>, <a href='https://x.com/EmpalmeLobosOK' target='_blank'>X</a> y <a href='https://www.facebook.com/vecinosde.empalmelobos' target='blank'>Facebook</a>.&quot;,
&quot;que redes sociales&quot;: &quot;Estamos en <a href='https://www.instagram.com/empalme.lobos/' target='blank'>Instagram</a>, <a href='https://x.com/EmpalmeLobosOK' target='_blank'>X</a> y <a href='https://www.facebook.com/vecinosde.empalmelobos' target='blank'>Facebook</a>.&quot;,
&quot;qué redes sociales?&quot;: &quot;Estamos en <a href='https://www.instagram.com/empalme.lobos/' target='blank'>Instagram</a>, <a href='https://x.com/EmpalmeLobosOK' target='_blank'>X</a> y <a href='https://www.facebook.com/vecinosde.empalmelobos' target='blank'>Facebook</a>.&quot;,
&quot;información para visitar&quot;: &quot;Si necesitás información para visitar Empalme Lobos, en nuestra página de <a href='https://www.empalmelobos.com.ar/p/recorrido-autoguiado-por-empalme-lobos.html' target='_blank'>Recorrido Autoguiado</a> encontrarás algunos recursos adicionales.&quot;,
&quot;visita guiada&quot;: &quot;Tenemos una página con el <a href='https://www.empalmelobos.com.ar/p/recorrido-autoguiado-por-empalme-lobos.html'>Recorrido Autoguiado</a> donde encontrarás lo que necesitás.&quot;,
&quot;turística&quot;: &quot;Si necesitás información para visitar Empalme Lobos, en nuestra página de <a href='https://www.empalmelobos.com.ar/p/recorrido-autoguiado-por-empalme-lobos.html' target='_blank'>Recorrido Autoguiado</a> encontrarás algunos recursos adicionales.&quot;,
&quot;turismo&quot;: &quot;Si necesitás información para visitar Empalme Lobos, en nuestra página de <a href='https://www.empalmelobos.com.ar/p/recorrido-autoguiado-por-empalme-lobos.html' target='_blank'>Recorrido Autoguiado</a> encontrarás algunos recursos adicionales.&quot;,
&quot;turístico&quot;: &quot;Si necesitás información para visitar Empalme Lobos, en nuestra página de <a href='https://www.empalmelobos.com.ar/p/recorrido-autoguiado-por-empalme-lobos.html' target='_blank'>Recorrido Autoguiado</a> encontrarás algunos recursos adicionales.&quot;,
&quot;visita guiada&quot;: &quot;Cecilia Romero está a cargo de las visitas guiadas por Empalme. Comunicate con ella al 2227 672447&quot;,
&quot;visitas guiadas&quot;: &quot;Cecilia Romero está a cargo de las visitas guiadas por Empalme. Comunicate con ella al 2227 672447&quot;,
&quot;visita escolar&quot;: &quot;Si necesitás información para visitas escolares, comunicate con la guía Cecilia Romero al 2227 672447&quot;,
&quot;visita turística&quot;: &quot;Si necesitás información para visitar Empalme Lobos, en nuestra página de <a href='https://www.empalmelobos.com.ar/p/recorrido-autoguiado-por-empalme-lobos.html' target='_blank'>Recorrido Autoguiado</a> encontrarás algunos recursos adicionales, por otro lado,Cecilia Romero está a cargo de las visitas guiadas por Empalme. Comunicate con ella al 2227 672447&quot;,
&quot;visita turistica&quot;: &quot;Si necesitás información para visitar Empalme Lobos, en nuestra página de <a href='https://www.empalmelobos.com.ar/p/recorrido-autoguiado-por-empalme-lobos.html' target='_blank'>Recorrido Autoguiado</a> encontrarás algunos recursos adicionales, por otro lado, Cecilia Romero está a cargo de las visitas guiadas por Empalme. Comunicate con ella al 2227 672447&quot;,
&quot;bicicleta&quot;: &quot;Si necesitás información para visitar en bicicleta a Empalme Lobos, en nuestra página de <a href='https://www.empalmelobos.com.ar/p/recorrido-autoguiado-por-empalme-lobos.html' target='_blank'>Recorrido Autoguiado</a> encontrarás algunos recursos adicionales.&quot;,
&quot;bicicleteada&quot;: &quot;Se hacen recorridos turísticos en bicicleta. Para más información consultá la página de <a href='https://www.empalmelobos.com.ar/p/recorrido-autoguiado-por-empalme-lobos.html' target='_blank'>Recorrido Autoguiado</a>.&quot;,
&quot;médico&quot;: &quot;Consultá la sección de <a href='https://www.empalmelobos.com.ar/p/cartilla-de-medicos-de-lobos.html' target='_blank'>Médicos en Lobos</a>. Si necesitás asistencia en Empalme, podés ir a la Sala de Primeros Auxilios en la calle San Patricio, casi esquina 16 de Septiembre. Teléfono: 432 218.&quot;,
&quot;medico&quot;: &quot;Consultá la sección de <a href='https://www.empalmelobos.com.ar/p/cartilla-de-medicos-de-lobos.html' target='_blank'>Médicos en Lobos</a>. Si necesitás asistencia en Empalme, podés ir a la Sala de Primeros Auxilios en la calle San Patricio, casi esquina 16 de Septiembre. Teléfono: 432 218.&quot;,
&quot;medicos&quot;: &quot;Consultá la sección de <a href='https://www.empalmelobos.com.ar/p/cartilla-de-medicos-de-lobos.html' target='_blank'>Médicos en Lobos</a>. Si necesitás asistencia en Empalme, podés ir a la Sala de Primeros Auxilios en la calle San Patricio, casi esquina 16 de Septiembre. Teléfono: 432 218.&quot;,
&quot;medicamento&quot;: &quot;En Empalme tenés la Farmacia Apella en Arévalo 3076 que tiene guardia pasiva para urgencias. Teléfono: 2227 583909.&quot;,
&quot;remedio&quot;: &quot;En Empalme tenés la Farmacia Apella en Arévalo 3076 que tiene guardia pasiva para urgencias. Teléfono: 2227 583909.&quot;,
&quot;a pie&quot;: &quot;Si necesitás información para pasear por Empalme Lobos, en nuestra página de <a href='https://www.empalmelobos.com.ar/p/recorrido-autoguiado-por-empalme-lobos.html' target='_blank'>Recorrido Autoguiado</a> encontrarás algunos recursos adicionales.&quot;,
&quot;caminar&quot;: &quot;Si necesitás información para pasear por Empalme Lobos, en nuestra página de <a href='https://www.empalmelobos.com.ar/p/recorrido-autoguiado-por-empalme-lobos.html' target='_blank'>Recorrido Autoguiado</a> encontrarás algunos recursos adicionales.&quot;,
&quot;caminata&quot;: &quot;Si necesitás información para pasear por Empalme Lobos, en nuestra página de <a href='https://www.empalmelobos.com.ar/p/recorrido-autoguiado-por-empalme-lobos.html' target='_blank'>Recorrido Autoguiado</a> encontrarás algunos recursos adicionales.&quot;,
&quot;electromac&quot;: &quot;Electromac se encuentra cerrada al público. La fábrica está ubicada en calle Bolivia y Avenida España, frente al predio de la Estación.&quot;,
&quot;procesión&quot;: &quot;No tengo fecha actualizada de procesiones religiosas, pero usualmente dentro del mes de septiembre está la procesión de la Virgen de San Nicolás. Recomiendo que consultes <a href='https://www.empalmelobos.com.ar/p/calendario-de-actividades.html' target='_blank'>Calendario de Actividades</a>, las redes sociales o que busques en nuestro sitio por algún artículo relacionado.&quot;,
&quot;procesion&quot;: &quot;No tengo fecha actualizada de procesiones religiosas, pero usualmente dentro del mes de septiembre está la procesión de la Virgen de San Nicolás. Recomiendo que consultes nuestro <a href='https://www.empalmelobos.com.ar/p/calendario-de-actividades.html' target='_blank'>Calendario de Actividades</a>, las redes sociales o que busques en nuestro sitio por algún artículo relacionado.&quot;,
&quot;inscripciones&quot;: &quot;Para trámites e inscripciones en diferentes instituciones visitá la <a href='https://www.empalmelobos.com.ar/p/guia-de-tramites.html' target='_blank'>página de trámites</a> donde encontrarás los requisitos de distintos trámites realizados en Empalme Lobos.&quot;,
&quot;trámite&quot;: &quot;Para trámites e inscripciones en diferentes instituciones visitá la <a href='https://www.empalmelobos.com.ar/p/guia-de-tramites.html' target='_blank'>página de trámites</a> donde encontrarás los requisitos de distintos trámites realizados en Empalme Lobos.&quot;,
&quot;trámites&quot;: &quot;Para trámites e inscripciones en diferentes instituciones visitá la <a href='https://www.empalmelobos.com.ar/p/guia-de-tramites.html' target='_blank'>página de trámites</a> donde encontrarás los requisitos de distintos trámites realizados en Empalme Lobos.&quot;,
&quot;tramite&quot;: &quot;Para trámites e inscripciones en diferentes instituciones visitá la <a href='https://www.empalmelobos.com.ar/p/guia-de-tramites.html' target='_blank'>página de trámites</a> donde encontrarás los requisitos de distintos trámites realizados en Empalme Lobos.&quot;,
&quot;tramites&quot;: &quot;Para trámites e inscripciones en diferentes instituciones visitá la <a href='https://www.empalmelobos.com.ar/p/guia-de-tramites.html' target='_blank'>página de trámites</a> donde encontrarás los requisitos de distintos trámites realizados en Empalme Lobos.&quot;,
&quot;sube&quot;: &quot;Podés cargar la tarjeta SUBE en la Estación Empalme Lobos y en algunos kioskos.&quot;,
&quot;empleo&quot;: &quot;En nuestra <a href='https://www.empalmelobos.com.ar/p/clasificados.html' target='_blank'>página de clasificados</a> podrás publicar un anuncio para buscar u ofrecer un trabajo.&quot;,
&quot;trabajo&quot;: &quot;En nuestra <a href='https://www.empalmelobos.com.ar/p/clasificados.html' target='_blank'>página de clasificados</a> podrás publicar un anuncio para buscar u ofrecer un trabajo.&quot;,
&quot;guia comercial&quot;: &quot;En nuestra <a href='https://www.empalmelobos.com.ar/p/clasificados.html' target='_blank'>página de clasificados</a> podrás encontrar algunas ofertas y anuncios de comerciantes o particulares que ofrecen sus servicios.&quot;,
&quot;guía comercial&quot;: &quot;En nuestra <a href='https://www.empalmelobos.com.ar/p/clasificados.html' target='_blank'>página de clasificados</a> podrás encontrar algunas ofertas y anuncios de comerciantes o particulares que ofrecen sus servicios.&quot;,
&quot;directorio&quot;: &quot;En nuestra <a href='https://www.empalmelobos.com.ar/p/clasificados.html' target='_blank'>página de clasificados</a> podrás encontrar algunas ofertas y anuncios de comerciantes o particulares que ofrecen sus servicios.&quot;,
&quot;vender&quot;: &quot;En nuestra <a href='https://www.empalmelobos.com.ar/p/clasificados.html' target='_blank'>página de clasificados</a> podrás encontrar algunas ofertas y anuncios de comerciantes o particulares que ofrecen sus servicios.&quot;,
&quot;verificacion policial&quot;: &quot;Visitá la <a href='https://www.empalmelobos.com.ar/p/guia-de-tramites.html' target='_blank'>página de trámites</a> para más información.&quot;,
&quot;verificación policial&quot;: &quot;Visitá la <a href='https://www.empalmelobos.com.ar/p/guia-de-tramites.html' target='_blank'>página de trámites</a> para más información.&quot;,
&quot;verificacion&quot;: &quot;Si te referís a a Verificación Policial del Automotr visitá la <a href='https://www.empalmelobos.com.ar/p/guia-de-tramites.html' target='_blank'>página de trámites</a> para más información.&quot;,
&quot;verificación&quot;: &quot;Si te referís a a Verificación Policial del Automotr visitá la <a href='https://www.empalmelobos.com.ar/p/guia-de-tramites.html' target='_blank'>página de trámites</a> para más información.&quot;,
&quot;verificacion del auto&quot;: &quot;Visitá la <a href='https://www.empalmelobos.com.ar/p/guia-de-tramites.html' target='_blank'>página de trámites</a> para más información.&quot;,
&quot;verificación del auto&quot;: &quot;Visitá la <a href='https://www.empalmelobos.com.ar/p/guia-de-tramites.html' target='_blank'>página de trámites</a> para más información.&quot;,
&quot;verificacion del vehiculo&quot;: &quot;Visitá la <a href='https://www.empalmelobos.com.ar/p/guia-de-tramites.html' target='_blank'>página de trámites</a> para más información.&quot;,
&quot;verificación del vehiculo&quot;: &quot;Visitá la <a href='https://www.empalmelobos.com.ar/p/guia-de-tramites.html' target='_blank'>página de trámites</a> para más información.&quot;,
&quot;verificacion del vehículo&quot;: &quot;Visitá la <a href='https://www.empalmelobos.com.ar/p/guia-de-tramites.html' target='_blank'>página de trámites</a> para más información.&quot;,
&quot;verificación del vehículo&quot;: &quot;Visitá la <a href='https://www.empalmelobos.com.ar/p/guia-de-tramites.html' target='_blank'>página de trámites</a> para más información.&quot;,
&quot;verificacion policial del automotor&quot;: &quot;Visitá la <a href='https://www.empalmelobos.com.ar/p/guia-de-tramites.html' target='_blank'>página de trámites</a> para más información.&quot;,
&quot;verificación policial el automotor&quot;: &quot;Visitá la <a href='https://www.empalmelobos.com.ar/p/guia-de-tramites.html' target='_blank'>página de trámites</a> para más información.&quot;,
&quot;verificación del automotor&quot;: &quot;Visitá la <a href='https://www.empalmelobos.com.ar/p/guia-de-tramites.html' target='_blank'>página de trámites</a> para más información.&quot;,
&quot;verificacion del automotor&quot;: &quot;Visitá la <a href='https://www.empalmelobos.com.ar/p/guia-de-tramites.html' target='_blank'>página de trámites</a> para más información.&quot;,
&quot;inscripción&quot;: &quot;Para trámites e inscripciones en diferentes instituciones visitá la <a href='https://www.empalmelobos.com.ar/p/guia-de-tramites.html' target='_blank'>página de trámites</a> donde encontrarás los requisitos de distintos trámites realizados en Empalme Lobos.&quot;,
&quot;inscripcion&quot;: &quot;Para trámites e inscripciones en diferentes instituciones visitá la <a href='https://www.empalmelobos.com.ar/p/guia-de-tramites.html' target='_blank'>página de trámites</a> donde encontrarás los requisitos de distintos trámites realizados en Empalme Lobos.&quot;,
&quot;tu navegador no soporta la etiqueta de audio&quot;: &quot;Ese mensaje aparece porque tu navegador no está actualizado. Hacé la actualización o probá con otro. Si el problema sigue, visitá nuestra página de <a href='https://www.empalmelobos.com.ar/p/preguntas-frecuentes.html' target='_blank'>Preguntas Frecuentes</a>. Ahí encontrarás una sección sobre el estatus de funcionamiento del sitio, sino envianos un email a empalmelobosweb@gmail.com.&quot;,
&quot;audio no funciona&quot;: &quot;Si el audio no funciona o te aparece el mensaje &#39;Tu navegador no soporta la etiqueta de audio&#39; es porque tu navegador no está actualizado. Hacé la actualización o probá con otro. Si el problema sigue, visitá nuestra página de <a href='https://www.empalmelobos.com.ar/p/preguntas-frecuentes.html' target='_blank'>Preguntas Frecuentes</a>. Ahí encontrarás una sección sobre el estatus de funcionamiento del sitio, sino envianos un email a empalmelobosweb@gmail.com.&quot;,
&quot;no se escucha&quot;: &quot;Si no podés escuchar el audio del sitio, probá reiniciando la página, o con otro navegador. Si el problema sigue, visitá nuestra página de <a href='https://www.empalmelobos.com.ar/p/preguntas-frecuentes.html' target='_blank'>Preguntas Frecuentes</a>. Ahí encontrarás una sección sobre el estatus de funcionamiento del sitio, sino envianos un email a empalmelobosweb@gmail.com.&quot;,
&quot;felicitaciones&quot;: &quot;&#161;Muchas gracias, y también por visitarnos!&quot;,
&quot;bueno&quot;: &quot;Si tenés otra pregunta no dudes en consultar.&quot;,
&quot;está bien&quot;: &quot;Si tenés otra pregunta no dudes en consultar.&quot;,
&quot;esta bien&quot;: &quot;Si tenés otra pregunta no dudes en consultar.&quot;,
&quot;contacto&quot;: &quot;Sólo podés enviarnos un email a: empalmelobosweb@gmail.com.&quot;,
&quot;contacto&quot;: &quot;Sólo podés enviarnos un email a: empalmelobosweb@gmail.com.&quot;, 
&quot;alojamiento&quot;: &quot;No disponemos de ese tipo de información.&quot;,
&quot;hotel&quot;: &quot;No disponemos de ese tipo de información.&quot;,
&quot;hoteles&quot;: &quot;No disponemos de ese tipo de información.&quot;,
&quot;pago&quot;: &quot;Si querés comprar un producto, la única forma de pago es por transferencia o efectivo. Escribinos un email a elmpalmelobosweb@gmail.com para más información.&quot;,
&quot;pagar&quot;: &quot;Si querés comprar un producto, la única forma de pago es por transferencia o efectivo. Escribinos un email a elmpalmelobosweb@gmail.com para más información.&quot;,  
&quot;precio&quot;: &quot;Los precios de los productos figuran en el sitio. Los productos que no tengan un valor publicado se debe a que son productos personalizados cuyo tiempo de elaboración y/o materiales pueden variar. Escribinos un email a elmpalmelobosweb@gmail.com para más información.&quot;, 
&quot;entrega&quot;: &quot;Si querés saber más sobre las formas de entrega de algún producto, recibirás información al momento del encargo o escribinos un email a elmpalmelobosweb@gmail.com.&quot;,
&quot;tiempo de entrega&quot;: &quot;El tiempo de entrega de un producto dependerá de su stock, reposición o tiempo de elaboración. Escribinos un email a elmpalmelobosweb@gmail.com para más información.&quot;,
&quot;no me llegó&quot;: &quot;Todos nuestros envíos son realizados con número de seguimiento. Consultá en el sitio web de la empresa operadora del envío para más información. Sino, envíanos un email a empalmelobosweb@gmail.com&quot;,
&quot;no me llego&quot;: &quot;Todos nuestros envíos son realizados con número de seguimiento. Consultá en el sitio web de la empresa operadora del envío para más información. Sino, envíanos un email a empalmelobosweb@gmail.com&quot;,
&quot;stock&quot;: &quot;Algunos productos son producidos en tandas de acuerdo a las demandas. Si algún producto no está disponible, volvé a visitar el sitio para ver cualquier novedad.&quot;,
&quot;devolución&quot;: &quot;Tenés una semana para devolver un producto que compraste. La devolución no será aceptada pasada ese lapso de tiempo. Escribinos a empalmelobosweb@gmail.com.&quot;,
&quot;devolucion&quot;: &quot;Tenés una semana para devolver un producto que compraste. La devolución no será aceptada pasada ese lapso de tiempo. Escribinos a empalmelobosweb@gmail.com.&quot;,
&quot;pueden enviarme&quot;:&quot;Si necesitás que te envíemos un producto, completá el formulario de encargo y nos pondremos en contacto para coordinar.&quot;,
&quot;envio&quot;: &quot;Para los envíos de productos, existe un costo adicional. Si querés saber más sobre las formas de entrega de algún producto, recibirás información al momento del encargo o escribinos un email a elmpalmelobosweb@gmail.com.&quot;,  
&quot;envío&quot;: &quot;Para los envíos de productos, existe un costo adicional. Si querés saber más sobre las formas de entrega de algún producto, recibirás información al momento del encargo o escribinos un email a elmpalmelobosweb@gmail.com.&quot;,
&quot;producto&quot;: &quot;Para información sobre los productos en venta, visitá nuestra <a href='https://www.empalmelobos.com.ar/p/productos.html' target='_blank'>Tienda Online.</a>&quot;,
&quot;productos&quot;: &quot;Para información sobre los productos en venta, visitá nuestra <a href='https://www.empalmelobos.com.ar/p/productos.html' target='_blank'>Tienda Online.</a>&quot;,
&quot;taza&quot;: &quot;Para información sobre los productos en venta, visitá nuestra <a href='https://www.empalmelobos.com.ar/p/productos.html' target='_blank'>Tienda Online.</a>&quot;,
&quot;tazas&quot;: &quot;Para información sobre los productos en venta, visitá nuestra <a href='https://www.empalmelobos.com.ar/p/productos.html' target='_blank'>Tienda Online.</a>&quot;,
&quot;mate&quot;: &quot;Para información sobre los productos en venta, visitá nuestra <a href='https://www.empalmelobos.com.ar/p/productos.html' target='_blank'>Tienda Online.</a>&quot;,
&quot;mates&quot;: &quot;Para información sobre los productos en venta, visitá nuestra <a href='https://www.empalmelobos.com.ar/p/productos.html' target='_blank'>Tienda Online.</a>&quot;,
&quot;info&quot;: &quot;Decime qué tipo de información necesitás. Te puedo asistir mejor identificando palabras clave.&quot;,
&quot;informacion&quot;: &quot;Decime qué tipo de información necesitás. Te puedo asistir mejor identificando palabras clave.&quot;,
&quot;información&quot;: &quot;Decime qué tipo de información necesitás. Te puedo asistir mejor identificando palabras clave.&quot;,
&quot;inteligencia artificial&quot;: &quot;No soy un asistente de inteligencia artificial. Funciono en base a palabras claves para responder tus inquietudes.&quot;,
&quot;fallido&quot;: &quot;Si un producto vendido en nuestra Tienda Online está fallido, comunicate con nosotros para su reemplazo o devolución del dinero. Envianos un email a empalmelobosweb@gmail.com&quot;,
&quot;defectuoso&quot;: &quot;Si un producto vendido en nuestra Tienda Online está fallido, comunicate con nosotros para su reemplazo o devolución del dinero. Envianos un email a empalmelobosweb@gmail.com&quot;,
&quot;esta defectuoso&quot;: &quot;Si un producto vendido en nuestra Tienda Online está fallido, comunicate con nosotros para su reemplazo o devolución del dinero. Envianos un email a empalmelobosweb@gmail.com&quot;,
&quot;está defectuoso&quot;: &quot;Si un producto vendido en nuestra Tienda Online está fallido, comunicate con nosotros para su reemplazo o devolución del dinero. Envianos un email a empalmelobosweb@gmail.com&quot;,
&quot;vino defectuoso&quot;: &quot;Si un producto vendido en nuestra Tienda Online está fallido, comunicate con nosotros para su reemplazo o devolución del dinero. Envianos un email a empalmelobosweb@gmail.com&quot;,
&quot;calendario&quot;: &quot;Visitá nuestro <a href='https://www.empalmelobos.com.ar/p/calendario-de-actividades.html' target='_blank'>Calendario de Actividades</a> para consultar las actividades programadas para la localidad.&quot;,
&quot;taller&quot;: &quot;Visitá Nuestra sección de <a href='https://www.empalmelobos.com.ar/p/cursos-y-talleres-en-empalme-lobos.html' target='_blank'>Cursos y Talleres</a> de la localidad para más información.&quot;,
&quot;talleres&quot;: &quot;Visitá Nuestra sección de <a href='https://www.empalmelobos.com.ar/p/cursos-y-talleres-en-empalme-lobos.html' target='_blank'>Cursos y Talleres</a> de la localidad para más información.&quot;,
&quot;curso&quot;: &quot;Visitá Nuestra sección de <a href='https://www.empalmelobos.com.ar/p/cursos-y-talleres-en-empalme-lobos.html' target='_blank'>Cursos y Talleres</a> de la localidad para más información.&quot;,
&quot;cursos&quot;: &quot;Visitá Nuestra sección de <a href='https://www.empalmelobos.com.ar/p/cursos-y-talleres-en-empalme-lobos.html' target='_blank'>Cursos y Talleres</a> de la localidad para más información.&quot;,
&quot;telefonos utiles&quot;: &quot;Visitá Nuestra sección de <a href='https://www.empalmelobos.com.ar/p/contactos-utiles.html' target='_blank'>Contactos Útiles</a> para teléfonos, email y direcciones de varias instituciones.&quot;,
&quot;teléfonos utiles&quot;: &quot;Visitá Nuestra sección de <a href='https://www.empalmelobos.com.ar/p/contactos-utiles.html' target='_blank'>Contactos Útiles</a> para teléfonos, email y direcciones de varias instituciones.&quot;,
&quot;telefonos útiles&quot;: &quot;Visitá Nuestra sección de <a href='https://www.empalmelobos.com.ar/p/contactos-utiles.html' target='_blank'>Contactos Útiles</a> para teléfonos, email y direcciones de varias instituciones.&quot;,
&quot;teléfonos útiles&quot;: &quot;Visitá Nuestra sección de <a href='https://www.empalmelobos.com.ar/p/contactos-utiles.html' target='_blank'>Conctactos Útiles</a> para teléfonos, email y direcciones de varias instituciones.&quot;,
&quot;contactos&quot;: &quot;Visitá Nuestra sección de <a href='https://www.empalmelobos.com.ar/p/contactos-utiles.html' target='_blank'>Conctactos Útiles</a> para teléfonos, email y direcciones de varias instituciones.&quot;,
&quot;feria&quot;: &quot;No hay ferias en Empalme, pero durante las celebraciones del aniversario de la localidad o eventos similares podrás encontrarlas. Te recomiendo que visites nuestro <a href='https://www.empalmelobos.com.ar/p/calendario-de-actividades.html' target='_blank'>Calendario de Actividades</a>.&quot;,
&quot;ferias&quot;: &quot;No hay ferias en Empalme, pero durante las celebraciones del aniversario de la localidad o eventos similares podrás encontrarlas. Te recomiendo que visites nuestro <a href='https://www.empalmelobos.com.ar/p/calendario-de-actividades.html' target='_blank'>Calendario de Actividades</a>.&quot;,
&quot;festival&quot;: &quot;Te recomiendo que visites nuestro <a href='https://www.empalmelobos.com.ar/p/calendario-de-actividades.html' target='_blank'>Calendario de Actividades</a> para que veas si hay algún festival o celebración próximamente.&quot;,
&quot;festivales&quot;: &quot;Te recomiendo que visites nuestro <a href='https://www.empalmelobos.com.ar/p/calendario-de-actividades.html' target='_blank'>Calendario de Actividades</a> para que veas si hay algún festival o celebración próximamente.&quot;,
&quot;celebran&quot;: &quot;Te recomiendo que visites nuestro <a href='https://www.empalmelobos.com.ar/p/calendario-de-actividades.html' target='_blank'>Calendario de Actividades</a> para que veas si hay algún festival o celebración próximamente.&quot;,
&quot;cabaña&quot;: &quot;Disculpas, pero en nuestro sitio por el momento no disponemos de ese tipo de información, para eso realizá una búsqueda online.&quot;,
&quot;cabañas&quot;: &quot;Disculpas, pero en nuestro sitio por el momento no disponemos de ese tipo de información, para eso realizá una búsqueda online.&quot;,
&quot;cabana&quot;: &quot;Disculpas, pero en nuestro sitio por el momento no disponemos de ese tipo de información, para eso realizá una búsqueda online.&quot;,
&quot;cabanas&quot;: &quot;Disculpas, pero en nuestro sitio por el momento no disponemos de ese tipo de información, para eso realizá una búsqueda online.&quot;,
  &quot;necesito asistencia&quot;: &quot;Sí, decime cómo puedo ayudarte.&quot;,
&quot;quisiera asistencia&quot;: &quot;Sí, decime cómo puedo ayudarte.&quot;,
&quot;quiero asistencia&quot;: &quot;Sí, decime cómo puedo ayudarte.&quot;,
  &quot;celebra&quot;: &quot;Si querés saber sobre la celebración del aniversario de Empalme u otro evento, te recomiendo que visites nuestro <a href='https://www.empalmelobos.com.ar/p/calendario-de-actividades.html' target='_blank'>Calendario de Actividades</a>.&quot;,
&quot;celebración&quot;: &quot;Si querés saber sobre la celebración del aniversario de Empalme u otro evento, te recomiendo que visites nuestro <a href='https://www.empalmelobos.com.ar/p/calendario-de-actividades.html' target='_blank'>Calendario de Actividades</a>.&quot;,
&quot;celebracion&quot;: &quot;Si querés saber sobre la celebración del aniversario de Empalme u otro evento, te recomiendo que visites nuestro <a href='https://www.empalmelobos.com.ar/p/calendario-de-actividades.html' target='_blank'>Calendario de Actividades</a>.&quot;,
&quot;celebraciones&quot;: &quot;Si querés saber sobre la celebración del aniversario de Empalme u otro evento, te recomiendo que visites nuestro <a href='https://www.empalmelobos.com.ar/p/calendario-de-actividades.html' target='_blank'>Calendario de Actividades</a>.&quot;,
&quot;tarjeta de crédito&quot;: &quot;En nuestra Tienda Online no se puede pagar con este método. Consultá en los puntos de entrega que corresponda (según aparezca en el sitio).&quot;,
&quot;tarjeta de débito&quot;: &quot;En nuestra Tienda Online no se puede pagar con este método. Consultá en los puntos de entrega que corresponda (según aparezca en el sitio).&quot;,
&quot;crédito&quot;: &quot;En nuestra Tienda Online no se puede pagar con este método. Consultá en los puntos de entrega que corresponda (según aparezca en el sitio).&quot;,
&quot;débito&quot;: &quot;En nuestra Tienda Online no se puede pagar con este método. Consultá en los puntos de entrega que corresponda (según aparezca en el sitio).&quot;,
&quot;tarjeta de credito&quot;: &quot;En nuestra Tienda Online no se puede pagar con este método. Consultá en los puntos de entrega que corresponda (según aparezca en el sitio).&quot;,
&quot;tarjeta de debito&quot;: &quot;En nuestra Tienda Online no se puede pagar con este método. Consultá en los puntos de entrega que corresponda (según aparezca en el sitio).&quot;,
&quot;credito&quot;: &quot;En nuestra Tienda Online no se puede pagar con este método. Consultá en los puntos de entrega que corresponda (según aparezca en el sitio).&quot;,
&quot;debito&quot;: &quot;En nuestra Tienda Online no se puede pagar con este método. Consultá en los puntos de entrega que corresponda (según aparezca en el sitio).&quot;,
&quot;estudiar&quot;: &quot;Si te intersa realizar algún curso, consultá nuestra página de <a href='https://www.empalmelobos.com.ar/p/cursos-y-talleres-en-empalme-lobos.html' target='_blank'>Cursos y Talleres</a>. Además, en nuestra página de <a href='https://www.empalmelobos.com.ar/p/contactos-utiles.html' target='_blank'>Contactos Útiles</a> podrás encontrar diferentes establecimientos educativos. Tené en cuenta que todo esto es para nuestra localidad. Encontrarás más opciones en Lobos.&quot;,
&quot;estudio&quot;: &quot;Si te intersa realizar algún curso, consultá nuestra página de <a href='https://www.empalmelobos.com.ar/p/cursos-y-talleres-en-empalme-lobos.html' target='_blank'>Cursos y Talleres</a>. Además, en En nuestra página de <a href='https://www.empalmelobos.com.ar/p/contactos-utiles.html' target='_blank'>Contactos Útiles</a> podrás encontrar diferentes establecimientos educativos. Tené en cuenta que todo esto es para nuestra localidad. Encontrarás más opciones en Lobos.&quot;,
&quot;escuela&quot;: &quot;Si te intersa realizar algún curso, consultá nuestra página de <a href='https://www.empalmelobos.com.ar/p/cursos-y-talleres-en-empalme-lobos.html' target='_blank'>Cursos y Talleres</a>. Además, en En nuestra página de <a href='https://www.empalmelobos.com.ar/p/contactos-utiles.html' target='_blank'>Contactos Útiles</a> podrás encontrar diferentes establecimientos educativos. Tené en cuenta que todo esto es para nuestra localidad. Encontrarás más opciones en Lobos.&quot;,
&quot;escuelas&quot;: &quot;Si te intersa realizar algún curso, consultá nuestra página de <a href='https://www.empalmelobos.com.ar/p/cursos-y-talleres-en-empalme-lobos.html' target='_blank'>Cursos y Talleres</a>. Además, en En nuestra página de <a href='https://www.empalmelobos.com.ar/p/contactos-utiles.html' target='_blank'>Contactos Útiles</a> podrás encontrar diferentes establecimientos educativos. Tené en cuenta que todo esto es para nuestra localidad. Encontrarás más opciones en Lobos.&quot;,
&quot;actualizar&quot;: &quot;Si tenés algún dato para actualizar en nuestro sitio, por favor escribinos a empalmelobosweb@gmail.com&quot;,
&quot;actualización&quot;: &quot;Si tenés algún dato para actualizar en nuestro sitio, por favor escribinos a empalmelobosweb@gmail.com&quot;,
&quot;actualizacion&quot;: &quot;Si tenés algún dato para actualizar en nuestro sitio, por favor escribinos a empalmelobosweb@gmail.com&quot;
  };

  // Referencias de elementos
  var chatbotButton = document.getElementById(&quot;chatbot-button&quot;);
  var chatbotWindow = document.getElementById(&quot;chatbot-window&quot;);
  var chatbotInput = document.getElementById(&quot;chatbot-input&quot;);
  var chatbotSend = document.getElementById(&quot;chatbot-send&quot;);
  var chatbotMessages = document.getElementById(&quot;chatbot-messages&quot;);

  // Mostrar u ocultar la ventana del chatbot al hacer clic en el botón
  chatbotButton.addEventListener(&quot;click&quot;, function(event) {
    if (chatbotWindow.style.display === &quot;none&quot; || chatbotWindow.style.display === &quot;&quot;) {
      chatbotWindow.style.display = &quot;flex&quot;;
    } else {
      chatbotWindow.style.display = &quot;none&quot;;
    }
    event.stopPropagation();
  });

  // Cerrar el chatbot al hacer clic fuera de la ventana
  document.addEventListener(&quot;click&quot;, function(event) {
    if (event.target !== chatbotButton) {
      if (!chatbotWindow.contains(event.target)) {
        chatbotWindow.style.display = &quot;none&quot;;
      }
    }
  });

  // Agregar mensaje al chat
function addMessage(content, sender) {
    var message = document.createElement(&quot;div&quot;);
    message.classList.add(&quot;message&quot;, sender);
    message.innerHTML = content;
    chatbotMessages.appendChild(message);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Manejo del envío del mensaje
chatbotSend.addEventListener(&quot;click&quot;, function() {
    var userInput = chatbotInput.value.trim();
    if (userInput !== &quot;&quot;) {
        addMessage(userInput, &quot;user&quot;);

        // Mostrar &quot;escribiendo...&quot; y luego la respuesta real con un delay
        var typingMessage = document.createElement(&quot;div&quot;);
        typingMessage.classList.add(&quot;message&quot;, &quot;bot&quot;);
        typingMessage.innerHTML = &quot;Escribiendo...&quot;;
        chatbotMessages.appendChild(typingMessage);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

        // Obtener la respuesta con un retraso
        setTimeout(function() {
            typingMessage.remove();  // Elimina el mensaje de &quot;escribiendo...&quot;
            var botResponse = getResponse(userInput);
            addMessage(botResponse, &quot;bot&quot;);
        }, 1000); // Ajusta el tiempo de delay en milisegundos (1000 ms = 1 segundo)

        chatbotInput.value = &quot;&quot;;
    }
});


  // Normalizar la entrada del usuario
  function normalizeInput(userInput) {
    // Eliminar signos de puntuación y convertir a minúsculas
    return userInput.replace(/[&#161;!&#191;?.,;:*()]/g, &#39;&#39;).toLowerCase();
  }

  // Obtener respuesta del bot
  function getResponse(userInput) {
    var normalizedInput = normalizeInput(userInput);

    // Verificar palabras clave
    for (var keyword in keywordResponses) {
      if (normalizedInput.includes(keyword)) {
        return keywordResponses[keyword];
      }
    }

    // Respuesta por defecto o según pregunta específica
    return responses[normalizedInput] || responses[&quot;default&quot;];
  }

  // Manejo del envío del mensaje
  chatbotSend.addEventListener(&quot;click&quot;, function() {
    var userInput = chatbotInput.value.trim();
    if (userInput !== &quot;&quot;) {
      addMessage(userInput, &quot;user&quot;);
      var botResponse = getResponse(userInput);
      setTimeout(function() { addMessage(botResponse, &quot;bot&quot;); }, 500);
      chatbotInput.value = &quot;&quot;;
    }
  });

  // Enviar mensaje con la tecla &quot;Enter&quot;
  chatbotInput.addEventListener(&quot;keypress&quot;, function(event) {
    if (event.key === &quot;Enter&quot;) {
      chatbotSend.click();
    }
  });
</script>