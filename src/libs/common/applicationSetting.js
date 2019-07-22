
export default class ApplicationSetting {
  static setting

  static init = (setting) => {
    ApplicationSetting.setting = setting
  }

  static getLocale() {
    return ApplicationSetting.setting.locale
  }

  static getServerSetting() {
    return ApplicationSetting.setting.server
  }

  static getAvatars() {
    return ApplicationSetting.setting.avatars
  }
}
