// ==========================================================================
// Project: Alto - JavaScript Application Framework
// Copyright: @2018 The Code Boutique, LLC
// License:   MIT License (see license for details)
// Author: Chad Eubanks
// ==========================================================================

let __alto__uuid__ = 0;

let generateGuid = function () {
    let uuid = `alto${__alto__uuid__ ++}`;
    return uuid;
};

export default generateGuid;