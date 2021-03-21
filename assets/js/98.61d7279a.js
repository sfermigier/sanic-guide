(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{493:function(t,a,s){"use strict";s.r(a);var e=s(12),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"运行-sanic-running-sanic"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行-sanic-running-sanic"}},[t._v("#")]),t._v(" 运行 Sanic(Running Sanic)")]),t._v(" "),s("p",[t._v("Sanic 自带了一个 Web 服务器。在大多数情况下，推荐使用该服务器来部署您的 Sanic 应用。除此之外，您还可以使用支持 ASGI 应用的服务器来部署 Sanic，或者使用 Gunicorn。")]),t._v(" "),s("h2",{attrs:{id:"sanic-服务器-sanic-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sanic-服务器-sanic-server"}},[t._v("#")]),t._v(" Sanic 服务器(Sanic Server)")]),t._v(" "),s("p",[t._v("当定义了 "),s("code",[t._v("sanic.Sanic")]),t._v(" 实例后，我们可以调用其 "),s("code",[t._v("run")]),t._v(" 方法，该方法支持以下几个关键字参数：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("参数名称")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("参数说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("strong",[t._v("host")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v('"127.0.0.1"')])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("服务器监听的地址。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("strong",[t._v("port")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("8000")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("服务器监听的端口。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("strong",[t._v("unix")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("None")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Unix套接字文件（不是TCP）。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("strong",[t._v("debug")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("False")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("开启 DEBUG 输出 （降低服务器性能）。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("strong",[t._v("ssl")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("None")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("SSLContext，子进程用于 SSL 加密。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("strong",[t._v("sock")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("None")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("服务器接受连接的套接字。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("strong",[t._v("workers")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("1")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("要生成的子进程数量。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("strong",[t._v("loop")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("None")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("一个兼容 asyncio 的事件循环。如果没有指定，Sanic 会创建自己的事件循环。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("strong",[t._v("protocol")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("HttpProtocol")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("asyncio.protocol 子类。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("strong",[t._v("access_log")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("True")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("启用请求访问日志（显著降低服务器速度）。")])])])]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("在该样例中，我们关闭输出访问日志来提升性能。")])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# server.py")]),t._v("\napp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Sanic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"My App"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("run"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("host"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0.0.0.0'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" port"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1337")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" access_log"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("现在，执行包含 "),s("code",[t._v("app.run(...)")]),t._v(" 代码的 Python 脚本。")])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("python server.py\n")])])])])]),t._v(" "),s("h3",{attrs:{id:"子进程-workers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#子进程-workers"}},[t._v("#")]),t._v(" 子进程(Workers)")]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("在默认情况下，Sanic 在主进程中只占用一个 CPU 核心进行服务的监听。要想增加并发，只需在运行参数中指定 workers 的数量即可。")])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("run"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("host"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0.0.0.0'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" port"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1337")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" workers"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("小提示")]),t._v(" "),s("p",[t._v("Sanic 会自动管理多个进程，并在它们之间进行负载均衡。我们建议将子进程数量设置的和您机器的 CPU 核心数量一样。")]),t._v(" "),s("p",[t._v("在基于 Linux 的操作系统上，有一个通用的方式来检查 CPU 核心数量：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ nproc\n")])])]),s("p",[t._v("或者，我们可以使用 Python 来获取该值：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" multiprocessing\nworkers "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" multiprocessing"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cpu_count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("run"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" workers"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("workers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),s("h3",{attrs:{id:"通过命令行运行-running-via-command"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通过命令行运行-running-via-command"}},[t._v("#")]),t._v(" 通过命令行运行(Running via command)")]),t._v(" "),s("h4",{attrs:{id:"sanic-命令行界面-sanic-cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sanic-命令行界面-sanic-cli"}},[t._v("#")]),t._v(" Sanic 命令行界面(Sanic CLI)")]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("Sanic 也提供一个简单的命令行界面，来帮助您通过命令行启动。")]),t._v(" "),s("p",[t._v("比如，如果您在 "),s("code",[t._v("server.py")]),t._v(" 文件中初始化了一个 Sanic 应用，您可以使用右侧命令运行程序：")])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("sanic server.app --host"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0 --port"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1337")]),t._v(" --workers"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n")])])])])]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("您还可以使用 "),s("code",[t._v("sanic --help")]),t._v(" 来查看所有选项。")])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ sanic --help\nusage: sanic "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-h"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--host HOST"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--port PORT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--unix UNIX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--cert CERT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--key KEY"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--workers WORKERS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--debug"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" module\n\npositional arguments:\n  module\n\noptional arguments:\n  -h, --help         show this "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("help")]),t._v(" message and "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exit")]),t._v("\n  --host HOST\n  --port PORT\n  --unix UNIX\n  --cert CERT        location of certificate "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" SSL\n  --key KEY          location of keyfile "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" SSL.\n  --workers WORKERS\n  --debug\n\n")])])])])]),t._v(" "),s("h4",{attrs:{id:"作为模块运行-as-a-module"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#作为模块运行-as-a-module"}},[t._v("#")]),t._v(" 作为模块运行 (As a module)")]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("Sanic 也可以被当做模板直接调用。")])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("python -m sanic server.app --host"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0 --port"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1337")]),t._v(" --workers"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n")])])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("小提示")]),t._v(" "),s("p",[t._v("无论使用哪种方法(CLI 或模块），都再不需要在 Python 文件中调用 "),s("code",[t._v("app.run()")]),t._v("。如果您想调用该方法，请确认将其包装起来，使它只有在使用解释器运行文件时才会被执行。")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" __name__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'__main__'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("run"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("host"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0.0.0.0'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" port"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1337")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" workers"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),s("h2",{attrs:{id:"asgi"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#asgi"}},[t._v("#")]),t._v(" ASGI")]),t._v(" "),s("p",[t._v("Sanic 同样兼容 ASGI。这意味着您可以使用您喜爱的 ASGI 服务器来运行 Sanic。现在有三大主流的 ASGI 服务器， "),s("a",{attrs:{href:"http://github.com/django/daphne",target:"_blank",rel:"noopener noreferrer"}},[t._v("Daphne"),s("OutboundLink")],1),t._v("，"),s("a",{attrs:{href:"https://www.uvicorn.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Uvicorn"),s("OutboundLink")],1),t._v("，和 "),s("a",{attrs:{href:"https://pgjones.gitlab.io/hypercorn/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hypercorn"),s("OutboundLink")],1),t._v(" 。")]),t._v(" "),s("p",[t._v("您需要参考他们的文档来找到运行 ASGI 应用的正确方式，这些启动命令大概看起来像这样：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("daphne myapp:app\nuvicorn myapp:app\nhypercorn myapp:app\n")])])]),s("p",[t._v("当使用 ASGI 时，您需要关注以下几件事情：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("当使用 Sanic 服务器，websocket 功能将使用 "),s("code",[t._v("websockets")]),t._v(" 包来实现。在 ASGI 模式中，将不会使用该第三方包，因为 ASGI 服务器将会管理 websocket 链接。")])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://asgi.readthedocs.io/en/latest/specs/lifespan.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ASGI 生命周期协议"),s("OutboundLink")],1),t._v(" 中规定 ASGI 只支持两种服务器事件：启动和关闭。而 Sanic 则有四个事件：启动前、启动后、关闭前和关闭后。因此，在ASGI模式下，启动和关闭事件将连续运行，并不是根据服务器进程的实际状态来运行（因为此时是由 ASGI 服务器控制状态）。因此，最好使用 "),s("code",[t._v("after_server_start")]),t._v(" 和 "),s("code",[t._v("before_server_stop")]),t._v(" 。")])])]),t._v(" "),s("h3",{attrs:{id:"trio"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#trio"}},[t._v("#")]),t._v(" Trio")]),t._v(" "),s("p",[t._v("Sanic 对使用 Trio 运行有着实验性的支持：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("hypercorn -k trio myapp:app\n")])])]),s("h2",{attrs:{id:"gunicorn"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gunicorn"}},[t._v("#")]),t._v(" Gunicorn")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://gunicorn.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gunicorn"),s("OutboundLink")],1),t._v(' ("Green Unicorn") 是一个基于 UNIX 操作系统的 WSGI HTTP 服务器。它是从 Ruby 的 Unicorn 项目中移植而来，采用的是 pre-fork worker 模型。')]),t._v(" "),s("p",[t._v("为了使用 Gunicorn 来运行 Sanic 应用程序，您需要使用 Sanic 提供的 "),s("code",[t._v("sanic.worker.GunicornWorker")]),t._v(" 类作为 Gunicorn worker-class 参数。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("gunicorn myapp:app --bind "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0:1337 --worker-class sanic.worker.GunicornWorker\n")])])]),s("p",[t._v("如果您的应用有内存泄漏的困扰，您可以通过配置 Gunicorn 使子进程在处理了一定数量的请求后平滑重启。这种方法可以很方便得减少内存泄漏带来的影响。")]),t._v(" "),s("p",[t._v("查看 "),s("a",{attrs:{href:"http://docs.gunicorn.org/en/latest/settings.html#max-requests",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gunicorn 文档"),s("OutboundLink")],1),t._v(" 来获取更多信息。")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("当通过 "),s("code",[t._v("gunicorn")]),t._v(" 运行Sanic时，您将失去 "),s("code",[t._v("async/await")]),t._v(" 带来的诸多性能优势。对于该种部署方式，请三思而后行。的确，Gunicorn 提供了很多配置选项，但它不是让 Sanic 全速运行的最佳坏境。")])]),t._v(" "),s("h2",{attrs:{id:"性能方面的考虑-performance-considerations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#性能方面的考虑-performance-considerations"}},[t._v("#")]),t._v(" 性能方面的考虑 (Performance considerations)")]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("当部署在生产环境时，请确保 "),s("code",[t._v("debug")]),t._v(" 模式处于关闭状态。")])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("run"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" debug"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("如果您选择关闭了 "),s("code",[t._v("access_log")]),t._v(" ，Sanic 将会全速运行。")]),t._v(" "),s("p",[t._v("如果您的确需要请求访问日志，又想获得更好的性能，可以考虑使用 "),s("RouterLink",{attrs:{to:"/zh/guide/deployment/nginx.html"}},[t._v("Nginx")]),t._v(" 作为代理，让 Nginx 来处理您的访问日志。这种方式要比用 Python 处理快得多得多。")],1)]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("run"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" access_log"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);