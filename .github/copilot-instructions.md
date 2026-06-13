<!--
说明: 本文件为 AI 编码代理在本仓库内工作的操作指南。内容以可被发现的信息为准；仓库包含 Python Selenium 自动化脚本，用于批量打开网页。
-->
# Copilot 指令 — 仓库引导

简短目标：帮助 AI 代理在此仓库中迅速产出可验证、有用的更改或提出下一步明确请求。

- **仓库当前状态**: 包含 `open_pages.py` Python 脚本，使用 Selenium 自动化 Edge 浏览器批量打开网页。依赖 `msedgedriver.exe` WebDriver。

- **首要问题（代理启动时必须询问）**:
  - 请指出要操作的项目目录（如果不是仓库根目录）。
  - 提供常用构建/运行命令（例如 `python open_pages.py`）。
  - 如果有 CI 或容器（Dockerfile、.github/workflows），请告知其位置或权限要求。

- **如果用户未能提供更多信息，允许的安全自动操作（优先级顺序）**:
  1. 列出仓库结构并返回缺失的关键文件清单（例如 `requirements.txt`, `pyproject.toml`）。
  2. 提出最小可行问题清单以继续（样例见下方“询问模板”）。
  3. 如果用户授权，可创建基础的项目骨架（说明将包含 README、基本构建脚本），但必须先得到明确确认。

- **发现到的线索**:
  - `msedgedriver.exe` 和 `open_pages.py` 表明基于 Selenium 的 Edge 浏览器自动化脚本，用于批量打开 tokyomotion.net 网页。
  - 脚本创建时间戳命名的临时用户数据目录，避免干扰现有 Edge 会话。
  - 从默认 Edge 配置复制扩展，并显式加载解包扩展。

- **合并策略（当仓库已有 `.github/copilot-instructions.md` 时）**:
  - 保留原有有价值条目（明确构建/测试命令、非典型约定、关键路径文件），在顶部加入“自动检测结果”段落说明当前推断。

- **示例可用提示/操作（直接可执行或可复制给用户）**:
  - "请确认要操作的项目路径，或者允许我在仓库根创建一个 minimal Python 项目骨架。"
  - "仓库检测到 `msedgedriver.exe` 和 Selenium 脚本：是否需要添加更多自动化功能？如果是，请提供具体需求。"

- **行为约束与优先级**:
  - 在缺乏构建或运行命令时，不要假设语言或框架，先询问再变更。
  - 避免创建大量文件或启动大规模重构，除非用户明确要求并授权。

- **需要参考或更新的文件（如果出现）**:
  - 构建与依赖：`requirements.txt`, `pyproject.toml`
  - 启动/运行脚本：`open_pages.py`
  - 测试：暂无测试文件

---

## 自动检测结果

- **架构概览**: 单文件 Python 脚本，使用 Selenium WebDriver 控制 Edge 浏览器。核心功能：创建隔离的用户数据目录，复制扩展，批量打开新标签页。
- **关键工作流**:
  - 运行脚本：`python open_pages.py`（需要 Python 环境和 selenium 包）
  - 依赖检查：确保 `msedgedriver.exe` 在路径中，Edge 浏览器已安装
  - 扩展处理：脚本自动从 `%LOCALAPPDATA%\Microsoft\Edge\User Data\Default` 复制扩展到临时目录
- **项目特定约定**:
  - 用户数据目录命名：`edge_profile_YYYYMMDDHHMMSS` 格式，确保每次运行隔离
  - 扩展加载：优先复制已安装扩展，然后显式加载解包扩展路径
  - 浏览器选项：使用 `--detach` 保持浏览器在脚本结束后打开
- **集成点**:
  - Edge 浏览器配置：读取 `LOCALAPPDATA` 环境变量定位默认配置
  - 外部依赖：`selenium` Python 包，`msedgedriver.exe` WebDriver

如果此文件与实际代码结构有冲突或需要更多上下文，请回复：

- 要操作的路径（例如 `path/to/project`）
- 常用构建/测试命令（或 CI 配置位置）
- 是否允许我初始化基础项目骨架以便开始工作（是/否）

我已完成基线检查并更新本文件；请指示下一步要操作的目录或上传/指向完整代码树。  
