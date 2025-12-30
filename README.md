# Burrin Saltador

Un juego estilo Chrome Dinosaur protagonizado por un burrito (burro pequeño) que corre y salta obstáculos.

## Requisitos

- [Deno](https://deno.land/) v1.37 o superior

## Cómo ejecutar

```bash
# Iniciar el servidor
deno task start

# O con auto-recarga para desarrollo
deno task dev
```

Luego abre http://localhost:8000 en tu navegador.

## Cómo jugar

- Presiona **ESPACIO** o **Flecha Arriba** para saltar
- También puedes hacer **clic** o **tocar** la pantalla en dispositivos móviles
- Evita los cactus y los pájaros
- La velocidad aumenta conforme avanza tu puntuación

## Estructura del proyecto

```
burrin-saltador/
├── deno.json       # Configuración de Deno y tareas
├── server.ts       # Servidor HTTP simple
├── public/
│   └── index.html  # Juego con sprites pixel art
└── README.md
```

## Características

- Pixel art dibujado con canvas
- Personaje humanoide con cabeza de burro
- Animación de correr con dos frames
- Obstáculos: cactus y pájaros
- Nubes de fondo
- Sistema de puntuación y récord
- Velocidad progresiva
# burrin-saltador
