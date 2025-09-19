# MCS Blockly 任務編輯器

這是一個使用 Google Blockly 建立的視覺化任務編輯器，可以讓使用者透過拖拉積木的方式，組合出控制機器人的任務流程，並產生對應的 JavaScript 程式碼。

此專案已使用 Docker 進行容器化，可以輕鬆地在任何支援 Docker 的環境中進行部署。

---

## 本地端運行 (Local Build & Run)

### 必要條件

- 您需要在您的電腦上安裝 [Docker](https://www.docker.com/get-started)。

### 步驟

1.  **建立 Docker 映像檔 (Build the Docker Image):**

    在專案的根目錄下（也就是 `Dockerfile` 所在的目錄），打開您的終端機，然後執行以下指令來建立映像檔。我們將它命名為 `mcs-blockly-planner`。

    ```bash
    docker build -t mcs-blockly-planner .
    ```

2.  **運行 Docker 容器 (Run the Docker Container):**

    映像檔建立成功後，執行以下指令來啟動一個容器：

    ```bash
    docker run -p 8080:80 --name mcs-planner-container mcs-blockly-planner
    ```

    *   `-p 8080:80`：這個參數會將您電腦的 8080 連接埠，對應到容器內部的 80 連接埠。
    *   `--name mcs-planner-container`: 為您的容器取一個方便識別的名稱。

3.  **開啟預覽網頁:**

    打開您的網頁瀏覽器，並訪問以下網址：

    [http://localhost:8080](http://localhost:8080)

    您應該能看到 Blockly 任務編輯器的介面。

4.  **停止容器 (可選):**

    當您預覽完畢，可以執行以下指令來停止並移除容器：
    ```bash
    docker stop mcs-planner-container
    docker rm mcs-planner-container
    ```

---

## 雲端部署指南 (Cloud Deployment Guide)

將此應用程式部署到雲端服務（如 AWS, Google Cloud, Azure）的通用流程如下：

### 1. 將映像檔推送到容器倉庫 (Push Image to a Registry)

雲端平台需要從一個集中的地方來拉取您的 Docker 映像檔。這個地方就叫做容器倉庫 (Container Registry)。

a.  **登入您的容器倉庫:**
    (以 Docker Hub 為例)
    ```bash
    docker login
    ```
    (如果您使用 AWS ECR, GCP Artifact Registry, 請參考其對應的登入指令)

b.  **為您的映像檔打上標籤 (Tag the Image):**
    將您剛才建立的本地映像檔，重新標記成符合您倉庫路徑的格式。

    ```bash
    # 格式: docker tag <本地映像檔名稱> <倉庫使用者名稱>/<倉庫映像檔名稱>:<版本標籤>
    docker tag mcs-blockly-planner your-docker-username/mcs-blockly-planner:latest
    ```

c.  **推送映像檔 (Push the Image):**
    ```bash
    docker push your-docker-username/mcs-blockly-planner:latest
    ```

### 2. 從雲端平台部署 (Deploy from Cloud Platform)

現在您的映像檔已經在倉庫中了，您可以到您的雲端服務供應商的控制台，選擇一個適合的服務來部署它。

推薦的服務類型（通常稱為 "Serverless Containers" 或 "Container as a Service"）：

-   **AWS App Runner**
-   **Google Cloud Run**
-   **Azure Container Apps**

在這些服務的建立介面中，您通常只需要：
-   選擇 "從容器倉庫部署"。
-   提供您剛才推送的映像檔路徑 (e.g., `your-docker-username/mcs-blockly-planner:latest`)。
-   設定容器要使用的連接埠為 **80**。
-   點擊建立/部署，雲端平台就會自動為您處理剩下的事情，並提供一個公開的網址。
