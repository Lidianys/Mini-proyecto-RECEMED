# Proyecto de Autenticación con React

Este proyecto es una aplicación de autenticación que utiliza React con rutas y autenticación de usuarios. Se implementa tanto el renderizado en el servidor (SSR) como el renderizado en el cliente (CSR) para optimizar la experiencia del usuario.

## Implementación de SSR y CSR

### Server-Side Rendering (SSR)
En este proyecto, el SSR se implementa para mejorar el rendimiento y la optimización en motores de búsqueda (SEO). Cuando un usuario solicita una página, el servidor genera el HTML dinámicamente utilizando `renderToString` de `react-dom/server`. Este proceso convierte los componentes de React en una cadena de HTML que se envía al cliente.

El SSR se configura en el servidor Express. Cuando se recibe una solicitud, el servidor:

1. Lee el archivo `index.html` desde la carpeta `dist`.
2. Inserta el HTML generado por `renderToString` en el marcador `<!--app-->` dentro del `index.html`.
3. Sirve el HTML final al cliente.

Este enfoque permite que los usuarios vean el contenido de la página más rápido y mejora la accesibilidad para los motores de búsqueda, ya que el contenido completo ya está en el HTML cuando se carga la página.

**Archivo relacionado:**
- `entry-server.js`: Contiene la lógica de renderizado del lado del servidor.
- `server.js`: Configura el servidor Express para servir el HTML generado.

### Client-Side Rendering (CSR)
Una vez que el HTML inicial es cargado en el navegador, React toma el control y transforma la aplicación en una SPA (Single Page Application). Esto significa que la navegación entre rutas ocurre sin recargar la página completa, proporcionando una experiencia de usuario más fluida.

CSR se maneja principalmente en el archivo `App.js`, donde se definen las rutas utilizando `react-router-dom`. El uso de hooks como `useState` y `useEffect` permite manejar el estado de la aplicación y efectos colaterales como las solicitudes de datos.

El flujo CSR incluye:

1. Cargar y renderizar componentes en el navegador.
2. Manejar la lógica de autenticación y almacenamiento en el `localStorage`.
3. Navegar entre las rutas `/`, `/login-password`, y `/dashboard` sin recargar la página completa.

**Archivos relacionados:**
- `App.js`: Define las rutas y la estructura principal de la aplicación.
- `LoginPageRut.js`, `LoginPagePassword.js`, `PrescriptionsPage.js`: Componentes principales que manejan las páginas de la aplicación.

## Motivo de los Unit Tests

Los unit tests son esenciales para asegurar que cada componente de la aplicación funcione correctamente de manera aislada. 

Este unit test verifica tres aspectos clave del componente `LoginPageRut`:

1. **Renderizado de Elementos**: Asegura que los elementos principales del componente, como el campo de entrada para el RUT y el botón "Siguiente", se rendericen correctamente en la pantalla.

2. **Navegación Correcta**: Comprueba que, al ingresar un RUT válido y hacer clic en el botón "Siguiente", el componente navegue correctamente a la ruta `/login-password` y pase el RUT ingresado como estado.

3. **Manejo de Errores**: Verifica que, si el campo del RUT está vacío y el usuario hace clic en el botón "Siguiente", se muestre una alerta indicando que se debe ingresar un RUT válido.

Estos tests garantizan que el componente `LoginPageRut` maneje correctamente la entrada del usuario y la navegación, así como que responda adecuadamente a situaciones de error.

Los unit tests proporcionan confianza a la hora de realizar cambios o refactorizaciones en el código, asegurando que las nuevas implementaciones no rompan funcionalidades existentes.

**Framework de Testing:**
- **Jest**: Utilizado para correr los tests, con soporte integrado en Create React App.

## Comandos para Ejecutar el Proyecto y Unit Tests

### Instalación de Dependencias

Antes de ejecutar el proyecto o los tests, asegúrate de instalar todas las dependencias necesarias:

```bash
npm install
```

Tuve algunos problemas en la configuración del proyecto. Logré correr los test en varias ocasiones, pero por algunas configuraciones que cambié que no pude arreglar nuevamente, actualmente no estan corriendo con el comando correspondiente.

Igualmente no logré correr la aplicación con el comando npm start

Puede verificarla, corriendola en el entorno dev.

```bash
npm run dev
```

Para iniciar el servidor de desarrollo y ver la aplicación en tu navegador
```bash
npm start
```

Para ejecutar todos los unit tests
```bash
npm test
```

