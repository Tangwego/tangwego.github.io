webpackJsonp([0],{"7QVd":function(t,a){},F92M:function(t,a){},NHnr:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("7+uW"),i={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]};var n=s("VU/8")({name:"App"},i,!1,function(t){s("fEJ5")},null,null).exports,o=s("/ocq"),l={name:"JavaCV_zh",data:function(){return{basicInfo:{name:"唐得胜",gender:"男",birthday:"1996/10",location:"上海",phone:"17603070784",email:"de1653267893@foxmail.com",experience:"3",job:"Java",salary:"20-24k"},studyInfo:{university:"怀化学院",universityAttr:"本科",major:"软件工程",majorStart:"2014",majorEnd:"2018",projects:["1. 参与创新基地，开发出超级收藏夹安卓APP并获奖","2. 和老师参与开源项目"]},skills:["熟悉Linux、熟练编写Shell脚本","熟练掌握Java， 包括但不限于集合、IO、线程池、JUC等基础知识原理和实践，了解JVM内存模型和垃圾回收机制","了解使用SpringBoot、mybatis等常用框架，编写过springboot starter","了解netty的使用，能够使用netty实现自定义协议","了解redis、rabbitmq等中间件","熟悉SQL语法, 了解MySQL的基本架构和原理","大致了解大数据相关平台操作和任务调度的一些框架","熟悉RPC、HTTP等协议","了解Dubbo/Nacos等spring cloud alibaba微服务架构的构建","熟悉html/css、vue、jquery等前端框架","会搭建Docker环境和一些基础网络配置","清楚Jenkins自动化部署流程和Git Hook的一些知识","熟悉Maven、Git等工具","有广泛的框架、平台等的使用和实践经验, 从前端到后台、从web到桌面都有过一定的实战, 熟悉并有反汇编(不限于Java)一些目标文件的经验"],sourcecodes:["学习过Linux源码","深入研究过开源软交换平台的源码并进行过二次开发、解决过相关问题","学习过jdk上层源码和C++源码的线程创建部分"],socialpages:["CSDN博客: http://csdn.wdcc.top/","GitHub: http://github.wdcc.top/","Gitee: http://gitee.wdcc.top/"],experiences:[{companyName:"中电金信",post:"Java",start:"2019/11",end:"至今",contents:["提供平台模块的实施和部署方案","提供CC语音平台的高可用、热备和负载的解决方案","平台SDK的开发","平台API的封装和二次开发"],tacklings:["开发CC核心模块","基于WebRTC的视频会议系统前期开发","发现并解决平台和模块间相互多次建立连接的问题","给外部系统建立并完善整套接口文档,以及概要设计文档等","对日志、平台操作历史报表等子系统进行重构和开发","编写Shell脚本对服务进行一键式管理","解决数据库临时表中记录残留的问题","解决Promise使用不当导致的程序死锁问题","使用NodeJS和C++实现平台定制SIP话机"]},{companyName:"上海共睿信息技术有限公司",post:"Java",start:"2018/09",end:"2019/10",contents:["前置交易系统的实施部署上线、解决线上生产问题","和银行核心系统交易对接、ESB交易对接。理财、保险等产品交易的对接","使用开源任务调度框架实现数据的定时批量转移","开发平台相关小插件实现自定义加密算法的封装"],tacklings:["成功开发并运行上线第一个版本的交易","解决生产中关于netty TCP半包/粘包问题","解决netty交易超时丢包的问题","解决生产中由于服务器文件句柄不够导致程序崩溃的问题"]},{companyName:"长沙尚泉信息技术有限公司 (实习)",post:"Engineer",start:"2018/03",end:"2018/09",contents:["电话销售系统的安装和维护","解决客户问题","优化云平台"],tacklings:["帮助完成云平台的数据大迁移","帮助上千座席进行系统的安装和软硬件的调试","监控后台交易量以及合法性","帮助客户建立新的云平台租户"]},{companyName:"深圳科诗特软件有限责任公司 (见习)",post:"C主程",start:"2017/7",end:"2017/11",contents:["负责邮件子系统的开发、BUG修复和维护","对新副本需求进行开发","客户端BUG修复"],tacklings:["完成大富翁副本","实现MFC客户端闪烁功能","使用Lua脚本调用C++函数实现动画的加载、副本窗体的加载","编写Lua脚本实现邮件客户端系统数据的正确展示"]}],projects:[{name:"呼叫中心平台",tech:"Java、 SpringBoot、 MyBatis Plus、 Redis、 RabbitMQ、 MySQL、 ESL、netty",desc:"基于开源软交换平台开发的呼叫中心平台系统, 旨在为外围产品应用提供一个稳定高效、可扩展的核心。目前基于此平台的产品有智能外呼、智能客服等系统。",difficulty:["整合和处理复杂且多的事件、通过事件驱动实现平台框架的设计和状态机的管理","代码结构的设计和接口的定义","通过自己的测试和框架源码的阅读，发现并解决对象池不管够的问题。","通过阅读核心服务源码发现和软交换建立多个连接的问题并解决。","核心软交换callcenter模块的二次开发，策略的开发, 主要实现的定制化策略有座席示闲时间最长优先、座席话务量最少优先等","从无到有推动和进行平台的搭建, 基础开发, 框架设计等"]},{name:"视频会议系统",tech:"Java、 SpringBoot、 MyBatis Plus、 MySQL、 WebRTC、 STUN/TURN",desc:"一套内部使用的基于Chrome WebRTC技术开发的一套视频会议系统",difficulty:["从零开始调研并提出相应的方案实现一个基础的视频会议服务","从前端到后端的编码实现","根据网络情况实现动态地址检测功能","对网络带宽实现拥塞控制等功能算法","实现降噪/白噪音等功能"]},{name:"数据批量传输平台",tech:"Java、 SpringBoot、 MySQL、SQL Server、 XXL Job",desc:"基于公司软件交易中间件实现的数据传输功能模块, 在进行大数据量传输和定时任务的处理表现得非常出色",difficulty:["关于各个数据库关键字之间的异同而利用非表字段插入的方法","监控在进行批量传输过程中出现的错误和失败进行重传的问题"]},{name:"前置交易系统",tech:"Java、 SpringBoot、 MyBatis Plus、 MySQL、netty",desc:"基于netty实现的一个中间件交易网关, 为银行核心提供了一层保护和统一接口的功能, 并能通过扩展的方式集成数据的传输和同步, 交易的转换组合, 加密实现等功能",difficulty:["软件本身基于netty实现了连接超时丢弃报文的问题, 当时通过jd进行反编译查找源码并最终定位到该问题","netty中关于TCP的半包/粘包问题解决, 基于软件特性最终通过固定长度报文来解决该问题","关于数据库传输项目中碰到的定时转移的问题, 须在短时间内实现上千万条数据的转移, 采用的方式为使用任务调度平台实现不间断迁移, 并在迁移过程中保证数据同步"]}]}},mounted:function(){document.title=this.$route.meta.title}},c={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("div",{staticClass:"cv"},[e("Row",{staticStyle:{height:"200px","background-color":"#202634",color:"white"}},[e("Col",{staticStyle:{"padding-left":"80px"},attrs:{span:"8"}},[e("div",{staticClass:"logo"},[e("img",{staticClass:"wavin-logo",attrs:{src:s("nvdN")}})])]),t._v(" "),e("Col",{staticStyle:{"text-align":"left"},attrs:{span:"16"}},[e("div",{staticClass:"basic-info"},[e("h1",{staticStyle:{color:"#FFDFA1"}},[t._v(t._s(t.basicInfo.name))]),t._v(" "),e("div",{staticClass:"info"},[e("ul",[e("li",[t._v(t._s(t.basicInfo.gender)+" | 生日: "+t._s(t.basicInfo.birthday)+" | "+t._s(t.basicInfo.location))]),t._v(" "),e("li",[e("span",[e("i",{staticClass:"iconfont icon-dianhua"}),t._v(" "+t._s(t.basicInfo.phone))]),t._v(" "),e("span",[e("i",{staticClass:"iconfont icon-youxiang1"}),t._v(" "+t._s(t.basicInfo.email))])]),t._v(" "),e("li",[t._v("在职-月内到岗(一个月内) | "+t._s(t.basicInfo.experience)+"年工作经验 | "+t._s(t.basicInfo.job)+" | 期望薪资: "+t._s(t.basicInfo.salary))])])])])])],1),t._v(" "),e("Row",{staticStyle:{"margin-top":"25px"}},[e("Col",{attrs:{span:"8"}},[e("i",{staticClass:"splitor"}),t._v(" "),e("i",{staticClass:"iconfont icon-zhuanyejineng"}),t._v(" "),e("span",{staticClass:"wavin-label"},[t._v("专业技能")])]),t._v(" "),e("Col",{staticStyle:{"text-align":"left"},attrs:{span:"16"}},[e("div",{staticClass:"wavin-ordered-list"},[e("ul",t._l(t.skills,function(a){return e("li",[t._v(t._s(a))])}),0)])])],1),t._v(" "),e("Row",{staticStyle:{"margin-top":"25px"}},[e("Col",{attrs:{span:"8"}},[e("i",{staticClass:"splitor"}),t._v(" "),e("i",{staticClass:"iconfont icon-suyuanmaguanli"}),t._v(" "),e("span",{staticClass:"wavin-label"},[t._v("源码学习")])]),t._v(" "),e("Col",{staticStyle:{"text-align":"left"},attrs:{span:"16"}},[e("div",{staticClass:"wavin-ordered-list"},[e("ul",t._l(t.sourcecodes,function(a){return e("li",[t._v(t._s(a))])}),0)])])],1),t._v(" "),e("Row",{staticStyle:{"margin-top":"25px"}},[e("Col",{attrs:{span:"8"}},[e("i",{staticClass:"splitor"}),t._v(" "),e("i",{staticClass:"iconfont icon-13"}),t._v(" "),e("span",{staticClass:"wavin-label"},[t._v("社交主页")])]),t._v(" "),e("Col",{staticStyle:{"text-align":"left"},attrs:{span:"16"}},[e("div",{staticClass:"wavin-ordered-list"},[e("ul",t._l(t.socialpages,function(a){return e("li",[t._v(t._s(a))])}),0)])])],1),t._v(" "),e("Row",{staticStyle:{"margin-top":"25px"}},[e("Col",{attrs:{span:"8"}},[e("i",{staticClass:"splitor"}),t._v(" "),e("i",{staticClass:"iconfont icon-pingjia"}),t._v(" "),e("span",{staticClass:"wavin-label"},[t._v("自我评价")])]),t._v(" "),e("Col",{staticStyle:{"text-align":"left"},attrs:{span:"16"}},[e("div",{staticStyle:{color:"black"}},[t._v("\n                  学习能力强、能够独立完成小型项目或大型项目模块、工作效率高、能够时刻保持自我总结。 除了能够获得可观的薪水之外，对生活质量、对技术成长也有一定的追求。\n              ")])])],1),t._v(" "),e("Row",{staticStyle:{"margin-top":"25px"}},[e("Col",{attrs:{span:"8"}},[e("i",{staticClass:"splitor"}),t._v(" "),e("i",{staticClass:"iconfont icon-gongzuojingli"}),t._v(" "),e("span",{staticClass:"wavin-label"},[t._v("工作经历")])]),t._v(" "),e("Col",{staticStyle:{"text-align":"left"},attrs:{span:"16"}},[e("div",{staticClass:"wavin-disorderly-list"},[e("ul",t._l(t.experiences,function(a,s){return e("li",{style:0==s?"":"margin-top:30px;"},[e("div",{staticClass:"experience"},[e("span",{staticClass:"companyName"},[t._v(t._s(a.companyName))]),t._v(" "),e("span",[t._v(t._s(a.post))]),t._v(" "),e("span",[t._v(t._s(a.start)+" - "+t._s(a.end))])]),t._v(" "),e("div",[e("span",{staticClass:"right-title"},[t._v("工作内容")]),t._v(" "),e("ul",{staticClass:"work"},t._l(a.contents,function(a){return e("li",[t._v(t._s(a))])}),0)]),t._v(" "),e("div",{staticStyle:{"margin-top":"20px"}},[e("span",{staticClass:"right-title"},[t._v("贡献")]),t._v(" "),e("ul",{staticClass:"tacklings"},t._l(a.tacklings,function(a){return e("li",[t._v(t._s(a))])}),0)])])}),0)])])],1),t._v(" "),e("Row",{staticStyle:{"margin-top":"25px"}},[e("Col",{attrs:{span:"8"}},[e("i",{staticClass:"splitor"}),t._v(" "),e("i",{staticClass:"iconfont icon-xiangmu"}),t._v(" "),e("span",{staticClass:"wavin-label"},[t._v("项目经历")])]),t._v(" "),e("Col",{staticStyle:{"text-align":"left"},attrs:{span:"16"}},[e("div",{staticClass:"wavin-disorderly-list"},[e("ul",t._l(t.projects,function(a,s){return e("li",{style:0==s?"":"margin-top:30px;"},[e("div",[e("span",[t._v(t._s(a.name))])]),t._v(" "),e("div",{staticStyle:{"padding-top":"10px"}},[e("span",[t._v("项目介绍: "+t._s(a.desc))])]),t._v(" "),e("div",{staticStyle:{"padding-top":"10px"}},[e("span",[t._v("项目技术: "),e("strong",[t._v(t._s(a.tech))])])]),t._v(" "),e("div",{staticStyle:{"margin-top":"20px"}},[e("span",[t._v("技术难点: ")]),t._v(" "),e("ul",t._l(a.difficulty,function(a){return e("li",[t._v(t._s(a))])}),0)])])}),0)])])],1),t._v(" "),e("Row",{staticStyle:{"margin-top":"25px"}},[e("Col",{attrs:{span:"8"}},[e("i",{staticClass:"splitor"}),t._v(" "),e("i",{staticClass:"iconfont icon-logo_school"}),t._v(" "),e("span",{staticClass:"wavin-label"},[t._v("毕业院校")])]),t._v(" "),e("Col",{staticStyle:{"text-align":"left"},attrs:{span:"16"}},[e("div",{staticClass:"wavin-nostyle-list"},[e("ul",[e("li",[e("span",{staticClass:"university"},[t._v(t._s(t.studyInfo.university))]),t._v(" "),e("span",{staticClass:"university-normal"},[t._v(t._s(t.studyInfo.universityAttr))]),t._v(" "),e("span",{staticClass:"university-normal"},[t._v(t._s(t.studyInfo.major))]),t._v(" "),e("span",{staticClass:"university-normal"},[t._v(t._s(t.studyInfo.majorStart)+" - "+t._s(t.studyInfo.majorEnd))])]),t._v(" "),t._l(t.studyInfo.projects,function(a){return e("li",[t._v(t._s(a))])})],2)])])],1)],1)])},staticRenderFns:[]};var r=s("VU/8")(l,c,!1,function(t){s("F92M")},"data-v-6e1af060",null).exports,v={name:"JavaCV_en",data:function(){return{basicInfo:{name:"Wavin Don",gender:"Male",birthday:"1996/10",location:"Shanghai",phone:"17603070784",email:"de1653267893@foxmail.com",experience:"3",job:"Java",salary:"20-24k"},studyInfo:{university:"HuaiHua University",universityAttr:"Undergraduate Course",major:"Software Engineering",majorStart:"2014",majorEnd:"2018",projects:["1. Join the creative base, and had developed an collector APP for Android.","2. Participate the open source projects with teacher."]},selfeval:"Strong learning ability, be able to independently complete small projects or a module of large project, hign work efficiency.",skills:["Be good at Linux, and write shell scripts.","Using Java skillfully,  including but not limited to Collections, IO, Thread Pool, JUC, and Other basic principles, etc.","Have experiences for using Java frameworks like SpringBoot, mybatis. and have developed a springboot starter.","Know abount how to use netty, and customize protocols using netty.","Know such middleware like redis, rabbitmq.","Skilled for SQL script sytax, know about structure for MySQL.","Know a bit of job schedulers.","Be proficient in protocols like RPC, HTTP.","Understand spring cloud alibaba and it's components like Dubbo/Nacos.","Be able to develop html/css, vue and jquery,etc."],sourcecodes:["Have learned source code of Linux","Have researched pbx source code in more depth and develop based it.","Have learned the jdk source code."],socialpages:["CSDN Blog: http://csdn.wdcc.top/","GitHub: http://github.wdcc.top/","Gitee: http://gitee.wdcc.top/"],experiences:[{companyName:"Gientech",post:"Java",start:"2019/11",end:"Now",contents:["Providing implementing and deploying solutions for platform modules","Providing high-availability, hot standby and load balance solutions for the CC voice platform","Developing platform SDKs","Packaging and secondary development based on platform."],tacklings:["Developed core module named CC API","Bootstraping a conference system based on WebRTC","Fixed the problem that platform connect to other modules repeatedly","Wrote API document, and software design document.","Developed and refactor Log subsystem","Wrote shell scripts for one key manage","Resolved the problem which database has residue data in table","Resolved dead lock problem due to wrong using Promise","Developed a customize sip phone using NodeJS and C++"],tech:"Java、 SpringBoot、 MyBatis Plus、 Redis、 RabbitMQ、 MySQL、 ESL、netty"},{companyName:"Shanghai GongRui Information and Technology",post:"Java",start:"2018/09",end:"2019/10",contents:["Deploying a frontend of trade system to production and make it online","Connecting to core of bank, Enterprise Service Bus and other systems","Using open source component to transfer oneside database to otherside","Developing plugins for platform like encrypt plugin"],tacklings:["Made first system online","Resolved TCP half-packages/sticky-packages problem for netty","Resolved netty discard the packages","Resolved program crash due to not enough file handle for server"],tech:"Java、 SpringBoot、 MyBatis Plus、 MySQL、netty、 XXL Job"},{companyName:"Changsha ShangQuan Information and Technology (Practice)",post:"Engineer",start:"2018/03",end:"2018/09",contents:["Installing and maintaining Tele-selling system for customers","Resolving problems for customers","Optimizing cloud platforms"],tacklings:["Help for cloud data transfer","Install and test software and hardware for thousands of customers' agent","Monitor legality for customers' operations","Help customer to building their own platform account"]},{companyName:"ShenZhen Costar Software (Trainee)",post:"C master Programer",start:"2017/7",end:"2017/11",contents:["Developing and maintaining for mail subsystem","Developing new game copies","Fixing Bugs for client and server"],tacklings:["Completed a game copy named Richer Man","Implemented client tool bar flashing","Used lua script to create new window for new copy","Used lua script to make mail system show correct data"]}]}},mounted:function(){document.title=this.$route.meta.title}},p={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("div",{staticClass:"cv"},[e("Row",{staticStyle:{height:"200px","background-color":"#202634",color:"white"}},[e("Col",{staticStyle:{"padding-left":"80px"},attrs:{span:"8"}},[e("div",{staticClass:"logo"},[e("img",{staticClass:"wavin-logo",attrs:{src:s("nvdN")}})])]),t._v(" "),e("Col",{staticStyle:{"text-align":"left"},attrs:{span:"16"}},[e("div",{staticClass:"basic-info"},[e("h1",{staticStyle:{color:"#FFDFA1"}},[t._v(t._s(t.basicInfo.name))]),t._v(" "),e("div",{staticClass:"info"},[e("ul",[e("li",[t._v(t._s(t.basicInfo.gender)+" | Birthday: "+t._s(t.basicInfo.birthday)+" | "+t._s(t.basicInfo.location))]),t._v(" "),e("li",[e("span",[e("i",{staticClass:"iconfont icon-dianhua"}),t._v(" "+t._s(t.basicInfo.phone))]),t._v(" "),e("span",[e("i",{staticClass:"iconfont icon-youxiang1"}),t._v(" "+t._s(t.basicInfo.email))])]),t._v(" "),e("li",[t._v("On the job(within one month) | "+t._s(t.basicInfo.experience)+" years' experiences | "+t._s(t.basicInfo.job)+" | Excepted Salary: "+t._s(t.basicInfo.salary))])])])])])],1),t._v(" "),e("Row",{staticStyle:{"margin-top":"25px"}},[e("Col",{staticStyle:{"text-align":"left","padding-left":"20px"},attrs:{span:"8"}},[e("i",{staticClass:"splitor"}),t._v(" "),e("i",{staticClass:"iconfont icon-zhuanyejineng"}),t._v(" "),e("span",{staticClass:"wavin-label"},[t._v("Professional Abilities")])]),t._v(" "),e("Col",{staticStyle:{"text-align":"left"},attrs:{span:"16"}},[e("div",{staticClass:"wavin-ordered-list"},[e("ul",t._l(t.skills,function(a){return e("li",[t._v(t._s(a))])}),0)])])],1),t._v(" "),e("Row",{staticStyle:{"margin-top":"25px"}},[e("Col",{staticStyle:{"text-align":"left","padding-left":"20px"},attrs:{span:"8"}},[e("i",{staticClass:"splitor"}),t._v(" "),e("i",{staticClass:"iconfont icon-suyuanmaguanli"}),t._v(" "),e("span",{staticClass:"wavin-label"},[t._v("Sources Reading")])]),t._v(" "),e("Col",{staticStyle:{"text-align":"left"},attrs:{span:"16"}},[e("div",{staticClass:"wavin-ordered-list"},[e("ul",t._l(t.sourcecodes,function(a){return e("li",[t._v(t._s(a))])}),0)])])],1),t._v(" "),e("Row",{staticStyle:{"margin-top":"25px"}},[e("Col",{staticStyle:{"text-align":"left","padding-left":"20px"},attrs:{span:"8"}},[e("i",{staticClass:"splitor"}),t._v(" "),e("i",{staticClass:"iconfont icon-13"}),t._v(" "),e("span",{staticClass:"wavin-label"},[t._v("Social Homepage")])]),t._v(" "),e("Col",{staticStyle:{"text-align":"left"},attrs:{span:"16"}},[e("div",{staticClass:"wavin-ordered-list"},[e("ul",t._l(t.socialpages,function(a){return e("li",[t._v(t._s(a))])}),0)])])],1),t._v(" "),e("Row",{staticStyle:{"margin-top":"25px"}},[e("Col",{staticStyle:{"text-align":"left","padding-left":"20px"},attrs:{span:"8"}},[e("i",{staticClass:"splitor"}),t._v(" "),e("i",{staticClass:"iconfont icon-pingjia"}),t._v(" "),e("span",{staticClass:"wavin-label"},[t._v("Self Evaluation")])]),t._v(" "),e("Col",{staticStyle:{"text-align":"left"},attrs:{span:"16"}},[e("div",{staticStyle:{color:"black"}},[t._v("\n                    "+t._s(t.selfeval)+"\n                ")])])],1),t._v(" "),e("Row",{staticStyle:{"margin-top":"25px"}},[e("Col",{staticStyle:{"text-align":"left","padding-left":"20px"},attrs:{span:"8"}},[e("i",{staticClass:"splitor"}),t._v(" "),e("i",{staticClass:"iconfont icon-gongzuojingli"}),t._v(" "),e("span",{staticClass:"wavin-label"},[t._v("Work Experiences")])]),t._v(" "),e("Col",{staticStyle:{"text-align":"left"},attrs:{span:"16"}},[e("div",{staticClass:"wavin-disorderly-list"},[e("ul",t._l(t.experiences,function(a,s){return e("li",{style:0==s?"":"margin-top:30px;"},[e("div",{staticClass:"experience"},[e("span",{staticClass:"companyName"},[t._v(t._s(a.companyName))]),t._v(" "),e("span",[t._v(t._s(a.post))]),t._v(" "),e("span",[t._v(t._s(a.start)+" - "+t._s(a.end))])]),t._v(" "),e("div",{staticStyle:{"padding-top":"10px"}},[a.tech?e("span",{staticClass:"right-title"},[t._v("Using Technologies")]):t._e(),t._v(" "),e("span",[t._v(t._s(a.tech))])]),t._v(" "),e("div",[e("span",{staticClass:"right-title"},[t._v("Job Content")]),t._v(" "),e("ul",{staticClass:"work"},t._l(a.contents,function(a){return e("li",[t._v(t._s(a))])}),0)]),t._v(" "),e("div",{staticStyle:{"margin-top":"20px"}},[e("span",{staticClass:"right-title"},[t._v("Contributions")]),t._v(" "),e("ul",{staticClass:"tacklings"},t._l(a.tacklings,function(a){return e("li",[t._v(t._s(a))])}),0)])])}),0)])])],1),t._v(" "),e("Row",{staticStyle:{"margin-top":"25px"}},[e("Col",{staticStyle:{"text-align":"left","padding-left":"20px"},attrs:{span:"8"}},[e("i",{staticClass:"splitor"}),t._v(" "),e("i",{staticClass:"iconfont icon-logo_school"}),t._v(" "),e("span",{staticClass:"wavin-label"},[t._v("Graduated From")])]),t._v(" "),e("Col",{staticStyle:{"text-align":"left"},attrs:{span:"16"}},[e("div",{staticClass:"wavin-nostyle-list"},[e("ul",[e("li",[e("span",{staticClass:"university"},[t._v(t._s(t.studyInfo.university))]),t._v(" "),e("span",{staticClass:"university-normal"},[t._v(t._s(t.studyInfo.universityAttr))]),t._v(" "),e("span",{staticClass:"university-normal"},[t._v(t._s(t.studyInfo.major))]),t._v(" "),e("span",{staticClass:"university-normal"},[t._v(t._s(t.studyInfo.majorStart)+" - "+t._s(t.studyInfo.majorEnd))])]),t._v(" "),t._l(t.studyInfo.projects,function(a){return e("li",[t._v(t._s(a))])})],2)])])],1)],1)])},staticRenderFns:[]};var d=s("VU/8")(v,p,!1,function(t){s("dHlt")},"data-v-cc589bfe",null).exports,u={name:"Index",data:function(){return{msg:"Sorry! this page is not opened yet!, please visit: "}},beforeCreate:function(){if(document.title=this.$route.meta.title,location.hostname)if(location.hostname.startsWith("github"))window.location.href="https://github.com/Tangwego";else if(location.hostname.startsWith("gitee"))window.location.href="https://gitee.com/Tangwego";else if(location.hostname.startsWith("csdn"))window.location.href="https://blog.csdn.net/qq_35699215";else{if(!location.hostname.startsWith("cv"))return;this.$route.push("/zh_cn")}}},_={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container"},[s("div",{attrs:{id:"wavin"}},[s("ul",[s("li",[s("a",{attrs:{href:"https://www.wdcc.top"}},[t._v("我的主页")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/Tangwego"}},[t._v("我的Github")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://gitee.com/Tangwego"}},[t._v("我的Gitee")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://blog.csdn.net/qq_35699215"}},[t._v("我的CSDN")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://cv.wdcc.top/#/zh_cn"}},[t._v("我的简历(中文)")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://cv.wdcc.top/#/en_us"}},[t._v("我的简历(英文)")])])])])])}]};var f=s("VU/8")(u,_,!1,function(t){s("WBEi")},"data-v-7695551a",null).exports;e.default.use(o.a);var g=new o.a({routes:[{path:"/",name:"Index",component:f,meta:{title:"Wavin的个人主页"}},{path:"/zh_cn",name:"JavaCV_zh",component:r,meta:{title:"Java开发简历 - 唐得胜"}},{path:"/en_us",name:"JavaCV_en",component:d,meta:{title:"Java Developer - Wavin"}}]}),m=s("b3L9"),y=s.n(m);s("7QVd");e.default.config.productionTip=!1,e.default.use(y.a),new e.default({el:"#app",router:g,components:{App:n},template:"<App/>"})},WBEi:function(t,a){},dHlt:function(t,a){},fEJ5:function(t,a){},nvdN:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAIAAAC1eHXNAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFBSURBVFhH7ZhhDoIwDEaZB9n9z8VFdJG5wNq1/bqimPD+CEi+vnWVEFPOebkAj/r5a26PI/75WNe1Hh3xBcIeo/IUKBnwsBvsMeZbPXwSDbWK7jFp0JALKb+XKImCHCV5BEpsCIHffn6MVIYe4c2Q4T1UieebevKBvUhhw+P3xaJCYTzmd0RVoSWm+rGv19VGu2L1sOemlOoRQu/BbsomgS5Rvr8rNDunrKKjJSYPX6shsH6wq5f7b8TqQVvSXZnsGTwfIaunAB6nTgncj5PoPYyvifN0hZz9CN8jzMNSvgyyY5YZD/vWyFrCt7QEvC8lXS5fsNzTwXv4pnUrX6jnA9hw55w2amVw9ZShh68lKqNYqR/hKkKgsi+BKnKUPh8hKmrIv/3v0LDbQMmwR2Mk5Av0e8Qy+xyL4vY4cg2PZXkBi4h/iRA/Qm8AAAAASUVORK5CYII="}},["NHnr"]);
//# sourceMappingURL=app.302b04f2ff8dde6d7d89.js.map