# MyTaks

**MyTasks** es un **Servidor de Lista de Tareas** diseñado para ayudar a las personas a organizar y gestionar sus tareas diarias de manera eficiente. Es una herramienta digital que permite crear, ver, actualizar y eliminar tareas, lo que facilita el seguimiento de actividades pendientes, completadas o en progreso.

Este servidor es ideal para:

- Personas que desean organizar su día a día.
- Cualquier persona que busque una solución simple y efectiva para gestionar sus actividades.

---

# Funcionalidades ✅

1. 🗒️ **Crear nuevas tareas.**
    - Los usuarios pueden agregar tareas con una descripción clara y un estado inicial (completada o incompleta).
2. 📋 **Ver todas las tareas:**
    - Se pueden listar todas las tareas registradas en el sistema.
3. ❔ **Ver todas tus actividades pendientes o completadas.**
    - Es posible visualizar solo las tareas completadas o pendientes.
4. ✏️ **Actualizar detalles o estados de tus tareas.**
    - Los usuarios pueden modificar el estado o descripción de una tarea existente.
5. 🗑️ **Eliminar tareas que ya no necesites.**
    - Permite eliminar tareas que ya no sean necesarias.
6. 🎯 **Obtener una tarea específica:** 
    - Permite consultar los detalles de una tarea en particular, lo que es útil para revisar o editar tareas individuales.

---

# Tecnologías 👩🏻‍💻

Para construir este servidor, utilicé las siguientes tecnologías:

1. **Node.js:**
    - Es una plataforma que permite ejecutar JavaScript en el servidor.
        - Es rápido, eficiente y tiene una gran comunidad de soporte.
2. **Express.js:**
    - Es un framework de Node.js que simplifica la creación de aplicaciones web y APIs.
        - Facilita la definición de rutas y el manejo de solicitudes HTTP de manera organizada.
3. **JavaScript:**
    - Es el lenguaje de programación utilizado para desarrollar la lógica del servidor.
        - Es un lenguaje ampliamente conocido y versátil, ideal para aplicaciones web.
4. **JSON (JavaScript Object Notation):**
    - Es un formato ligero para el intercambio de datos.
        - Es fácil de leer y escribir, tanto para humanos como para máquinas, lo que lo hace perfecto para APIs.
5. **JWT (JSON Web Tokens):** 
    - Es un estándar para la autenticación de usuarios. 
        - Lo implementé para asegurar el acceso a ciertas funcionalidades del servidor.
5. **Middlewares Personalizados**:
   - Son funciones que validan y procesan las solicitudes antes de que lleguen a su destino.
        - Aseguran que los datos enviados por los usuarios sean correctos y evitan errores en el servidor.
6. **Git y GitHub:**
    - Herramientas para el control de versiones y alojamiento de código.
        - Nos permite mantener un historial de cambios y facilitan la colaboración en equipo.
5. **Postman (para pruebas)**:
   - Herramienta para probar APIs.
        - Nos permite verificar que todas las funcionalidades del servidor funcionen correctamente antes de ponerlo en producción.
---

# **Beneficios clave 🏋️**

- ✅ **Simpleza:** Fácil de usar, sin complicaciones técnicas.
- ✅ **Flexibilidad:** Permite gestionar tareas de manera personalizada.
- ✅ **Confiable:** Tus tareas están siempre disponibles y seguras a través de una API.
- ✅ **Manejo de Errores**: Proporciona respuestas claras y útiles en caso de problemas, mejorando la experiencia del usuario.

# **Manejo de Errores ⚠️**
- El servidor está diseñado para manejar errores de manera eficiente, asegurando que los usuarios reciban respuestas claras y útiles en caso de problemas. Está aplicado a:

    - Validación de Datos
    - Métodos HTTP no Permitidos
    - Recursos no Encontrados
    - Parámetros Inválidos
    - Errores Internos del Servidor
---

### **¿Cómo usar el producto?**

1. Clona el repositorio de GitHub.
2. Instala las dependencias necesarias con `npm install`, `npm install express`. 
3. Ejecuta el servidor con `node src/index.js`.
4. Usa herramientas como Postman para interactuar con la API.

✨ Mytask no es solo un servidor: es tu aliado para ser más productivo. ✨