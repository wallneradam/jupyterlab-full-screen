# @wallneradam/full_screen

Full screen command and menu.

It creates a menu entry under View menu and a command in the command palette. Clicking it will make the app full screen. It make sense when you use JupyterLab in a chrome application, not in the browser. Because applications can't go full screen by pressing F11 (or other key combinations), just programmatically.

I created an app from JupyterLab with this: https://applicationize.me/


## Prerequisites

* JupyterLab

## Installation

```bash
jupyter labextension install @wallneradam/full_screen
```

## Development

For a development install (requires npm version 4 or later), do the following in the repository directory:

```bash
npm install
npm run build
jupyter labextension link .
```

To rebuild the package and the JupyterLab app:

```bash
npm run build
jupyter lab build
```

