'use strict';

import Handlebars from 'handlebars/handlebars.runtime';


/**
 * Returns the first non-falsy value in a list of potential values.
 * Usage: {{firstof value1 value2 'default'}}
 */
Handlebars.registerHelper('firstof', (...args) => {
    let [vars, options] = [args.slice(0, args.length-1), args.slice(args.length-1)[0]];
    for (let i=0; i<vars.length; i++) {
        if (Handlebars.Utils.isEmpty(vars[i])) {
            continue;
        }
        return vars[i];
    }
    return '';
});


/**
 * Built in tag to be able to load custom helpers in the template itself
 */
Handlebars.registerHelper('load', () => {
    // this helper only gets parsed/executed on loading time, so return empty output
    return '';
});