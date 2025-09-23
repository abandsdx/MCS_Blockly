pluginManagement {
    repositories {
        google()
        gradlePluginPortal()
        mavenCentral()
    }
}

dependencyResolutionManagement {
    repositories {
        google()
        mavenCentral()
    }
}

rootProject.name = "mcs-blockly-kmp"
include(":androidApp") // Example for a potential Android app module
include(":shared") // Our main KMP shared module
