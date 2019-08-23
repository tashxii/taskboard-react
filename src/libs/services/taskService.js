import TaskApi from "../apis/taskApi"
import TaskConverter from "./converter/taskConverter"
import ApiErrorConverter from "./converter/apiErrorConverter"
import I18n from "../common/i18n"

export default class TaskService {
  static listAsync = async (boardId) => {
    return await TaskApi.list(boardId)
      .then((res) => {
        if (res.ok) {
          const tasks = []
          res.json.forEach(taskResponse => {
            tasks.push(TaskConverter.getTaskByTaskResponse(taskResponse))
          })
          return { tasks: tasks }
        } else {
          return {
            error: ApiErrorConverter.createByApiError(res, I18n.get("タスク一覧の取得に失敗しました"))
          }
        }
      })
      .catch((error) => {
        return {
          error: ApiErrorConverter.createSystemError(error)
        }
      })
  }

  static createAsync = async (taskCreateRequest) => {
    const request = TaskConverter.convertCreateRequest(taskCreateRequest)
    return await TaskApi.create(request)
      .then((res) => {
        if (res.ok) {
          return { task: TaskConverter.getTaskByTaskResponse(res.json) }
        } else {
          return {
            error: ApiErrorConverter.createByApiError(res, I18n.get("タスクの登録に失敗しました"))
          }
        }
      })
      .catch((error) => {
        return {
          error: ApiErrorConverter.createSystemError(error)
        }
      })
  }

  static updateAsync = async (task) => {
    const request = TaskConverter.convertUpdateRequest(task)
    return await TaskApi.update(task.id, request)
      .then((res) => {
        if (res.ok) {
          return { task: TaskConverter.getTaskByTaskResponse(res.json) }
        } else {
          return {
            error: ApiErrorConverter.createByApiError(res, I18n.get("タスクの更新に失敗しました"))
          }
        }
      })
      .catch((error) => {
        return {
          error: ApiErrorConverter.createSystemError(error)
        }
      })
  }

  static deleteAsync = async (task) => {
    return await TaskApi.delete(task.id)
      .then((res) => {
        if (res.ok) {
          return {}
        } else {
          return {
            error: ApiErrorConverter.createByApiError(res, I18n.get("タスクの削除に失敗しました"))
          }
        }
      })
      .catch((error) => {
        return {
          error: ApiErrorConverter.createSystemError(error)
        }
      })
  }

  static updateTaskOrdersAsync = async (taskId, fromBoardId, fromDispOrder, toBoardId, toDispOrder) => {
    const request = TaskConverter.convertUpdateTaskOrdersRequest(
      taskId, fromBoardId, fromDispOrder, toBoardId, toDispOrder,
    )
    return await TaskApi.updateTaskOrders(request)
      .then((res) => {
        if (res.ok) {
          return {}
        } else {
          return {
            error: ApiErrorConverter.createByApiError(res, I18n.get("タスクの並び替えに失敗しました"))
          }
        }
      })
      .catch((error) => {
        return {
          error: ApiErrorConverter.createSystemError(error)
        }
      })
  }
}
