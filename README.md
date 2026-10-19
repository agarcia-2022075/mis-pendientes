# Respuestas del Mini Proyecto

## Sección 1: Conocimientos previos

### ¿Qué lenguajes de programación o herramientas ha utilizado en sus clases o proyectos?
Durante mi formación full-stack y en proyectos personales, he trabajado con las siguientes tecnologías:
- **Lenguajes:** Java, TypeScript, JavaScript y SQL.
- **Frameworks y librerías:** Spring Boot, Angular, Node.js, Express, Next.js, React 19 y Tailwind CSS.
- **Bases de datos:** PostgreSQL y MySQL.
- **Control de versiones:** Git y GitHub.

### ¿Ha realizado algún proyecto o ejercicio? Describa brevemente qué hizo.
- **Control de Gastos:** Aplicación web full-stack para registro y categorización de ingresos y egresos personales, con autenticación, frontend en Angular, backend modular en Node.js/Express y persistencia en PostgreSQL.
- **KinalApp:** API REST orientada a control de inventario y compras desarrollada en Java con Spring Boot, validaciones y arquitectura en capas.
- **Club Parfum (Perfumería):** Desarrollo de una plataforma web y PWA para una tienda de fragancias y productos aromáticos artesanales en Francia. Incluye catálogo interactivo, panel administrativo para gestión autónoma de productos/pedidos.

### ¿Qué programa utiliza para escribir código?
- **Visual Studio Code**

### Cuando un programa no funciona, ¿qué hace para encontrar el problema?
- **Revisión de logs y trazas de error:** Análisis detallado en consola para identificar el archivo y la línea exacta de la falla.
- **Apoyo en herramientas de Inteligencia Artificial:** Consulta a asistentes de IA proporcionando el contexto del error para evaluar posibles causas y soluciones.

---

## Sección 2: Git y GitLab

### ¿Ha escuchado hablar de Git o GitLab? ¿Ha utilizado alguno?
Sí, he utilizado Git de forma continua en mis proyectos académicos y personales para el control de versiones local y sincronización con GitHub. Sobre GitLab, había escuchado de su existencia como plataforma para repositorios, pero honestamente no he trabajado directamente en ella todavía.

### Investigue y explique con sus palabras para qué sirve Git.
Git es un sistema de control de versiones distribuido que sirve para registrar el historial de cambios realizados en el código a lo largo del tiempo. Permite recuperar versiones anteriores si algo falla, trabajar en diferentes funcionalidades mediante ramas sin alterar el código estable y colaborar con otros desarrolladores de forma ordenada y eficiente.

### ¿Qué entiende por repositorio y por commit?
- **Repositorio:** Es el espacio o carpeta manejada por Git donde se almacenan todos los archivos del proyecto junto con el historial completo de cambios, ramas y configuraciones.
- **Commit:** Es una confirmación que guarda un conjunto de cambios específicos en el historial del repositorio, en el cual se incluye un mensaje descriptivo que explica qué se modificó.

### ¿Cuál es la diferencia entre Git y GitLab? ¿Qué significan push y pull?
- **Diferencia entre Git y GitLab:** Git es la herramienta de software que gestiona el control de versiones de forma local en la computadora. GitLab es una plataforma de servicios en la nube (similar a GitHub) que aloja repositorios remotos de Git y añade funciones para el trabajo en equipo, como seguimiento de tareas, revisión de código e integración de herramientas de CI/CD para compilar, probar y desplegar proyectos automáticamente.
- **`push`:** Es la acción de subir los cambios y commits locales al repositorio remoto para compartirlos con el equipo o mantener una copia de respaldo en la nube.
- **`pull`:** Es la acción de descargar e incorporar en nuestro entorno local los últimos cambios que otros colaboradores hayan subido al repositorio remoto.

---

## Sección 3: Explicación del proyecto

La aplicación es una interfaz ligera desarrollada con **HTML5**, **CSS3** y **JavaScript puro (Vanilla JS)**:
- Maneja un arreglo de objetos en memoria con tareas iniciales de ejemplo.
- El formulario captura entradas de texto, valida que no estén vacías y genera una nueva tarea asignándole un identificador único basado en timestamp.
- Cuenta con casillas de verificación para alternar el estado completado (aplicando tachado visual) y botones dinámicos (`✕`) para remover tareas del arreglo y redibujar la vista en el DOM.
- Incluye una barra de filtros interactiva (*Todas*, *Pendientes*, *Terminadas*) y un contador dinámico que refleja el estado actual de los pendientes.
- La interfaz presenta un diseño responsivo con fondo en degradado suave y tipografía del sistema para una carga instantánea sin dependencias externas.

### Notas finales
- **Qué logré:** Implementé todos los requerimientos funcionales solicitados (pantalla titulada «Mis pendientes», tareas de ejemplo, inserción de nuevas tareas, marcado de completado y eliminación), además de la inicialización del repositorio local en Git registrando dos commits descriptivos en la rama principal.
- **Qué me costó:** Decidir la arquitectura más rápida para completarlo con código limpio sin necesidad de configurar compiladores o dependencias innecesarias.
- **Qué aprendí:** La importancia de estructurar soluciones simples y directas que cumplan con precisión los requerimientos dados bajo un margen de tiempo acotado.

### Posibles mejoras a futuro
- **Edición en línea:** Permitir modificar el texto de tareas ya existentes con doble clic o un botón de edición.
- **Prioridades y fechas:** Asignar fechas límite o etiquetas de prioridad para categorizar los pendientes.

---

## Sección 4: Mejoras aplicadas bajo criterio propio

Una lista de tareas en memoria pierde los datos al recargar la página. Con criterio de usabilidad, integré persistencia con localStorage para que el usuario mantenga sus tareas reales guardadas en su navegador sin necesidad de montar una base de datos pesada.
