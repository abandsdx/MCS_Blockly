/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

// The main script to initialize the Blockly workspace.

// Get the toolbox XML from the document.
const toolbox = document.getElementById('toolbox');

// Inject the Blockly workspace.
const workspace = Blockly.inject('blocklyDiv', {
  toolbox: toolbox,
  scrollbars: true,
  trashcan: true,
  zoom: {
    controls: true,
    wheel: true,
    startScale: 1.0,
    maxScale: 3,
    minScale: 0.3,
    scaleSpeed: 1.2
  }
});

/**
 * Generates JavaScript code from the workspace and displays it.
 */
function showCode() {
  // Generate JavaScript code.
  const code = Blockly.JavaScript.workspaceToCode(workspace);

  // Display the code in the preformatted area.
  const codeArea = document.getElementById('codeArea');
  codeArea.textContent = code;
}
