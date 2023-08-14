# 功能介紹

您可以在「啟用」功能頁中進行安裝產品授權、金鑰、配置 KMS 等操作，以進行 Office 授權啟用。

若已購買正版授權，請直接開啟 Office 應用程式，並登入 Microsoft 帳戶即可啟用 Office。

## 授權說明

### 零售版授權 (Retail)

零售版授權僅能以金鑰啟用，而 Microsoft 365 (Office 365) 系列產品，只能透過登入 Microsoft 帳戶，來啟用 Microsft 365 (Office 365)。

目前大多數的零售版授權都與 Microsoft 帳戶綁定，因此多數零售版產品的啟用不需要藉助 Office Tool Plus 即可完成。

### 大量授權版授權 (Volume)

大量授權版授權可以藉由 KMS、MAK 啟用。

- MAK 指的是批量激活密钥（Multiple Activation Key），该密钥有激活次数上限，可以多次使用并激活 Office.
- KMS 激活指的是使用密钥管理服务（Key Management Service）进行激活，KMS 激活需要使用 GVLK，并设置 KMS 主机。

在啟用數據不丟失的情況下，MAK 啟用是永久啟用。

KMS 續期策略由 KMS 伺服器決定。正常情況下，一次啟用的有效期是 180 天，每隔 7 天自動續期一次。

## 授權管理

### 安裝授權

您可以在列表中選取欲安裝的授權 (按住 Ctrl 可同時選取多個授權)，選取後點選 [安裝授權] 即開始安裝。Office Tool Plus 為零售版授權內建了預設金鑰，為大量授權版授權內建了 GVLK 金鑰。

安裝授權時，原有的授權不會被取代也不會被刪除，各授權皆可共存。

### 安裝其他授權

如有需求，您可匯入授權檔以安裝。通常，Office 授權檔存於`C:\Program Files\Microsoft Office\root\Licenses16`，您可將其複製予其它電腦使用。使用此方式不會安裝產品金鑰，請自行安裝金鑰。

### 清除全部授權

此功能會刪除系統上所有已安裝的 Office 授權，但不會清除金鑰。

## 金鑰管理

### 安裝金鑰

請輸入一組完整的 Office 產品金鑰以安裝。如果顯示錯誤代碼[0xC004F069](/zh-cn/faq/activation.md#_0xc004f069)。請確保已安裝與該金鑰相應之 Office 授權。

### 解除安裝所有未啟用的金鑰

此功能將檢索目前已安裝的 Office 授權，並自動移除未啟用的產品金鑰。注意，此操作可能會丟失 Office 產品金鑰。

### 安裝確認識別碼 (CID)

此功能可以輸入並安裝確認識別碼，通常是電話啟用時使用。

## KMS 管理

KMS 伺服器可以是一組域名，亦可為一組 IP 地址。例如：kms.example.com 或者 192.168.123.1。

KMS 伺服器預設埠號是 1688，如有需求，可自行輸入指定埠號。

## 授權列表

此功能將檢索裝置中已安裝的 Office 授權資訊，支援 vNext 和傳統 Office 授權。

::: tip 什麼是 vNext 授權？

vNext 授權是 Microsoft 訂閱者專用的授權，通常是 Microsoft 365 個人/家庭版或 Microsoft 企業版訂閱使用。此類授權會與 Microsoft 帳戶綁定，因此具有一定的效期，通常需要在二個月內連線至網際網路以確認可用性，否則 Office 將可能提示訂閱過期。

:::

### vNext 授權

Office Tool Plus 支援檢視 vNext 授權的狀態、期限、使用者等資訊。透過此功能亦可移除欲刪除的 vNext 授權。刪除前，建議先登出 Office 的 Microsoft 相應帳戶。

### Office 傳統授權

Office Tool Plus 支援檢視此類授權的基本資訊，並針對單個授權移除產品金鑰，亦可取得安裝識別碼以進行電話啟用。
