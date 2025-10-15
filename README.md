
# Caso: Lista de Ofertas de Trabajo
Tu empresa lanzará una plataforma de reclutamiento de personas a nivel nacional, enfocada en conectar 
empresas con postulantes de manera rápida y amigable. La aplicación estará disponible para todo el Perú y se 
espera que sea intuitiva, inclusiva y atractiva visualmente.

## Framework Frontend
Vue 3.5 por su enfoque modular, rendimiento y facilidad de integración con bibliotecas modernas.

## Vuetify
Vuetify 3 para el diseño visual consistente, responsive y accesible, alineado con las guías de Material Design.

## Arquitectura de Componentes:
Se modularizó la pantalla principal (Home) en componentes reutilizables (Navbar, SearchBar, JobCard, FilterModal, Button) para mejorar la mantenibilidad y escalabilidad.

Se siguió una estructura jerárquica clara en /components y /views para separar lógica de la presentación.

## Alertas:
Se integró SweetAlert2 como sistema de notificaciones para ofrecer mensajes visualmente atractivos.

## Estilos Globales:
Se definieron estilos personalizados en src/assets/styles.css para adaptar el color del texto de botones y ajustar la identidad visual al tema de Talentos Perú.

## Diseño Responsive: 
El diseño se validó para funcionar correctamente tanto en dispositivos móviles como en escritorio, usando las utilidades grid de Vuetify.

## Compatibilidad
Node 22.20.0.

## Desplegar aplicacion
Instalar dependencias de la aplicacion:

```bash
npm install
```

Para iniciar un servidor de desarrollo local, ejecute:

```bash
npm run dev
```

## Otros desarrollos Frontend
Ejemplos usando Vue 3, Vuetify y otras bibliotecas [Frontend Vue 3](https://developer-marx-frontend-vue.netlify.app/)
Ejemplo usando Angular 19, Angular Material, NodeJS y PostgreSQL [Aplicacion Angular](https://apptorneoaniversario.onrender.com/)
Clave de acceso: campeones