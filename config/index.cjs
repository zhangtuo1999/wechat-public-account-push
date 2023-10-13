/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用 push-deer
  USE_PASSAGE: 'push-deer',

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx68588210dd167637',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '33a5bd941797e33430cb317527e36446',

  PROVINCE: '北京',
  CITY: '石景山区',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝宝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      // id: 'oTH816ZwYZDmyyiYAJY0i7t6nKok',
      id: 'PDU25981T19UqQcbns0WiAMsJCbuMXesosWfftSBq',
      // id: 'PDU25978TVbGaNQYfXt2WecjbAJiOAVT1hGF3sffp',

      // 使用微信测试号：你想对他发送的模板消息的模板ID
      // useTemplateId: 'daJY5uGjHsO6vAW1tOMwMcImxT4iSPmQp5bKxynnlTo',
      useTemplateId: '0001',

      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-26',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        // {
        //   type: '*生日', name: '宝宝', year: '2000', date: '09-09',
        // },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '宝宝', year: '2000', date: '12-26',
        },
        // {
        //   type: '纪念日', name: '在一起', year: '2023', date: '04-03',
        // },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-04-03' },
        // 结婚纪念日
        // { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '0002',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'PDU25981T19UqQcbns0WiAMsJCbuMXesosWfftSBq',
    }
  ],

}

module.exports = USER_CONFIG

