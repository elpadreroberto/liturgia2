# Liturgia 2026

Página pública: https://elpadreroberto.github.io/liturgia2/

Laudes, Vísperas y Oficio van de noviembre a diciembre de 2026. Diciembre dice «en construcción». La Misa va de noviembre de 2026 a diciembre de 2027, con la Catena Aurea bajo cada evangelio. El botón de las líneas alterna el español, el latín y, en el Nuevo Testamento, el griego.

## Carga

`index.html` y `app.js` traen solo el calendario y la interfaz. El rezo se pide al abrirlo:

- `data/office/2026-11-13.json`: Laudes, Vísperas y Oficio de un día.
- `data/misa/2026-11.json`: lecturas de la Misa de ese mes, también las misas de más (Acción de Gracias, Navidad).
- `data/catena/2026-11-13.json`: la Catena Aurea de esa misa.
- `data/shared/`: himnos, criterios, oraciones de la misa, prefacios y plegarias, preces, Rosario y Completas. Cada bloque se descarga la primera vez que hace falta.

Octubre de 2026 sigue en `data/office`, `data/misa` y `data/catena`. El calendario de la página empieza en noviembre, igual que antes.

Mientras llega el archivo se lee «Cargando…». `sw.js` guarda lo ya visto para abrirlo sin red y para que la visita siguiente arranque al momento. El contador de visitas no se consulta al entrar: solo al abrir «Visitas» en la Misa.
