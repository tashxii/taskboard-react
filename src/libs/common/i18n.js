const messagesEn = {
  // Login/Sign Up
  "アカウント": "Account",
  "パスワード": "Password",
  "ログイン": "Login",
  "ログイン中": "Login...",
  "サインアップ": "Sign Up",
  "システムエラーが発生しました {0}": "System error occurred {0}",
  "アカウントまたはパスワードが一致しません": "Account or password is incorrect",
  "ログイン処理に失敗しました": "Failed to login process",
  "アバター": "Avatar",
  // Buttons/Messages
  "登録": "Register",
  "登録中": "Registering...",
  "保存": "Save",
  "保存中": "Saving...",
  "編集": "Edit",
  "削除": "Delete",
  "削除中": "Deleting...",
  "キャンセル": "Cancel",
  "削除しますか？": "Do you want to delete?",
  // MenuBar
  "タスクボード": "Task Board",
  "管理": "Management",
  "プロフィール変更": "Profile Setting",
  "ログアウト": "Logout",
  // Board Menu
  "新しいタスク": "New Task",
  "タスクのフィルター": "Filter for task",
  // Settings
  "ユーザー一覧": "User List",
  "レーンの表示順変更": "Change Lane's Order",
  // User Form
  "新しいユーザー": "New User",
  "ユーザー": "User",
  "新しいパスワード": "New Password",
  "変更したい場合のみ入力": "Enter when you want to change",
  // User messages
  "ユーザー一覧の取得に失敗しました": "Failed to get list of users",
  "ユーザーの取得に失敗しました": "Failed to get user",
  "ユーザーの登録に失敗しました": "Failed to register user",
  "ユーザーの更新に失敗しました": "Failed to update user",
  "ユーザーの削除に失敗しました": "Failed to delete user",
  // Task Form
  "タスク": "Task",
  "名前": "Name",
  "ボードレーン": "Board Lane",
  "担当者": "Asignee",
  "説明": "Description",
  "見積りサイズ": "Estimate Size",
  "ステータス": "Status",
  "オープン": "Open",
  "クローズ": "Close",
  // Task messages
  "タスク一覧の取得に失敗しました": "Failed to get list of tasks",
  "タスクの取得に失敗しました": "Failed to get task",
  "タスクの登録に失敗しました": "Failed to register task",
  "タスクの更新に失敗しました": "Failed to update task",
  "タスクの削除に失敗しました": "Failed to delete task",
  "タスクの並び替えに失敗しました": "Failed to change task orders",
  // Board Form
  "新しいボード": "New Board",
  "ボード": "Board",
  "このボードに配置したらタスクを終了する": "Close the task if task put on this board",
  // Board messages
  "ボード一覧の取得に失敗しました": "Failed to get list of boards",
  "ボードの取得に失敗しました": "Failed to get board",
  "ボードの登録に失敗しました": "Failed to register board",
  "ボードの更新に失敗しました": "Failed to update board",
  "ボードの削除に失敗しました": "Failed to delete board",
}

export default class I18n {
  static locale = "ja"

  static setLocale(locale) {
    I18n.locale = locale
  }

  static get(label, ...args) {
    let message = label
    if (I18n.locale === "en") {
      if (!messagesEn[label]) {
        console.warn(`I18n:Label[${label}] is not found in "ja" messages`)
      }
      message = messagesEn[label] || label
    }
    if (args) {
      for (let i = 0; i < args.length; i++) {
        message = message.replace("{" + i + "}", args[i])
      }
    }
    return message
  }
}
