// ==========================================================================
// Project: Alto Cli - JavaScript Cli Framework
// Copyright: @2018 The Code Boutique, Corp
// License:   MIT License (see license for details)
// Author: Chad Eubanks
// ==========================================================================

import CoreObject from "../foundation/core_object";
import init from "./generators/init";
let clc = require('cli-color');

let commands = CoreObject.create({

    version: '0.0.9',

    options: [{
        command: "init <application_name>",
        description: "Creates file structure for Alto-React Application",
        example: "alto init todos"
    }, {
        command: "help",
        description: "Display commands",
        example: "alto help"
    }, {
        command: "-v",
        description: "Display alto version",
        example: "alto -v"
    }],

    displayOptions: () => {
        let options = commands.options,
            formattedOptions = ['Alto-Cli Commands:'];

        options.forEach((option) => {
            formattedOptions.push(
                clc.xterm(255)(option.command),
                clc.xterm(153)(option.description),
                clc.xterm(230)(option.example),
                option.notes ? clc.xterm(219)(option.notes) : ''
            );
        });

        formattedOptions = formattedOptions.join('\n').replace(/^/gm, '    ');

        console.log(formattedOptions);
    },

    processEvent: (args) => {
        if (!args) {commands.displayOptions(); return ' '}

        const command = args[0];

        switch (command) {
            case 'init':
                init.action(args.slice(1, args.length));
                return ' ';
            case 'help':
                return commands.displayOptions();
            case '-v':
                return commands.get('version');
            default:
                commands.displayOptions();
                return ' '
        }

    }

});

export default commands;