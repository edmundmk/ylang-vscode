//
// ylangMain.js
//

'use strict';
define(["require", "exports", './ylangDef', 'monaco'], function(require, exports, ylangDef, monaco) {
	monaco.Modes.registerMonarchDefinition('ylang', ylangDef.language);
});
