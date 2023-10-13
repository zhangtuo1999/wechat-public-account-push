/* eslint-disable */
const TEMPLATE_CONFIG = [
  {
    id: '0001',
    title: '宝宝早呀！',
    desc: `

      **{{date.DATA}}**
      
      {{holidaytts.DATA}}{{birthday_message.DATA}}
            
      今天是我们在一起的第{{love_day.DATA}}天！
      
      ---
      
      城市：{{city.DATA}}
      
      天气：{{tian_api_weather_weather_0.DATA}}
      
      气温: {{tian_api_weather_lowest_0.DATA}} ~ {{tian_api_weather_highest_0.DATA}}
      
      {{tian_api_weather_tips_0.DATA}}
      
      ---

      {{comprehensive_horoscope.DATA}}
      
      {{note_en.DATA}} {{note_ch.DATA}}
    `
  },
  {
    id: '0002',
    title: '推送完成提醒',
    desc: `
      服务器信息：{{post_time_zone.DATA}} {{post_time.DATA}}
      
      ---
      
      共推送 {{need_post_num.DATA}} 人
      
      成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
      
      成功用户: {{success_post_ids.DATA}}
      
      失败用户: {{fail_post_ids.DATA}}
    `
  },
]

module.exports = TEMPLATE_CONFIG