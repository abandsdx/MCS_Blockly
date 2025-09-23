package com.example.mcsblockly.shared.web

import js.core.jso

/**
 * Defines all the custom blocks for the Blockly editor using Kotlin/JS interop.
 */
fun defineCustomBlocks() {
    // A helper to define a block
    fun defineBlock(name: String, definition: dynamic) {
        Blockly.Blocks[name] = definition
    }

    defineBlock("mission_start", jso<dynamic> {
        this.init = {
            val block = this as Blockly.Block
            block.appendDummyInput().appendField("🚀 開始任務 (Start Mission)")
            block.appendDummyInput()
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("API Server URL")
                .appendField(Blockly.FieldTextInput("https://api.nuwarobotics.com"), "API_URL")
            block.appendDummyInput()
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("Mission ID")
                .appendField(Blockly.FieldTextInput("mission-uuid-1234"), "MISSION_ID")
            block.appendDummyInput()
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("User ID (uId)")
                .appendField(Blockly.FieldTextInput("user-5678"), "UID")
            block.appendDummyInput()
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("Robot SN")
                .appendField(Blockly.FieldTextInput("10391ZNNSD240400019"), "SN")
            block.appendStatementInput("COMMANDS")
                .appendField("命令 (Commands)")
            block.setColour(230)
            block.setTooltip("定義一個完整的機器人任務。")
        }
    })

    defineBlock("adapter_new_task_notification", jso<dynamic> {
        this.init = {
            val block = this as Blockly.Block
            block.appendDummyInput().appendField("通知新任務 (New Task Notification)")
            block.setPreviousStatement(true, null)
            block.setNextStatement(true, null)
            block.setColour(120)
            block.setTooltip("對裝置發起新任務。這是任務的第一步。")
        }
    })

    defineBlock("adapter_complete_task", jso<dynamic> {
        this.init = {
            val block = this as Blockly.Block
            block.appendDummyInput().appendField("結束任務 (Complete Task)")
            block.setPreviousStatement(true, null)
            block.setNextStatement(true, null)
            block.setColour(120)
            block.setTooltip("通知機器人當前任務已成功完成。")
        }
    })

    defineBlock("adapter_interrupt_task", jso<dynamic> {
        this.init = {
            val block = this as Blockly.Block
            block.appendDummyInput().appendField("中斷任務 (Interrupt Task)")
            block.setPreviousStatement(true, null)
            block.setNextStatement(true, null)
            block.setColour(120)
            block.setTooltip("強制中斷當前整個任務。")
        }
    })

    defineBlock("adapter_pause_task", jso<dynamic> {
        this.init = {
            val block = this as Blockly.Block
            block.appendDummyInput().appendField("暫停任務 (Pause Task)")
            block.setPreviousStatement(true, null)
            block.setNextStatement(true, null)
            block.setColour(120)
            block.setTooltip("暫停當前任務。")
        }
    })

    defineBlock("adapter_resume_task", jso<dynamic> {
        this.init = {
            val block = this as Blockly.Block
            block.appendDummyInput().appendField("恢復任務 (Resume Task)")
            block.setPreviousStatement(true, null)
            block.setNextStatement(true, null)
            block.setColour(120)
            block.setTooltip("恢復已暫停的任務。")
        }
    })

    defineBlock("adapter_interrupt_command", jso<dynamic> {
        this.init = {
            val block = this as Blockly.Block
            block.appendDummyInput().appendField("中斷當前命令 (Interrupt Command)")
            block.setPreviousStatement(true, null)
            block.setNextStatement(true, null)
            block.setColour(120)
            block.setTooltip("中斷當前正在執行的命令。")
        }
    })

    defineBlock("adapter_navigation_stop", jso<dynamic> {
        this.init = {
            val block = this as Blockly.Block
            block.appendDummyInput().appendField("停止導航 (Stop Navigation)")
            block.setPreviousStatement(true, null)
            block.setNextStatement(true, null)
            block.setColour(210)
            block.setTooltip("要求機器人立刻停止移動。")
        }
    })

    // --- Commands with Data Inputs ---

    defineBlock("adapter_navigation", jso<dynamic> {
        this.init = {
            val block = this as Blockly.Block
            block.appendValueInput("LOCATION").setCheck("Location").appendField("導航至 (Navigate to)")
            block.setPreviousStatement(true, null)
            block.setNextStatement(true, null)
            block.setColour(210)
            block.setTooltip("傳送一個導航命令。")
        }
    })

    defineBlock("adapter_delivery_middle_layer_control", jso<dynamic> {
        this.init = {
            val block = this as Blockly.Block
            block.appendValueInput("DOORS").setCheck("Array").appendField("控制艙門 (Control Doors)")
            block.setPreviousStatement(true, null)
            block.setNextStatement(true, null)
            block.setColour(180)
            block.setTooltip("傳送一個或多個艙門控制命令。")
        }
    })

    defineBlock("adapter_pickup_ui", jso<dynamic> {
        this.init = {
            val block = this as Blockly.Block
            block.appendDummyInput().appendField("顯示取物介面 (Pickup UI)")
            block.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField("UI類型").appendField(Blockly.FieldDropdown(arrayOf(arrayOf("密碼取物", "0"), arrayOf("無密碼取物", "1"))), "UI_PICKUP_TYPE")
            block.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField("密碼").appendField(Blockly.FieldTextInput(""), "PASSWORD")
            block.appendValueInput("DOORS").setCheck("Array").setAlign(Blockly.ALIGN_RIGHT).appendField("指定艙門")
            block.setPreviousStatement(true, null)
            block.setNextStatement(true, null)
            block.setColour(65)
            block.setTooltip("要求機器人展示取物介面。")
        }
    })

    defineBlock("adapter_pass_opt_password", jso<dynamic> {
        this.init = {
            val block = this as Blockly.Block
            block.appendDummyInput().appendField("傳遞密碼 (Pass Password)").appendField(Blockly.FieldTextInput("1234"), "PASSWORD")
            block.setPreviousStatement(true, null)
            block.setNextStatement(true, null)
            block.setColour(65)
            block.setTooltip("提供或更新操作密碼。")
        }
    })

    defineBlock("adapter_switch_map", jso<dynamic> {
        this.init = {
            val block = this as Blockly.Block
            block.appendValueInput("MAP").setCheck("Map").appendField("套用本地地圖 (Switch Map)")
            block.setPreviousStatement(true, null)
            block.setNextStatement(true, null)
            block.setColour(160)
            block.setTooltip("套用裝置端已有之地圖。")
        }
    })

    defineBlock("adapter_apply_map", jso<dynamic> {
        this.init = {
            val block = this as Blockly.Block
            block.appendValueInput("MAP").setCheck("Map").appendField("下載並套用地圖 (Apply Map)")
            block.setPreviousStatement(true, null)
            block.setNextStatement(true, null)
            block.setColour(160)
            block.setTooltip("下載地圖檔，並套用該地圖。")
        }
    })

    defineBlock("adapter_local_locate", jso<dynamic> {
        this.init = {
            val block = this as Blockly.Block
            block.appendValueInput("LOCATION").setCheck("Location").appendField("本地定位 (Local Locate at)")
            block.setPreviousStatement(true, null)
            block.setNextStatement(true, null)
            block.setColour(160)
            block.setTooltip("指定地標，進行小範圍定位。")
        }
    })

    defineBlock("adapter_global_locate", jso<dynamic> {
        this.init = {
            val block = this as Blockly.Block
            block.appendDummyInput().appendField("全域定位 (Global Locate)")
            block.setPreviousStatement(true, null)
            block.setNextStatement(true, null)
            block.setColour(160)
            block.setTooltip("在整個地圖範圍內進行定位。")
        }
    })

    defineBlock("adapter_charging_ui", jso<dynamic> {
        this.init = {
            val block = this as Blockly.Block
            block.appendDummyInput().appendField("顯示充電介面 (Charging UI)")
            block.setPreviousStatement(true, null)
            block.setNextStatement(true, null)
            block.setColour(65)
            block.setTooltip("要求機器人展示充電介面。")
        }
    })

    // --- Combine Command Blocks ---

    defineBlock("adapter_combine_navigation_open_door", jso<dynamic> {
        this.init = {
            val block = this as Blockly.Block
            block.appendDummyInput().appendField("組合: 導航並開門")
            block.appendValueInput("LOCATION").setCheck("Location").setAlign(Blockly.ALIGN_RIGHT).appendField("導航至")
            block.appendValueInput("DOOR").setCheck("Array").setAlign(Blockly.ALIGN_RIGHT).appendField("開啟艙門")
            block.setPreviousStatement(true, null)
            block.setNextStatement(true, null)
            block.setColour(20)
            block.setTooltip("導航到指定地點，然後開啟指定的艙門。")
        }
    })

    defineBlock("adapter_combine_navigation_switch_map", jso<dynamic> {
        this.init = {
            val block = this as Blockly.Block
            block.appendDummyInput().appendField("組合: 導航並切換地圖")
            block.appendValueInput("LOCATION").setCheck("Location").setAlign(Blockly.ALIGN_RIGHT).appendField("導航至")
            block.appendValueInput("MAP").setCheck("Map").setAlign(Blockly.ALIGN_RIGHT).appendField("切換至地圖")
            block.setPreviousStatement(true, null)
            block.setNextStatement(true, null)
            block.setColour(20)
            block.setTooltip("導航到指定地點，然後切換地圖。")
        }
    })

    defineBlock("adapter_combine_navi_manual_order", jso<dynamic> {
        this.init = {
            val block = this as Blockly.Block
            block.appendDummyInput().appendField("組合: 導航並顯示放貨UI")
            block.appendValueInput("LOCATION").setCheck("Location").setAlign(Blockly.ALIGN_RIGHT).appendField("導航至")
            block.appendValueInput("DOOR").setCheck("Array").setAlign(Blockly.ALIGN_RIGHT).appendField("開啟艙門")
            block.appendValueInput("ORDER_LIST").setCheck("Array").setAlign(Blockly.ALIGN_RIGHT).appendField("訂單列表")
            block.setPreviousStatement(true, null)
            block.setNextStatement(true, null)
            block.setColour(20)
            block.setTooltip("導航到點並顯示人工訂單放貨UI。")
        }
    })

    defineBlock("adapter_combine_navi_pickup_ui", jso<dynamic> {
        this.init = {
            val block = this as Blockly.Block
            block.appendDummyInput().appendField("組合: 導航並顯示取物UI")
            block.appendValueInput("LOCATION").setCheck("Location").setAlign(Blockly.ALIGN_RIGHT).appendField("導航至")
            block.appendValueInput("DOOR").setCheck("Array").setAlign(Blockly.ALIGN_RIGHT).appendField("艙門")
            block.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField("UI類型").appendField(Blockly.FieldDropdown(arrayOf(arrayOf("密碼取物", "0"), arrayOf("無密碼取物", "1"))), "UI_PICKUP_TYPE")
            block.setPreviousStatement(true, null)
            block.setNextStatement(true, null)
            block.setColour(20)
            block.setTooltip("導航到點並顯示取物介面。")
        }
    })

    defineBlock("adapter_combine_navi_charging_ui", jso<dynamic> {
        this.init = {
            val block = this as Blockly.Block
            block.appendDummyInput().appendField("組合: 導航並充電")
            block.appendValueInput("LOCATION").setCheck("Location").setAlign(Blockly.ALIGN_RIGHT).appendField("導航至充電站")
            block.setPreviousStatement(true, null)
            block.setNextStatement(true, null)
            block.setColour(20)
            block.setTooltip("導航至充電點並顯示充電介面。")
        }
    })

    // --- Data Blocks ---

    defineBlock("data_location", jso<dynamic> {
        this.init = {
            val block = this as Blockly.Block
            block.appendDummyInput().appendField("📍 地標 (Location)")
            block.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField("座標 (coordinate)").appendField(Blockly.FieldTextInput("x, y, r"), "COORDINATE")
            block.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField("名稱 (name)").appendField(Blockly.FieldTextInput("some_place"), "NAME")
            block.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField("類型 (type)").appendField(Blockly.FieldDropdown(arrayOf(
                arrayOf("一般地標 (location)", "location"),
                arrayOf("充電座 (charger)", "charger"),
                arrayOf("避車點 (holding)", "holding"),
                arrayOf("智販機 (vending_machine)", "vending_machine"),
                arrayOf("地圖定位點 (location_marker)", "location_marker")
            )), "TYPE")
            block.setOutput(true, "Location")
            block.setColour(290)
            block.setTooltip("定義一個地標物件。")
        }
    })

    defineBlock("data_door", jso<dynamic> {
        this.init = {
            val block = this as Blockly.Block
            block.appendDummyInput().appendField("🚪 艙門 (Door)")
            block.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField("ID").appendField(Blockly.FieldDropdown(arrayOf(arrayOf("0", "0"), arrayOf("1", "1"))), "ID")
            block.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField("啟用 (enable)").appendField(Blockly.FieldCheckbox(true), "ENABLE")
            block.setOutput(true, "Door")
            block.setColour(290)
            block.setTooltip("定義一個艙門控制物件。")
        }
    })

    defineBlock("data_map", jso<dynamic> {
        this.init = {
            val block = this as Blockly.Block
            block.appendDummyInput().appendField("🗺️ 地圖 (Map)")
            block.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField("ID").appendField(Blockly.FieldTextInput("map-uuid-abcd"), "ID")
            block.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField("名稱 (name)").appendField(Blockly.FieldTextInput("map_name"), "NAME")
            block.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField("存檔URL (archive)").appendField(Blockly.FieldTextInput("https://..."), "ARCHIVE")
            block.setOutput(true, "Map")
            block.setColour(290)
            block.setTooltip("定義一個地圖物件。")
        }
    })

    defineBlock("data_order", jso<dynamic> {
        this.init = {
            val block = this as Blockly.Block
            block.appendDummyInput().appendField("📦 商品 (Order)")
            block.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField("類型 (type)").appendField(Blockly.FieldTextInput("normal"), "TYPE")
            block.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField("名稱 (name)").appendField(Blockly.FieldTextInput("Bottled Water"), "NAME")
            block.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField("數量 (size)").appendField(Blockly.FieldNumber(1, 1), "SIZE")
            block.setOutput(true, "Order")
            block.setColour(290)
            block.setTooltip("定義一個商品物件。")
        }
    })
}
