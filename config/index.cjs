const const config = {
  /**
   * 公众号配置
   */

  // 公众号APP_ID
  // 建议不要填这里，请使用文档中github secret的方法进行保密配置，保护您的隐私安全。
  // 如果你非要填这里也行。脚本也能运行
  APP_ID: 'wx0123ad8bbe669346',

  // 公众号APP_SECRET
  // 建议不要填这里，请使用文档中github secret的方法进行保密配置，保护您的隐私安全。
  // 如果你非要填这里也行。脚本也能运行
  APP_SECRET: '520b62e39c0473d13036e332c72ca1b3',

 
  // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
  id: 'otCwU57e9Kefns7o3ec2iC6qyK9s',
  // 你想对他发送的模板消息的模板ID
  useTemplateId: 'nsy8Ij4eX14r5f-vJRzByT4CpgjG9HaQDCSobP604VY',
     
  /**
   * 信息配置
   */

  /** 天气相关 */

  // 默认所在省份, USERS 中没填的话, 会默认拿这里的省份
  PROVINCE: '湖南',
  // 默认所在城市, USERS 中没填的话, 会默认拿这里的城市
  CITY: '长沙',

  /** 重要节日相关 */

  /**
   * 重要节日，修改名字为对应需要显示的名字, date 仅填月日即可, 请严格按照示例填写
   * type必须填！ 只能 “生日” 和 “节日” 二选一!
   *
   * --- 阴历配置开始 ---
   * 如果日期使用阴历，请在 “生日” 或 "节日“ 前添加 * 符号
   * --- 阴历配置结束 ---
   *
   * 生日时，name填写想要展示的名字，你可以填“美丽可爱亲亲老婆”
   * 节日时，name填写相应展示的节日，你可以填“被搭讪纪念日”
   *
   * --- 是否展示周岁信息开始 ---
   * isShowAge: true 展示岁数, 仅type为生日生效
   * isShowAge: false 不展示岁数, 仅type为生日生效
   * 删除isShowAge属性，也会不展示岁数
   * --- 是否展示周岁信息结束 ---
   */
  FESTIVALS: [
    // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
    {
      type: '生日', name: '宝贝', year: '2003', date: '03-25', isShowAge: true,
    },
  
    // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
    {
      type: '生日', name: '憨憨', year: '2002', date: '08-14', isShowAge: true,
    },
    {
      type: '节日', name: '在一起的日子', year: '2020', date: '07-31',
    }
    // 你可以不断按格式往下增加
    // ...
  ],

  /**
   * 限制重要节日的展示条目, 需要填写数字;
   * 如果为3, 则仅展示“将要到达” 的3个重要节日提醒，剩下的将被忽略
   * 如果为0, 则默认展示全部
   */
  FESTIVALS_LIMIT: 0,

  /** 日期相关 */

  /** 你现在可以随心增加你认为的所有的需要纪念的日子啦！
   * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
   * 比如：keyword: "love_date" ，在测试号中就是 {{ love_date.DATA }}
   * */
  CUSTOMIZED_DATE_LIST: [
    // 在一起的日子
    { keyword: 'love_day', date: '2020-07-31' }
    // 你可以不断按格式往下增加
    // ...
  ],

   /** 每日一言 */
  
  //可以填写【动画，漫画，游戏，小说，原创，网络，其他】：随机则填写""
  LITEPARY_PREFERENCE:""
}
  


