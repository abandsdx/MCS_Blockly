// This file contains the definitions for our custom Blockly blocks.

// --- Mission Wrapper Block ---

Blockly.Blocks['mission_start'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("🚀 開始任務 (Start Mission)");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Mission ID")
        .appendField(new Blockly.FieldTextInput("mission-uuid-1234"), "MISSION_ID");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("User ID (uId)")
        .appendField(new Blockly.FieldTextInput("user-5678"), "UID");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Robot SN")
        .appendField(new Blockly.FieldTextInput("10391ZNNSD240400019"), "SN");
    this.appendStatementInput("COMMANDS")
        .setCheck(null)
        .appendField("命令 (Commands)");
    this.setColour(230);
    this.setTooltip("定義一個完整的機器人任務。");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['adapter_combine_navigation_switch_map'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("組合: 導航並切換地圖");
        this.appendValueInput("LOCATION")
            .setCheck("Location")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("導航至 (Navigate to)");
        this.appendValueInput("MAP")
            .setCheck("Map")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("切換至地圖 (Switch to Map)");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(20);
        this.setTooltip("導航到指定地點，然後切換地圖。");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['adapter_combine_navi_manual_order'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("組合: 導航並顯示放貨UI");
        this.appendValueInput("LOCATION")
            .setCheck("Location")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("導航至 (Navigate to)");
        this.appendValueInput("DOOR")
            .setCheck("Array")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("開啟艙門 (Open Door)");
        this.appendValueInput("ORDER_LIST")
            .setCheck("Array")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("訂單列表 (Order List)");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(20);
        this.setTooltip("導航到點並顯示人工訂單放貨UI。");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['adapter_combine_navi_pickup_ui'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("組合: 導航並顯示取物UI");
        this.appendValueInput("LOCATION")
            .setCheck("Location")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("導航至 (Navigate to)");
        this.appendValueInput("DOOR")
            .setCheck("Array")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("艙門 (Door)");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("UI類型 (ui_pickup_type)")
            .appendField(new Blockly.FieldDropdown([
                ["密碼取物 (Password)", "0"],
                ["無密碼取物 (No Password)", "1"]
            ]), "UI_PICKUP_TYPE");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(20);
        this.setTooltip("導航到點並顯示取物介面。");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['adapter_combine_navi_charging_ui'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("組合: 導航並充電");
        this.appendValueInput("LOCATION")
            .setCheck("Location")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("導航至充電站 (Navigate to Charger)");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(20);
        this.setTooltip("導航至充電點並顯示充電介面。");
        this.setHelpUrl("");
    }
};

// --- Combine Command Blocks ---

Blockly.Blocks['adapter_combine_navigation_open_door'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("組合: 導航並開門");
    this.appendValueInput("LOCATION")
        .setCheck("Location")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("導航至 (Navigate to)");
    this.appendValueInput("DOOR")
        .setCheck("Array")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("開啟艙門 (Open Door)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip("導航到指定地點，然後開啟指定的艙門。");
    this.setHelpUrl("");
  }
};


// --- UI and Password Command Blocks ---

Blockly.Blocks['adapter_pickup_ui'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("顯示取物介面 (Pickup UI)");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("UI類型 (ui_pickup_type)")
        .appendField(new Blockly.FieldDropdown([
            ["密碼取物 (Password)", "0"],
            ["無密碼取物 (No Password)", "1"]
        ]), "UI_PICKUP_TYPE");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("密碼 (password)")
        .appendField(new Blockly.FieldTextInput(""), "PASSWORD");
    this.appendValueInput("DOORS")
        .setCheck("Array")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("指定艙門 (door)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip("要求機器人展示取物介面，可指定類型、密碼和艙門。");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['adapter_charging_ui'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("顯示充電介面 (Charging UI)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip("要求機器人展示充電介面。");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['adapter_pass_opt_password'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("傳遞密碼 (Pass Password)")
        .appendField(new Blockly.FieldTextInput("1234"), "PASSWORD");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip("提供或更新操作密碼。");
    this.setHelpUrl("");
  }
};


// --- Map and Location Command Blocks ---

Blockly.Blocks['adapter_switch_map'] = {
  init: function() {
    this.appendValueInput("MAP")
        .setCheck("Map")
        .appendField("套用本地地圖 (Switch Map)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("套用裝置端已有之地圖。");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['adapter_apply_map'] = {
  init: function() {
    this.appendValueInput("MAP")
        .setCheck("Map")
        .appendField("下載並套用地圖 (Apply Map)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("下載地圖檔，並套用該地圖。");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['adapter_local_locate'] = {
  init: function() {
    this.appendValueInput("LOCATION")
        .setCheck("Location")
        .appendField("本地定位 (Local Locate at)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("指定地標，進行小範圍定位。");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['adapter_global_locate'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("全域定位 (Global Locate)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("在整個地圖範圍內進行定位。");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['adapter_navigation_stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("停止導航 (Stop Navigation)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip("要求機器人立刻停止移動。");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['adapter_interrupt_task'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("中斷任務 (Interrupt Task)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("強制中斷當前整個任務，讓機器人回到閒置狀態。");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['adapter_pause_task'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("暫停任務 (Pause Task)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("暫停當前任務。");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['adapter_resume_task'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("恢復任務 (Resume Task)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("恢復已暫停的任務。");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['adapter_interrupt_command'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("中斷當前命令 (Interrupt Command)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("中斷當前正在執行的命令，但任務本身還在繼續。");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['data_order'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("📦 商品 (Order)");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("類型 (type)")
        .appendField(new Blockly.FieldTextInput("normal"), "TYPE");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("名稱 (name)")
        .appendField(new Blockly.FieldTextInput("Bottled Water"), "NAME");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("數量 (size)")
        .appendField(new Blockly.FieldNumber(1, 1), "SIZE");
    this.setOutput(true, "Order");
    this.setColour(290);
    this.setTooltip("定義一個商品物件。");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['data_map'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("🗺️ 地圖 (Map)");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("ID")
        .appendField(new Blockly.FieldTextInput("map-uuid-abcd"), "ID");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("名稱 (name)")
        .appendField(new Blockly.FieldTextInput("map_name"), "NAME");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("存檔URL (archive)")
        .appendField(new Blockly.FieldTextInput("https://..."), "ARCHIVE");
    this.setOutput(true, "Map");
    this.setColour(290);
    this.setTooltip("定義一個地圖物件。");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['data_door'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("🚪 艙門 (Door)");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("ID")
        .appendField(new Blockly.FieldDropdown([["0", "0"], ["1", "1"]]), "ID");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("啟用 (enable)")
        .appendField(new Blockly.FieldCheckbox(true), "ENABLE");
    this.setOutput(true, "Door");
    this.setColour(290);
    this.setTooltip("定義一個艙門控制物件。");
    this.setHelpUrl("");
  }
};


// --- Navigation-related Command Blocks ---

Blockly.Blocks['adapter_navigation'] = {
  init: function() {
    this.appendValueInput("LOCATION")
        .setCheck("Location")
        .appendField("導航至 (Navigate to)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip("傳送一個導航命令，讓機器人移動到指定的地標。");
    this.setHelpUrl("");
  }
};


// --- Middle Layer Command Blocks ---

Blockly.Blocks['adapter_delivery_middle_layer_control'] = {
  init: function() {
    this.appendValueInput("DOORS")
        .setCheck("Array") // We'll use a list block for the doors
        .appendField("控制艙門 (Control Doors)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip("傳送一個或多個艙門控制命令。請使用列表積木來組合多個艙門。");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['adapter_complete_task'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("結束任務 (Complete Task)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("通知機器人當前任務已成功完成。");
    this.setHelpUrl("");
  }
};


// --- Data Structure Blocks ---

Blockly.Blocks['data_location'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("📍 地標 (Location)");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("座標 (coordinate)")
        .appendField(new Blockly.FieldTextInput("x, y, r"), "COORDINATE");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("名稱 (name)")
        .appendField(new Blockly.FieldTextInput("some_place"), "NAME");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("類型 (type)")
        .appendField(new Blockly.FieldDropdown([
          ["一般地標 (location)", "location"],
          ["充電座 (charger)", "charger"],
          ["避車點 (holding)", "holding"],
          ["智販機 (vending_machine)", "vending_machine"],
          ["地圖定位點 (location_marker)", "location_marker"]
        ]), "TYPE");
    this.setOutput(true, "Location");
    this.setColour(290);
    this.setTooltip("定義一個地標物件，包含座標、名稱和類型。");
    this.setHelpUrl("");
  }
};


// --- Task-related Command Blocks ---

Blockly.Blocks['adapter_new_task_notification'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("通知新任務 (New Task Notification)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("對裝置發起新任務，並取得 missionId。這是任務的第一步。");
    this.setHelpUrl("");
  }
};
