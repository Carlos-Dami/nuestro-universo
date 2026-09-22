# Nuestro Universo — P&C

## Probar y publicar
Descomprime el ZIP y abre index.html. No necesita instalación ni compilación.
Para publicar, sube los cuatro archivos de esta carpeta a un alojamiento estático como GitHub Pages o Netlify. Las fuentes de Google necesitan conexión; sin conexión se usan fuentes de reserva.

## Contenido
Hay exactamente 30 estrellas en el cielo: 24 recuerdos, 5 cartas ocultas y 1 estrella de la boda del 24/07/2027. El bloque inferior abre también el recuerdo de la boda; no es una estrella adicional.
La estrella secreta original es una de las cinco cartas. Tras leerla, «Un secreto más» abre el final P ✦ C original.
Las cartas parecen estrellas de fondo tenues, sin rótulos ni pistas al pasar el ratón, pero se pueden tocar o explorar con el teclado. Están ocultas visualmente, no protegidas con contraseña.

## Personalizar
Edita el array memories de app.js: date, title y text. Los textos nuevos son ejemplos románticos para sustituir; los saltos de párrafo se escriben como \n\n. Las cinco cartas tienen letter: true; la original tiene también secret: true. Mantén esos indicadores para conservar su comportamiento.
El universo mide 2400 × 1800 píxeles. Arrastra con el ratón o el dedo para recorrerlo en cualquier dirección; también puedes usar el trackpad, la rueda del ratón o las flechas con el cielo enfocado. «Volver al centro» recupera la vista inicial. Las 30 estrellas están distribuidas por el mapa completo, así que hay que explorar para encontrarlas. El título y el bloque de boda permanecen fijos. Las coordenadas se calculan junto a worldWidth y worldHeight en app.js.
La cuenta atrás conserva la fecha y hora del original: 24/07/2027 a las 13:00, hora de verano de España peninsular.
Las tarjetas normales conservan el espacio «Vuestra foto aquí» de la versión original. Las cartas se muestran como texto, sin foto.


## Música
La versión de piano facilitada está incluida en audio/piano.mp3. Funciona sin YouTube y sin conexión, también abriendo index.html directamente. Pulsa «Entrar en nuestro universo» para iniciar el fondo musical a un volumen del 22%, en repetición. «Entrar sin música» permite explorar en silencio. El botón ♫/♪ reproduce o pausa; leer cartas y moverse no interrumpe la música.
Para ajustar el volumen inicial, cambia music.volume=.22 en app.js (valor entre 0 y 1). Puedes sustituir audio/piano.mp3 conservando ese nombre. Al publicar, incluye la carpeta audio.
