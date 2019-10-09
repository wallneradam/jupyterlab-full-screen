const PLUGIN_NAME = "@wallneradam/full_screen";
const COMMAND = "full_screen:toggle"
const CAPTION = "Full Screen"
const CATEGORY = "Main Area"


import { JupyterFrontEnd, JupyterFrontEndPlugin } from '@jupyterlab/application';
import { ICommandPalette } from '@jupyterlab/apputils';
import { IMainMenu } from '@jupyterlab/mainmenu';


const extension: JupyterFrontEndPlugin<void> = {
    id: '@wallneradam/full_screen',
    autoStart: true,
    requires: [ICommandPalette, IMainMenu],

    activate: (app: JupyterFrontEnd, palette: ICommandPalette, mainmenu: IMainMenu) => {
        console.log(`JupyterLab extension ${PLUGIN_NAME} is activated!`);

        let el = document.documentElement,
            rfs = el.requestFullscreen,
            efs = document.exitFullscreen;

        let isFullScreen = () => !!document.fullscreenElement;

        app.commands.addCommand(COMMAND, {
            label: CAPTION,
            execute: () => {
                if (isFullScreen())
                    efs.call(document);
                else
                    rfs.call(el);
            },
            isToggled: () => isFullScreen(),
            isVisible: () => true
        });

        if (palette) palette.addItem({ command: COMMAND, category: CATEGORY });
        if (mainmenu) mainmenu.viewMenu.addGroup([{ command: COMMAND }]);
    }
};

export default extension;
