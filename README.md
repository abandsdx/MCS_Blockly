# MCS Blockly KMP Mission Planner
## (MCS Blockly KMP 任務編輯器)

---

## 🇬🇧 English

### About The Project

This is a Kotlin Multiplatform (KMP) project that provides a visual mission editor for a robot API, built with the Blockly library. The goal is to allow users to build robot command sequences visually, which can then be executed on multiple platforms.

This project targets:
- **Web (JS)**: A fully functional web application.
- **Android**: A basic application shell.
- **iOS**: A basic application shell.

### Modules

- `:shared`: The main KMP module containing all the shared business logic, data models, API client (Ktor), and the Blockly web UI implementation in `jsMain`.
- `:androidApp`: A standard Android application module that depends on the `:shared` module.

### How to Run the Web Application

**Prerequisites:**
- JDK 11 or higher.

**Instructions:**

1.  **Run the development server:**

    Open a terminal in the root directory of the project and run the following Gradle command. This will start a development server with live-reloading.

    ```bash
    ./gradlew :shared:jsBrowserDevelopmentRun --continuous
    ```

2.  **Open the web page:**

    Once the build is complete and the server is running, open your web browser and navigate to:

    [http://localhost:8080](http://localhost:8080)

    You should see the Blockly Mission Planner interface. Any changes you make to the source code in `shared/src/jsMain` will trigger an automatic reload in the browser.

---

## 🇹🇼 中文 (Traditional Chinese)

### 關於此專案

這是一個 Kotlin Multiplatform (KMP) 專案，提供一個基於 Blockly 函式庫的視覺化機器人任務編輯器。專案的目標是讓使用者可以透過視覺化的方式來組合機器人命令序列，並在多個平台上執行。

專案目標平台：
- **網頁 (JS)**: 一個功能完整的網頁應用程式。
- **Android**: 一個基本的應用程式外殼。
- **iOS**: 一個基本的應用程式外殼。

### 模組說明

- `:shared`: 主要的 KMP 模組，包含了所有的共享業務邏輯、資料模型、API 客戶端 (Ktor)，以及在 `jsMain` 中實作的 Blockly 網頁介面。
- `:androidApp`: 一個標準的 Android 應用程式模組，它依賴於 `:shared` 模組。

### 如何運行網頁版應用程式

**必要條件：**
- JDK 11 或更高版本。

**操作說明：**

1.  **運行開發伺服器：**

    在專案的根目錄下打開終端機，並執行以下 Gradle 指令。此指令會啟動一個支援即時重載的開發伺-服器。

    ```bash
    ./gradlew :shared:jsBrowserDevelopmentRun --continuous
    ```

2.  **開啟網頁：**

    當建置完成且伺服器開始運行後，打開您的網頁瀏覽器並前往以下網址：

    [http://localhost:8080](http://localhost:8080)

    您應該能看到 Blockly 任務編輯器的介面。當您修改 `shared/src/jsMain` 中的原始碼時，瀏覽器將會自動重新載入。
