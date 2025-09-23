package com.example.mcsblockly.shared.web

import kotlinx.browser.document
import kotlin.js.json

fun main() {
    println("KMP/JS App Initializing...")

    // First, define our custom blocks and their code generators.
    defineCustomBlocks()
    defineCodeGenerators()

    document.addEventListener("DOMContentLoaded", {
        val blocklyDiv = document.getElementById("blocklyDiv")
        if (blocklyDiv != null) {
            // Define the toolbox with our custom blocks
            val toolbox = json(
                "kind" to "flyoutToolbox",
                "contents" to arrayOf(
                    json(
                        "kind" to "category",
                        "name" to "任務 (Mission)",
                        "colour" to 230,
                        "contents" to arrayOf(
                            json("kind" to "block", "type" to "mission_start"),
                            json("kind" to "block", "type" to "adapter_new_task_notification"),
                            json("kind" to "block", "type" to "adapter_complete_task"),
                            json("kind" to "block", "type" to "adapter_interrupt_task"),
                            json("kind" to "block", "type" to "adapter_pause_task"),
                            json("kind" to "block", "type" to "adapter_resume_task"),
                            json("kind" to "block", "type" to "adapter_interrupt_command")
                        )
                    ),
                    json(
                        "kind" to "category",
                        "name" to "導航 (Navigation)",
                        "colour" to 210,
                        "contents" to arrayOf(
                            json("kind" to "block", "type" to "adapter_navigation"),
                            json("kind" to "block", "type" to "adapter_navigation_stop")
                        )
                    ),
                    json(
                        "kind" to "category",
                        "name" to "中層 (Middle Layer)",
                        "colour" to 180,
                        "contents" to arrayOf(
                            json("kind" to "block", "type" to "adapter_delivery_middle_layer_control")
                        )
                    ),
                    json(
                        "kind" to "category",
                        "name" to "地圖與定位 (Map & Location)",
                        "colour" to 160,
                        "contents" to arrayOf(
                            json("kind" to "block", "type" to "adapter_switch_map"),
                            json("kind" to "block", "type" to "adapter_apply_map"),
                            json("kind" to "block", "type" to "adapter_local_locate"),
                            json("kind" to "block", "type" to "adapter_global_locate")
                        )
                    ),
                    json(
                        "kind" to "category",
                        "name" to "介面與密碼 (UI & Password)",
                        "colour" to 65,
                        "contents" to arrayOf(
                            json("kind" to "block", "type" to "adapter_pickup_ui"),
                            json("kind" to "block", "type" to "adapter_charging_ui"),
                            json("kind" to "block", "type" to "adapter_pass_opt_password")
                        )
                    ),
                    json(
                        "kind" to "category",
                        "name" to "組合命令 (Combine)",
                        "colour" to 20,
                        "contents" to arrayOf(
                            json("kind" to "block", "type" to "adapter_combine_navigation_open_door"),
                            json("kind" to "block", "type" to "adapter_combine_navigation_switch_map"),
                            json("kind" to "block", "type" to "adapter_combine_navi_manual_order"),
                            json("kind" to "block", "type" to "adapter_combine_navi_pickup_ui"),
                            json("kind" to "block", "type" to "adapter_combine_navi_charging_ui")
                        )
                    ),
                    json("kind" to "sep"),
                    json(
                        "kind" to "category",
                        "name" to "資料 (Data)",
                        "colour" to 290,
                        "contents" to arrayOf(
                            json("kind" to "block", "type" to "data_location"),
                            json("kind" to "block", "type" to "data_door"),
                            json("kind" to "block", "type" to "data_map"),
                            json("kind" to "block", "type" to "data_order")
                        )
                    ),
                    json(
                        "kind" to "category",
                        "name" to "列表 (Lists)",
                        "colour" to "%{BKY_LISTS_HUE}",
                        "custom" to "LIST"
                    )
                )
            )

            // Create the options object for injection
            val options = json(
                "toolbox" to toolbox,
                "scrollbars" to true,
                "trashcan" to true,
                "zoom" to json(
                    "controls" to true,
                    "wheel" to true
                )
            )

            // Inject the Blockly workspace.
            Blockly.inject(blocklyDiv, options)
            println("Blockly workspace injected with custom blocks.")
        } else {
            console.error("Could not find 'blocklyDiv' element in the DOM.")
        }
    })
}
