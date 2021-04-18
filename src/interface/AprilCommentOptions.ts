export interface PlaceholderOptions
{
	comment_tips: string
	nick: string
	mail: string
	website: string
}

export default interface AprilCommentOptions
{
    /** 评论DOM的ID */
    el: string

    /** 服务端API的URL */
    api: string

    /** 页面标识符，用来区分不同的评论页面以加载对应页面的评论数据，默认从location.pathname获取 */
    pathname?: string

    /** 作者的邮箱的MD5，支持多个邮箱，如果是作者本人的评论，会有一个作者小标签，默认为空 */
    authorMails?: string[]

    /** "作者小标签"内显示的内容，默认是"作者"两个字 */
    authorLabel?: string

    /** 启用表情按钮，默认true */
    smilieEnabled?: boolean

    /** 表情包数据对象，默认不加载任何表情包 */
    smilies?: object

    /** 
     * true: 将表情以ima标签方式存储在评论数据里
     * 
     * false：将表情以以表情符号存储
     * 
     * 如果以标签存储可以在通知邮件里显示表情，但是一旦img的URL发生变化表情就会失效
     * （兼容性）
     * 
     * 如果以表情符号存储，表情是动态渲染的无法在通知邮件里显示，但是可以随时修改表情
     * URL而不会导致表情失效的问题（通用性）
     * 
     * 默认是false
     */
    smilieAsUrl?: boolean

    /** 每页最多显示多少条评论 */
    capacity?: number

    /** 从通知邮件跳转到对应评论页后，是否自动聚焦（滚动页面）到对应的评论上，默认true */
    focusOnComment?: boolean

    /** 分页器的同时能显示的最大半径，默认3 */
    paginatorLength?: number

    /** 是否启用双分页器（除了底部，顶部也会显示一个分页器。方便快速翻页，但在第一页上不会显示）
     * 
     * 禁用后仅显示底部的翻页器，默认true
     */
    dualPaginator?: boolean

    /** 是否一定要输入邮箱才能评论，默认true */
    mailRequired?: boolean

    /** 是否一定要输入网站链接才能评论，默认true */
    websiteRequired?: boolean

    /** 输入表单的占位符 */
    placeholders?: PlaceholderOptions
}