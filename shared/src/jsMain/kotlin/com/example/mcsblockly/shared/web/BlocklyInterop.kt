package com.example.mcsblockly.shared.web

import org.w3c.dom.Element
import kotlin.js.JsObject

/**
 * This file contains Kotlin external declarations for the Blockly JavaScript library.
 * This allows us to call Blockly's functions from our Kotlin/JS code in a type-safe way.
 */

@JsModule("blockly")
@JsNonModule
external object Blockly {
    interface Workspace
    interface Block {
        fun getFieldValue(name: String): String
        fun appendDummyInput(): Input
        fun appendValueInput(name: String): Input
        fun appendStatementInput(name: String): Input
        fun setPreviousStatement(isStatement: Boolean, check: String?)
        fun setNextStatement(isStatement: Boolean, check: String?)
        fun setOutput(isOutput: Boolean, check: String?)
        fun setColour(colour: Int)
        fun setTooltip(tooltip: String)
        fun setHelpUrl(url: String)
    }

    interface Input {
        fun appendField(field: Any, name: String? = definedExternally): Input
        fun setAlign(align: Int): Input
        fun setCheck(check: String): Input
    }

    // A dynamic object to hold block definitions
    val Blocks: JsObject

    // Field types
    abstract class Field(value: String) {
        // common properties if any
    }

    class FieldTextInput(value: String) : Field
    class FieldDropdown(options: Array<Array<String>>) : Field
    class FieldCheckbox(checked: Boolean) : Field
    class FieldNumber(value: Int, min: Int? = definedExternally, max: Int? = definedExternally) : Field


    fun inject(container: Element, options: JsObject): Workspace

    val ALIGN_RIGHT: Int

    abstract class Generator(name: String) {
        fun statementToCode(block: Block, name: String): String
        fun valueToCode(block: Block, name: String, outerOrder: Int): String
    }

    val JavaScript: Generator & JsObject

    val ORDER_ATOMIC: Int
}
