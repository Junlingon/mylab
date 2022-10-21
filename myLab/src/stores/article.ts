import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
export const articleStore = defineStore('article', {
    state: () => {
        const articleData = reactive([
            {
                artTitle: "凹凸实验室的过去与未来",
                artSubTitleDate: "2020.12.25",
                artSubTitleFocus: "16095",
                coverText: `凹凸实验室隶属于京东零售用户体验设计部（JDC），成立于 2015 年秋冬之交，诞生自深圳前海之滨，至今已走过 5 个年头，5
                年的时光穿梭而过，凹凸实验室也不断发展壮大，从曾经专注前端的团队成长为如今涵盖前后端、全栈、算法、测试各类方向的全能型研发团队，工作模式也从传统的人力密集型研发转向创新型平台体系化研发，如今，凹凸的各类技术输出与沉淀在业界影响深远。`,
                paragraphData: [
                    {
                        paragraphTitle: "星火",
                        paragraph: `<p>2015 年，凹凸实验室的前身多终端研发部成立刚好一年，彼时的多终端研发部，虽然是一个拥有 20
                        多位开发人员的独立前端研发部门，但更多的是在支撑着公司内部的各种业务的研发，从微信手 Q
                        的购物业务到京东商城的营销活动、拍拍网，以及京东云的大改版，业务的类别五花八门，作为一个工线支持部门，每天在各类业务开发中穿插，协助各类业务需求的开发。</p>
                    <p>
                    <div class="lazyimg jelly-image lazyimg_loaded"
                        style="background: transparent; position: relative; width: 100%; height: auto;">
                        <img src="https://img11.360buyimg.com/imagetools/jfs/t1/151926/15/11296/94062/5fe43493E9cb21c9a/057e2c31479082a0.jpg"
                            alt="" style="max-width: 100%;"></div>
                    </p>
                    <p>&lt;div style="text-align: center; margin-bottom: 20px; color: #999"&gt;2015
                        加入凹凸实验室的同仁&lt;/div&gt;
            
                    </p>
                    <p>在此期间，部门也产生了很多精品业务，凭借着在 H5
                        动画方面的造诣，在京东内部小有名气，每到一些大促的时间节点都能收到很多的业务需求，这让团队开始在京东内部开始崭露头角。</p>
                    <p>
                    <div class="lazyimg jelly-image lazyimg_loaded"
                        style="background: transparent; position: relative; width: 100%; height: auto;">
                        <img src="https://img11.360buyimg.com/imagetools/jfs/t1/152554/24/10910/536958/5fe2e2dbEe1ef36f6/a53e674e5523e9b9.jpg"
                            alt="" style="max-width: 100%;"></div>
                    </p>
                    <p>&lt;div style="text-align: center; margin-bottom: 20px;"&gt;&lt;a
                        href="https://cases.aotu.io/"&gt;H5 动画作品合集&lt;/a&gt;&lt;/div&gt;
            
                    </p>
                    <p>在这一阶段我们也产生了很多优秀的文章，不完全列举：</p>
                    <ul>
                        <li><a href="https://aotu.io/notes/2015/11/24/project-summary/" target="_blank"
                                rel="noopener noreferrer">
                                精致化页面重构
                            </a>
                            ，by NONO</li>
                        <li><a href="https://aotu.io/notes/2015/11/23/css3-animation-to-movie-part_1/"
                                target="_blank" rel="noopener noreferrer">
                                以电影之眼看CSS3动画（一）
                            </a>
                            ，by 凹凸一姐</li>
                        <li><a href="https://aotu.io/notes/2015/11/23/css3-animation-to-movie-part_2/"
                                target="_blank" rel="noopener noreferrer">
                                以电影之眼看CSS3动画（二）
                            </a>
                            ，by 凹凸一姐</li>
                        <li><a href="https://aotu.io/notes/2016/03/16/optimization/" target="_blank"
                                rel="noopener noreferrer">
                                前端优化不完全指南
                            </a>
                            ，by 暖暖</li>
                    </ul>
                    <p>同时，在沉淀了大量精品的 H5 业务之后，我们也开始尝试打造一个可视化搭建工具 HiPage，通过拖拽搭建的方式就能将沉淀的 H5 动画元素组合出新的 H5
                        页面，实现快速上线，得到业务方的一阵惊叹。这是我们第一个颇具意义的技术产品，它既服务好了业务方，也满足了我们作为技术人员对技术的追求，同时也为我们埋下了关于团队方向思考的引子。
                    </p>
                    <p>
                    <div class="lazyimg jelly-image lazyimg_loaded"
                        style="background: transparent; position: relative; width: 100%; height: auto;">
                        <img src="https://img10.360buyimg.com/imagetools/jfs/t1/142843/1/19879/111274/5fe43493E837d41bf/b3f8fbd463bc2a18.jpg"
                            alt="" style="max-width: 100%;"></div>
                    </p>
                    <p>作为技术团队，我们一直在思考，我们所能做的是否仅仅只是服务好业务就够了？或者换一个角度，作为一个工线部门，我们除了努力把业务做好，还能再做些什么？</p>
                    <p>2015 年 9
                        月，一个燥热的周五晚上，在白石洲的鸡煲大排档里，关于上面的问题，关于团队的发展，关于团队的未来，团队里的几位大佬一边吃着鸡煲，一边激烈讨论。最终，留着一头飘逸长发的老黄掐灭手里的烟说道，“我们要做深圳最知名的前端团队”，在场的大家听罢后都陷入了沉思。
                    </p>
                    <p>彼时落入大家心中的是一点点星火，似乎点亮一丝丝前方的光明，但是，星星之火，可以燎原。</p>
                    <p>一个月后，凹凸实验室正式成立，朝着 “要做深圳最知名的前端团队” 这个目标，团队的所有小伙伴都充满干劲。很快，我们和设计师通力合作，设计了沿用至今的团队
                        Logo。</p>
                    <p>
                    <div class="lazyimg jelly-image lazyimg_loaded"
                        style="background: transparent; position: relative; width: 100%; height: auto;">
                        <img src="https://img13.360buyimg.com/imagetools/jfs/t1/142157/7/19593/10672/5fe2c1a4E0c2fdf60/db8b3170df17b5a5.png"
                            alt="" style="max-width: 100%;"></div>
                    </p>
                    <p>同时也确定了我们的团队的理念：开放、开源，凹凸实验室的名字也来源于此，这一理念灌注在团队血液中，为之后的技术产品研发奠定基础。全新的团队官网也建立起来了，这个官网承载了不仅仅是团队小伙伴的技术文章，同时也是一个个关于技术梦想的追求。团队内也开始举办各类技术分享、编程马拉松，组织各小组的
                        Code Review，整个团队的技术氛围开始形成，凹凸如一个蹒跚习步的孩童，不断摸索，不断向前，磕磕碰碰，但不失朝气。</p>
                    <p>
                    <div class="lazyimg jelly-image lazyimg_loaded"
                        style="background: transparent; position: relative; width: 100%; height: auto;">
                        <img src="https://img10.360buyimg.com/imagetools/jfs/t1/156539/23/1641/303596/5fe2e2daE13b00dc9/f10066df9f55d226.jpg"
                            alt="" style="max-width: 100%;"></div>
                    </p>
                    <p>沉舟侧畔千帆过，病树前头万木春。</p>`,
                    },
                    {
                        paragraphTitle: "成长",
                        paragraph: `p>回顾我们思考的疑问，我们在建设一个具有一定规模的前端团队的时候，其目的是否仅仅是服务好业务？</p>
                        <p>我们给出的答案是否定的。</p>
                        <p>正如凹凸灵魂导师老黄的文章
                            <a href="https://zhuanlan.zhihu.com/p/26962085" target="_blank"
                                rel="noopener noreferrer">
                                《关于前端团队架构的思考》
                            </a>
                            中所说的。
                        </p>
                        <blockquote>
                            <p>这个就好比一个人活着不能止于「有食可进有衣可穿」这种基础的物质条件，团队也同样有「精神层面」的内涵，具体如：</p>
                            <ul>
                                <li>影响力</li>
                                <li>创新力</li>
                                <li>技术视野</li>
                            </ul>
                            <p>这些「精神层面」的东西看似很虚，但实际上会以另外一些形式正向的反馈给团队，间接影响团队服务业务的过程甚至结果。
                                建设团队在公司内外的影响力，可以营造团队的专业口碑，吸引优秀的专业人才主动加盟，而优秀的人才对于团队高效处理业务需求或研发需求的能力具有促进作用。
                            </p>
                        </blockquote>
                        <p>于是我们开始关注如何服务好业务的同时，提炼我们自己的技术产品，以业务为盾，以技术产品为剑，去打造我们梦想中的技术团队。</p>
    
                        <h3 id="拥抱开源技术的初心">拥抱开源技术的初心</h3>
                        <p>依然是 17 年，这一年我们在不断提升业务支持，围绕业务打磨技术产品的同时，在开源上我们也在不断奋进。这一年京东商城的前端主流技术栈还停留在
                            jQuery，而对于我们的业务来说已经无法忍受 jQuery 带来的研发效率低下的困境，我们开始探索新的技术栈，经过缜密的调研后，开始着手开发类 React
                            框架
                            <a href="https://github.com/NervJS/nerv" target="_blank"
                                rel="noopener noreferrer">
                                Nerv
                            </a>
                            ，在内部业务经过一番验证后，开始在 GitHub 开源。凭借着当时团队大牛澈哥的出口转内销的推广策略，Nerv 开源第一天登上 GitHub 的
                            trending 榜，迅速斩获了上千 Star，这对于以<strong>开源</strong>为理念的我们来说，无疑是振奋人心的。请参见
                            <a href="https://aotu.io/notes/2018/03/22/nerv/" target="_blank"
                                rel="noopener noreferrer">
                                Nerv - 京东高性能前端框架
                            </a>
                            。
                        </p>
                        <p>时间匆匆忙忙来到 18 年，彼时对于业务来说又迎来新的挑战，各类小程序平台层出不穷，为了应对业务拓展渠道的需求，我们开始探索多端统一开发解决方案，并迅速推出了
                            <a href="https://github.com/NervJS/taro" target="_blank"
                                rel="noopener noreferrer">
                                Taro
                            </a>
                            ，实现开发一次，同时生成多端应用，凭借着对 React 语法的独特支持和一天 3 个版本火线迭代的速度，Taro
                            成为诸多开发者喜爱的解决方案，帮助很多业务上线多端应用，Taro 也成为凹凸实验室的一张技术名片。请参见
                            <a href="https://aotu.io/notes/2018/06/07/Taro/" target="_blank"
                                rel="noopener noreferrer">
                                多端统一开发框架 - Taro
                            </a>
                            。
                        </p>
                        <p>
                        <div class="lazyimg jelly-image lazyimg_loaded"
                            style="background: transparent; position: relative; width: 100%; height: auto;">
                            <img src="https://img10.360buyimg.com/imagetools/jfs/t1/140075/8/19806/74046/5fe2c46fE777913bb/26555f69d6d033c0.jpg"
                                alt="" style="max-width: 100%;"></div>
                        </p>
                        <p>&lt;div style="text-align: center; margin-bottom: 20px; color: #999"&gt;Taro
                            stars 数破 2w 庆祝会&lt;/div&gt;
    
                        </p>`,
                    },
                    {
                        paragraphTitle: "向全栈迈进",
                        paragraph: `<p>而为了应对内部业务的数据服务请求，以及内部诸多的自研平台系统，凹凸实验室又自建了后端研发团队，为各大系统平台提供坚实的后端服务，为业务封装各类微服务方便调用，同时也在数次大促节点抗住了流量压力，团队的技术栈已经不再局限于前端了，开始向全栈模式转变。
                        </p>
                        <h3 id="平台化转型">平台化转型</h3>
                        <p>18 年
                            19年，我们在不断对我们的各类工具系统进行打磨，做好能力储备。而与此同时，中台的概念兴起，我们团队也开始探索设计研发在中台领域的地位，开始打造公司的设计中台。我们深刻地认识到团队除了对人才的培养之外，更应该关注团队研发资产的沉淀，工具、平台系统、研发组件这些都是团队宝贵的研发资产。而除了不断进行研发能力建设和储备的同时，我们应该将这些已有的能力积木串联起来，成体系化地对外进行赋能，从而实现传统的人力密集型研发向创新型平台体系化研发的转变。
                        </p>`,
                    },
                    {
                        paragraphTitle: "启下",
                        paragraph: `<p>立足业务，技术储能是过去五年凹凸实验室的主题。</p>
                        <p>而智能化设计研发体系将绘制凹凸实验室未来 5 年的技术产品的梦想画卷。</p>
                        <p>接下来我们将通过【凹凸技术揭秘】系列文章，为大家分享、剖析凹凸的关键技术布局，希望能为业界带来更多的思想碰撞，也希望能吸引更多有志青年加入我们，共同实现关于技术关于产品关于团队的梦想。
                        </p>
                        <p>年光似鸟翩翩过，世事如棋局局新，唯有不忘初心，坚守本心，方能乘风破浪，济沧海。</p>`,
                    },
                ],
                authorData: [
                    {
                        authorName: "honly(立)",
                        authorId: "ID:5b0ff3a0629834a34b663642#",
                        authorImg: "http://img10.360buyimg.com/ee/s100x100_jfs/t25990/270/571198170/328325/7e5faf5d/5b741001Na90c0413.jpg",
                        author_docs_num: 78,
                    },
                    {
                        authorName: "luckyadam",
                        authorId: "ID:5b0ff3a0629834a34b66364d#",
                        authorImg: "http://img11.360buyimg.com/ee/s100x100_jfs/t1/71587/18/6540/1034616/5d4928b1E8e792460/533d0837eb011b65.jpg",
                        author_docs_num: 79,
                    },
                ],
                commentsData: [
                    {
                        author_name: "前端萌新五月天",
                        time: "2021/08/25 22:01",
                        comment: `&lt;div style="text-align:
                        center; margin-bottom: 20px; color: #999"&gt;2015
                        加入凹凸实验室的同仁&lt;/div&gt;
                        &lt;div style="text-align: center; margin-bottom:
                        20px;"&gt;&lt;a href="https://cases.aotu.io/"&gt;H5
                        动画作品合集&lt;/a&gt;&lt;/div&gt;
                        &lt;div style="text-align: center; margin-bottom: 20px; color:
                        #999"&gt;Taro stars 数破 2w 庆祝会&lt;/div&gt;
                        写这个静态页面的同仁是特意把css代码流出的吗 哈哈哈哈哈`,
                    },
                    {
                        author_name: "Lxx",
                        time: "2021/05/02 15:38",
                        comment: `🐂B`,
                    },
                ]
            },
            {},
            {},
            {},
            {},
        ])
        return { articleData }
    },
    getters: {},
    actions: {},
})
