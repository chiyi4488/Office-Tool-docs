# First deploy

When deploying Office, installation and uninstallation can occur simultaneously, so you can combine multiple steps without having to perform them separately.

## Online installation

在线安装需要使用网络数据，如果您的网络环境较差，可能会需要较长的时间完成安装。

打开 Office Tool Plus，转到部署页面，以下是需要做的事情：

- Add product(s).
- Add language(s).

产品和语言请根据自己的需求添加。如果不知道应该添加什么产品，请参阅[产品](/deploy/settings/basic.md#产品)部分。

---

如果有需要，您还可以检查如下配置。

### Architecture

如果您不了解体系结构，保持默认的 32 位即可。更多信息请查看[体系结构](/deploy/settings/basic.md#体系结构)部分。

### Update channel

如果你需要安装 Office 2019/2021 批量许可证产品，你需要更改通道为 Office 2019/2021 企业长期版，其他时候只需要使用默认通道即可，更多信息请查看[更新通道](/deploy/settings/basic.md#更新通道)部分。

### Applications

一些产品通常带有许多应用程序，例如 Word, PowerPoint, Excel, Outlook, OneNote, Publisher 等。我们通常建议只选择您需要的应用程序进行部署即可，例如常用的 Word, PowerPoint 和 Excel。更多信息请查看[应用程序](/deploy/settings/basic.md#应用程序)部分。

### 下载后再部署

此选项为关闭状态时，Office 将会下载时部署，打开时为下载后部署。

![Download first](/images/en-us/deploy/download-first.png)

- 下载时部署：这个模式下无法暂停或取消。Office 安装程序会从 Office CDN 下载安装所需的文件，然后再进行安装。如果因为网络问题而导致文件无法下载，Office 安装程序会卡在一定的进度，无法继续部署。
- 下载后部署：下载通常由 Office Tool Plus 进行，因此在开始安装前，您可以随时取消或暂停下载。下载完成后，Office 的安装不依赖网络，不会受网络影响。

---

配置完成且无报错后，即可开始部署 Office。Office 安装程序会从 Office CDN 下载所需的文件，因此网络质量可能会影响你的安装用时，但消耗的数据流量可能会更少。安装完成后，Office 安装包不会储存在本地，在安装完成时由 Office 安装程序进行清理。

## Offline installation

通常我们说的离线安装指的是使用已经制作/打包好的安装文件进行安装。

如果您的文件类型是镜像文件（.iso），请双击打开、挂载，您也可以将其解压到某个文件夹中。如果您的文件类型是压缩包（例如 .zip, .7z, .rar），请将其解压到某个文件夹中。

挂载/解压后，如果文件中包含 Office Tool Plus，请双击并打开 Office Tool Plus。如果没有，[download](/start/README.md#download) and run Office Tool Plus first.

打开 Office Tool Plus 后，转到部署页面，确保安装文件能够正确加载并识别。如果没有，请点击`选择`按钮并根据提示选择 Office 安装文件。

![Office installation](/images/en-us/deploy/office-installation.png)

::: tip Tips

Office 安装文件应该能够完整展示版本号和语言包信息，并且没有错误消息。如果安装文件不包含语言，则安装的时候依然需要联网，否则会安装失败。

:::

安装文件加载后，请进行如下配置：

- Add [product(s)](/deploy/settings/basic.md#产品).
- Add language(s).
- Configure [applications](/deploy/settings/basic.md#应用程序) (if needed).

体系结构和更新通道已根据安装文件自动匹配，因此您无法再更改，除非您有多个安装文件。语言也应当与安装文件的一致，如果安装文件不包含您所添加的语言，则安装时依然需要联网，否则安装会失败。

如果您在添加产品时，程序提示此产品无法安装在选定的通道上，则代表您所下载的 Office 安装文件无法安装您所选择的产品。请选择另外的产品，或下载另外的 Office 安装文件。

If everything is ok, click `Start deploy` now.
