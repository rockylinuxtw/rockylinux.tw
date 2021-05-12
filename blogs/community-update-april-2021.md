---
title: 社群消息 - 2021年4月
date: 2021-04-26
author: "Rocky Linux Taiwan"
categories:
  - news 
tags:
  - ops
---
## 摘要

這個月因為 Rocky Linux 8.3 的候釋版本即將推出的緣故，我們忙得手忙腳亂。開發團隊定期在 [~Dev/Packaging channel](https://chat.rockylinux.org/rocky-linux/channels/dev-packaging) 與社群定期舉辦黑客松，我們現在是自託管了（不再依賴上游套件），並且製作並測試了最小容量的 ISO。基礎團隊努力建立起了鏡像管理器，同時我們也和許多提供鏡像服務提供者取得聯繫。網站團隊同時也準備好了下載頁面和文件網站，我們團隊將會在那裡撰寫優秀的內容。此外我們也建立了測試團隊，負責候釋版本的驗證和錯誤回報。最後，我們很開心宣布，Fastly 和 NAVER Cloud 成為了我們的合作伙伴（另外還有一些好東西即將宣布）。

<!-- more -->

## 時間軸

- 編譯系統和基礎設施準備就緒 - 1月31日 [完成]
- 負責自動套件部署的基礎設施 - 1月31日 [完成]
- 公開測試套件倉庫 - 2月28日 [完成]
- 安裝程式測試準備就緒--2月28日 [完成]
- 預估社群測試所需時間 - 4月30日 [按計劃進行中]
- 候釋版本的可用性 - 4月30日 [按計劃進行中] 。

# 團隊更新

## 社群

在 Mattermost 伺服器上已經建立了 [~Merchandise](https://chat.rockylinux.org/rocky-linux/channels/merchandise) 頻道，以及 @merchcustomerservice 帳戶（你也可以在論壇上找到他），用於所有與行銷有關的諮詢。

社群正在尋找新成員！若您對經營社群媒體有興趣，且擅長組織活動及與其他團隊合作，心動不如馬上行動！請立即加入我們 Mattermost 伺服器上的 [~Community channel](https://chat.rockylinux.org/rocky-linux/channels/community)，並聯繫 @jorp 來了解更多細節。

### 活動

- 我們為 [2021-03-26 Q&A Session](https://www.youtube.com/watch?v=ULPGVBLLGuc) 中的所有問題在資訊欄中標記了時間。
- Wolves Linux Users Group 將於 2021-04-28 at 15:30 ET [19:30 UTC] 與 Gregory Kurtzer 和 R. Leigh Hennig 舉辦一場講座，你可以在 [Meetup](https://wolveslug.org.uk/event/talk-rocky-linux-28th-april-2021/) 上找到關於這個活動的更多細節。

## 文件

主要的文件網站仍在準備中，你可以在 [GitHub](https://github.com/rocky-linux/documentation/) 上協助文件撰寫和在地化。請務必查看 Mattermost 上的 [~Documentation channel](https://chat.rockylinux.org/rocky-linux/channels/documentation)，若您有興趣協助這項工作，請聯絡 @wale! 在接下來的幾個月裡將會忙得不可開交，快來幫忙吧！

## 基礎建設

### 鏡像管理器

我們建立了鏡像管理器，若您對鏡像 Rocky Linux 感興趣，請發 E-mail 給 [infrastructure@rockylinux.org](mailto:infrastructure@rockylinux.org) 或在 Mattermost 上的 [~Infrastructure](https://chat.rockylinux.org/rocky-linux/channels/infrastructure) 頻道裡留言。

### 維護

我們成功將 Mattermost 伺服器升級到 5.34.2。你可以在論壇上找到 [維護公告](https://forums.rockylinux.org/t/mattermost-maintenance-2021-04-18-02-00-utc-to-2021-04-18-05-00-utc/2309)，或查看 [Mattermost 更新日誌](https://docs.mattermost.com/administration/changelog.html#release-v5-34-feature-release) 了解更多細節。

### status.rockylinux.org

現於 [status.rockylinux.org](https://status.rockylinux.org/) 有個用於即時監控 Rocky Linux 相關系統的頁面。

### Bugzilla

我們現在使用 [Bugzilla](https://bugs.rockylinux.org/) 進行錯誤追蹤，若您對它如何設定感興趣，可至 [這個 GitHub commit](https://github.com/rocky-linux/infrastructure/commit/d532f6a28dca1682e6c8555981e1220e49d1e809) 查看 Ansible playbooks。

## 法律

- 我們已建立了一個隱私政策，詳細說明我們追蹤什麼、為什麼及如何追蹤，這使我們能夠在網站上收集基本且匿名的追蹤資料。我們將使用 Matomo 來進行追蹤，隱私政策將於啟用後釋出。
- 我們加入了 [開放創新網路](https://openinventionnetwork.com/)，有助保護我們及其成員免受專利欺詐。

## 釋出

我們釋出了 [devtools](https://github.com/rocky-linux/devtools)，以幫助 Rocky Linux 套件維護者的編譯開發。這是一個很好的方向來 [協助你開始](https://github.com/rocky-linux/documentation/blob/main/en/rocky/8/guides/developer_start2.md) 並透過 [Koji build system](https://kojidev.rockylinux.org/koji/) 處理套件的錯誤回報。 

[Mustafa Gezen](mailto:mustafa@rockylinux.org) 還釋出了正在開發中的 [distrobuild](https://github.com/rocky-linux/distrobuild) 工具以及 [srpmproc](https://github.com/rocky-linux/srpmproc)，它們對我們的編譯工作幫助很大，兩者皆為 MIT 授權。

## 測試

測試團隊正迅速成長中！若您有興趣協助 Rocky Linux 發布一般可用性（GA）版本，請務必加入我們 Mattermost 伺服器上的 [~Testing channel](https://chat.rockylinux.org/rocky-linux/channels/testing)。這個團隊現在已經開了兩次會，討論 Rocky Linux 釋出版本的人工及自動測試與硬體認證。你可以在 [這個](https://docs.google.com/document/d/1wjwQCAM2wg-P_MNKXlI_LZ27TvAqKOZbloGF7Cam7rU/edit) 文件中查看我們正在進行中的事項，，若您需要權限，請在 Mattermost 上聯繫 Jessica Jonutz（@jessjonutz）（目前我們正在使用 Google 文件，直到 Wiki 準備好）。

## 特別目標小組更新

### 映像檔

為 Rocky 準備和測試各種虛擬機、雲端映像檔與容器還有非常多工作要做，為此我們開了新的 [~Images channel](https://chat.rockylinux.org/rocky-linux/channels/images) 專用於此，進來看看我們在幹嘛吧！

## 贊助商

### Fastly

Fastly 為我們所需服務的內容提供了相當大的支援。像是目前便為我們的 Mattermost 伺服器提供支援，在未來上線候釋版本時他們將提供 CDN 服務。我們對其支援感激不盡。

### NAVER Cloud

我們很高興地宣布與 NAVER Cloud 合作，其雲端基礎設施和資源將對確保 Rocky 企業軟體基金會 (RESF) 的保持獨立和長期維護大有幫助。

# 媒體

我們現在正在提高 Rocky Linux 候釋版的一般可用性（GA），我們歡迎媒體的詢問和參與！請聯絡 [media@resf.org](mailto:media@resf.org)，以獲得採訪、引用、訊息與新聞稿等資訊。

---

本週五（4月30日）還有另一個更新，屆時將有更多關於第一個候釋版本版本的細節。

若您有任何意見、問題、擔憂、建議，或有意願提供任何協助，請發送 E-mail 至 [hello@rockylinux.org](mailto:hello@rockylinux.org)。

順頌時祺

Rocky 企業軟體基金會 (RESF)
[https://rockylinux.org](https://rockylinux.org)
