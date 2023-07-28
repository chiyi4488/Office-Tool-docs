# 激活问题

## 0xC004E015

错误信息：软件授权服务报告许可证使用失败

请参考[重建 Windows 激活令牌](/zh-cn/toolbox/windows.md#重建-windows-激活令牌)

## 0x8004E108

错误信息：软件授权服务报告令牌存储中的令牌包含无效的哈希

解决方案[同上](activation.md#_0xc004e015)。

## 0x8007000D

错误信息：数据无效

确保以下事项没有问题：

- 系统时间正确。
- 你正在使用的 KMS 主机能够正常工作。[如何测试？](/docs/zh-cn/toolbox/#测试-kms-主机可用性)

然后做以下事情:

- [重置 Software Protection 服务](/zh-cn/toolbox/windows.md#重置-software-protection-服务)。
- 再次尝试激活。

## 0x8007007B

错误信息：文件名、目录名或卷标语法不正确

解决方案[同上](activation.md#_0x8007000d)。
