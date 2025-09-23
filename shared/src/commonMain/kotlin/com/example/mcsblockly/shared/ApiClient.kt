package com.example.mcsblockly.shared

import io.ktor.client.*
import io.ktor.client.plugins.contentnegotiation.*
import io.ktor.client.request.*
import io.ktor.client.statement.*
import io.ktor.http.*
import io.ktor.serialization.kotlinx.json.*
import kotlinx.serialization.json.Json

class ApiClient {

    private val client = HttpClient {
        install(ContentNegotiation) {
            json(Json {
                prettyPrint = true
                isLenient = true
                ignoreUnknownKeys = true
            })
        }
    }

    suspend fun sendCommand(apiUrl: String, command: RobotCommand): HttpResponse {
        return client.post(apiUrl) {
            contentType(ContentType.Application.Json)
            header("Authorization", "Basic bWlzc2lvbjpudXdhMDA=")
            setBody(command)
        }
    }
}
