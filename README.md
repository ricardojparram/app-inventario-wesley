
# App Inventario Wesley

**App Inventario Wesley** es una aplicación móvil desarrollada con React Native y Expo que permite gestionar inventarios de manera eficiente. Esta aplicación está diseñada para facilitar el control de productos, realizar seguimiento de stock y generar reportes.

## Características principales

- **Búsqueda y filtrado**: Buscar productos por nombre, categoría o código.
- **Reportes**: Generar reportes de stock y movimientos.
- **Interfaz intuitiva**: Diseño amigable y fácil de usar.

## Tecnologías utilizadas

- **React Native**: Framework para desarrollo de aplicaciones móviles multiplataforma.
- **Expo**: Plataforma para desarrollar y desplegar aplicaciones React Native.
- **React Navigation**: Navegación entre pantallas.
- **Zustand**: Gestión del estado global de la aplicación.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (v16 o superior)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- Un dispositivo físico o un emulador para probar la aplicación.

## Instalación

Sigue estos pasos para configurar el proyecto en tu máquina local:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/ricardojparram/app-inventario-wesley.git
   ```

2. Navega al directorio del proyecto:
   ```bash
   cd app-inventario-wesley
   ```

3. Instala las dependencias:
   ```bash
   npm install
   ```

4. Inicia el servidor de desarrollo:
   ```bash
   npm start
   ```

5. Escanea el código QR con la aplicación Expo Go (disponible en [iOS](https://apps.apple.com/app/expo-go/id982107779) y [Android](https://play.google.com/store/apps/details?id=host.exp.exponent)) o ejecuta la aplicación en un emulador.

## Estructura del proyecto

```
app-inventario-wesley/
├── assets/               # Recursos multimedia (imágenes, fuentes, etc.)
├── components/           # Componentes reutilizables
├── global/               # Constantes y varibales globales
├── screens/              # Pantallas de la aplicación
├── navigate/             # Configuración de la navegación
├── hooks/                # Todos los custom hooks
├── store/                # Stores hechas con zustand
├── utils/                # Utilidades para usar en partes del proyecto
├── tests/                # Tests hechos con jest
├── App.js                # Punto de entrada de la aplicación
├── package.json          # Dependencias y scripts del proyecto
└── README.md             # Este archivo
```
