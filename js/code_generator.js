// This file will contain the code generation logic for our custom blocks.

// Define a custom JavaScript generator if it doesn't exist.
Blockly.JavaScript = Blockly.JavaScript || new Blockly.Generator('JavaScript');

// --- Data Structure Generators ---

Blockly.JavaScript['data_location'] = function(block) {
  const coordinate = block.getFieldValue('COORDINATE');
  const name = block.getFieldValue('NAME');
  const type = block.getFieldValue('TYPE');

  // Create a JSON-like object string.
  const obj = {
    coordinate: coordinate,
    name: name,
    type: type
  };

  // Return the object string and a precedence operator.
  return [JSON.stringify(obj, null, 2), Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['data_door'] = function(block) {
  const id = block.getFieldValue('ID');
  const enable = block.getFieldValue('ENABLE') === 'TRUE'; // Convert to boolean

  const obj = {
    id: id,
    enable: enable
  };

  return [JSON.stringify(obj, null, 2), Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['data_order'] = function(block) {
    const type = block.getFieldValue('TYPE');
    const name = block.getFieldValue('NAME');
    const size = block.getFieldValue('SIZE');

    const obj = {
        type: type,
        name: name,
        size: size
    };

    return [JSON.stringify(obj, null, 2), Blockly.JavaScript.ORDER_ATOMIC];
};


// --- Combine Command Generators ---

Blockly.JavaScript['adapter_combine_navigation_open_door'] = function(block) {
    const location = Blockly.JavaScript.valueToCode(block, 'LOCATION', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
    const door = Blockly.JavaScript.valueToCode(block, 'DOOR', Blockly.JavaScript.ORDER_ATOMIC) || '[]';
    const code = `await sendCommand({ command: 'adapter_combine_navigation_open_door', location: ${location}, door: ${door} });\n`;
    return code;
};

Blockly.JavaScript['adapter_combine_navigation_switch_map'] = function(block) {
    const location = Blockly.JavaScript.valueToCode(block, 'LOCATION', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
    const map = Blockly.JavaScript.valueToCode(block, 'MAP', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
    const code = `await sendCommand({ command: 'adapter_combine_navigation_switch_map', location: ${location}, map: ${map} });\n`;
    return code;
};

Blockly.JavaScript['adapter_combine_navi_manual_order'] = function(block) {
    const location = Blockly.JavaScript.valueToCode(block, 'LOCATION', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
    const door = Blockly.JavaScript.valueToCode(block, 'DOOR', Blockly.JavaScript.ORDER_ATOMIC) || '[]';
    const orderList = Blockly.JavaScript.valueToCode(block, 'ORDER_LIST', Blockly.JavaScript.ORDER_ATOMIC) || '[]';
    const code = `await sendCommand({ command: 'adapter_combine_navi_manual_order', location: ${location}, door: ${door}, orderList: ${orderList} });\n`;
    return code;
};

Blockly.JavaScript['adapter_combine_navi_pickup_ui'] = function(block) {
    const location = Blockly.JavaScript.valueToCode(block, 'LOCATION', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
    const door = Blockly.JavaScript.valueToCode(block, 'DOOR', Blockly.JavaScript.ORDER_ATOMIC) || '[]';
    const uiType = block.getFieldValue('UI_PICKUP_TYPE');
    const code = `await sendCommand({ command: 'adapter_combine_navi_pickup_ui', location: ${location}, door: ${door}, ui_pickup_type: '${uiType}' });\n`;
    return code;
};

Blockly.JavaScript['adapter_combine_navi_charging_ui'] = function(block) {
    const location = Blockly.JavaScript.valueToCode(block, 'LOCATION', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
    const code = `await sendCommand({ command: 'adapter_combine_navi_charging_ui', location: ${location} });\n`;
    return code;
};

Blockly.JavaScript['data_map'] = function(block) {
  const id = block.getFieldValue('ID');
  const name = block.getFieldValue('NAME');
  const archive = block.getFieldValue('ARCHIVE');

  const obj = {
    id: id,
    name: name,
    archive: archive
  };

  return [JSON.stringify(obj, null, 2), Blockly.JavaScript.ORDER_ATOMIC];
};

// --- Map and Location Generators ---

Blockly.JavaScript['adapter_switch_map'] = function(block) {
  const map = Blockly.JavaScript.valueToCode(block, 'MAP', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const code = `await sendCommand({ command: 'adapter_switch_map', map: ${map} });\n`;
  return code;
};

Blockly.JavaScript['adapter_apply_map'] = function(block) {
  const map = Blockly.JavaScript.valueToCode(block, 'MAP', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const code = `await sendCommand({ command: 'adapter_apply_map', map: ${map} });\n`;
  return code;
};

Blockly.JavaScript['adapter_local_locate'] = function(block) {
  const location = Blockly.JavaScript.valueToCode(block, 'LOCATION', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const code = `await sendCommand({ command: 'adapter_local_locate', location: ${location} });\n`;
  return code;
};

Blockly.JavaScript['adapter_global_locate'] = function(block) {
  const code = `await sendCommand({ command: 'adapter_global_locate' });\n`;
  return code;
};


// --- UI and Password Generators ---

Blockly.JavaScript['adapter_pickup_ui'] = function(block) {
  const uiType = block.getFieldValue('UI_PICKUP_TYPE');
  const password = block.getFieldValue('PASSWORD');
  const doors = Blockly.JavaScript.valueToCode(block, 'DOORS', Blockly.JavaScript.ORDER_ATOMIC) || '[]';

  let commandData = {
    command: 'adapter_pickup_ui',
    ui_pickup_type: uiType,
    door: JSON.parse(doors) // This will be fixed in the wrapper
  };

  // Only include password if it's not empty
  if (password) {
    commandData.password = password;
  }

  const code = `await sendCommand({ command: 'adapter_pickup_ui', ui_pickup_type: '${uiType}', password: '${password}', door: ${doors} });\n`;
  return code;
};

Blockly.JavaScript['adapter_charging_ui'] = function(block) {
  const code = `await sendCommand({ command: 'adapter_charging_ui' });\n`;
  return code;
};

Blockly.JavaScript['adapter_pass_opt_password'] = function(block) {
  const password = block.getFieldValue('PASSWORD');
  const code = `await sendCommand({ command: 'adapter_pass_opt_password', password: '${password}' });\n`;
  return code;
};


// --- Command Block Generators ---

Blockly.JavaScript['adapter_new_task_notification'] = function(block) {
  const code = `await sendCommand({ command: 'adapter_new_task_notification' });\n`;
  return code;
};

Blockly.JavaScript['adapter_complete_task'] = function(block) {
  const code = `await sendCommand({ command: 'adapter_complete_task' });\n`;
  return code;
};

Blockly.JavaScript['adapter_interrupt_task'] = function(block) {
  const code = `await sendCommand({ command: 'adapter_interrupt_task' });\n`;
  return code;
};

Blockly.JavaScript['adapter_pause_task'] = function(block) {
  const code = `await sendCommand({ command: 'adapter_pause_task' });\n`;
  return code;
};

Blockly.JavaScript['adapter_resume_task'] = function(block) {
  const code = `await sendCommand({ command: 'adapter_resume_task' });\n`;
  return code;
};

Blockly.JavaScript['adapter_interrupt_command'] = function(block) {
  const code = `await sendCommand({ command: 'adapter_interrupt_command' });\n`;
  return code;
};

Blockly.JavaScript['adapter_navigation_stop'] = function(block) {
  const code = `await sendCommand({ command: 'adapter_navigation_stop' });\n`;
  return code;
};

Blockly.JavaScript['adapter_navigation'] = function(block) {
  const location = Blockly.JavaScript.valueToCode(block, 'LOCATION', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const commandData = {
    command: 'adapter_navigation',
    location: JSON.parse(location) // We need the object itself, not the string representation
  };
  // We need to handle the object carefully. The valueToCode returns a string, so we'll build the final object in the wrapper.
  const code = `await sendCommand({ command: 'adapter_navigation', location: ${location} });\n`;
  return code;
};

Blockly.JavaScript['adapter_delivery_middle_layer_control'] = function(block) {
  const doors = Blockly.JavaScript.valueToCode(block, 'DOORS', Blockly.JavaScript.ORDER_ATOMIC) || '[]';
  const code = `await sendCommand({ command: 'adapter_delivery_middle_layer_control', door: ${doors} });\n`;
  return code;
};


// --- Mission Wrapper Generator ---

Blockly.JavaScript['mission_start'] = function(block) {
  const missionId = block.getFieldValue('MISSION_ID');
  const uid = block.getFieldValue('UID');
  const sn = block.getFieldValue('SN');

  const commands = Blockly.JavaScript.statementToCode(block, 'COMMANDS');

  const code = `
/**
 * =================================
 *  Generated Mission Code
 * =================================
 */

// Helper function to send a command to the robot API.
async function sendCommand(commandData) {
  const apiUrl = '/rms/mission/robot/command';
  const authToken = 'Basic bWlzc2lvbjpudXdhMDA='; // From document: mission:nuwa00

  const body = {
    missionId: '${missionId}',
    uId: '${uid}',
    sn: '${sn}',
    ...commandData
  };

  console.log('Sending command:', body.command, body);

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': authToken
      },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      console.error('HTTP Error:', response.status, response.statusText);
      const errorBody = await response.json();
      console.error('Error details:', errorBody);
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }

    const result = await response.json();
    console.log('Received ack:', result);

    if (result.data && result.data.result !== 'success') {
      console.error('Server reported command failed:', result);
      throw new Error('Command failed to be accepted by server.');
    }

    // A short delay to simulate robot action time
    await new Promise(resolve => setTimeout(resolve, 500));

    return result;
  } catch (error) {
    console.error('Failed to send command:', error);
    // Stop the mission on failure
    throw error;
  }
}

// Main function to run the entire mission sequence.
async function runMission() {
  try {
    console.log('🚀 Mission Starting... (ID: ${missionId})');
${commands}
    console.log('✅ Mission Completed Successfully.');
  } catch (error) {
    console.error('🛑 Mission Failed:', error.message);
  }
}

// To run the mission, call runMission() in the browser console.
// runMission();
`;
  return code;
};
