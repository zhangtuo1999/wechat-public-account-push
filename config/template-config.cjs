/* eslint-disable */
const TEMPLATE_CONFIG = [
  {
    id: "0001",
    title: "小宝早呀！muuuua！\n",
    desc: `

      **{{date.DATA}}**
      
      今天是小宝脱离苦海的第{{work_day.DATA}}天！

      {{holidaytts.DATA}}
      
      {{birthday_message.DATA}}!

      今天是我们在一起的第{{love_day.DATA}}天！
                  
      ---
      
      城市：{{city.DATA}}
      
      天气：{{weather.DATA}}
      
      气温: {{min_temperature.DATA}} ~ {{max_temperature.DATA}}
      
      {{notice.DATA}}
      
      ---

      {{note_en.DATA}}

      {{note_ch.DATA}}

      ---
      
      bb爱你！
    `,
  },
  {
    id: "0002",
    title: "推送完成提醒",
    desc: `
      服务器信息：{{post_time_zone.DATA}} {{post_time.DATA}}
      
      ---
      
      共推送 {{need_post_num.DATA}} 人
      
      成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
      
      成功用户: {{success_post_ids.DATA}}
      
      失败用户: {{fail_post_ids.DATA}}
    `,
  },
];

module.exports = TEMPLATE_CONFIG;
