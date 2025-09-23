package com.example.mcsblockly.shared

import kotlinx.serialization.Serializable

@Serializable
data class Location(
    val coordinate: String,
    val name: String,
    val type: String
)

@Serializable
data class Door(
    val id: String,
    val enable: Boolean,
    val orderList: List<Order>? = null
)

@Serializable
data class Map(
    val id: String,
    val name: String,
    val archive: String? = null
)

@Serializable
data class Order(
    val type: String,
    val name: String,
    val size: Int
)

@Serializable
data class RobotCommand(
    val missionId: String,
    val uId: String,
    val command: String,
    val sn: String,
    val location: Location? = null,
    val door: List<Door>? = null,
    val map: Map? = null,
    val orderList: List<Order>? = null,
    val ui_pickup_type: String? = null,
    val password: String? = null,
    val tts_hint: Int? = null
)
