import React, { Component } from "react"
import PropTypes from "prop-types"
import { Draggable } from "react-beautiful-dnd"
import { Row, Badge, Popover, Popconfirm, Tooltip } from "antd"
import Modal from "../basics/Modal"
import Avatar from "../basics/Avatar"
import TaskForm from "./TaskForm"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import I18n from "../../libs/common/i18n"

class TaskCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showEditTaskDialog: false,
    }
    this.toggleEditTaskDialog = this.toggleEditTaskDialog.bind(this)
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return (this.props.tasks !== nextProps.tasks || this.state.showEditTaskDialog !== nextState.showEditTaskDialog)
  // }

  render() {
    const task = this.props.task
    const user = this.props.taskUser
    const textDecoration = (task.isClosed) ? "line-through" : "none"
    const opacity = (task.moving) ? 0.3 : 1.0
    const backgroundColor = (task.moving) ? "lavender" : "white"
    return (
      <Draggable draggableId={task.id} index={task.dispOrder}>
        {(provided/*, snapshot*/) =>
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
          >
            <div style={{
              textAlign: "start",
              color: "black",
              backgroundColor: backgroundColor,
              opacity: opacity,
              width: "195px",
              marginLeft: "5px",
              marginBottom: "5px",
              flexGrow: 1,
            }}>
              <Row>
                <div style={{ border: "solid 1px lightgray", display: "inline-block", verticalAlign: "top" }}>
                  {(user) ?
                    <Tooltip title={user.name}>
                      <div>
                        <Avatar avatar={user.avatar} size={"30px"} />
                      </div>
                    </Tooltip>
                    : <div style={{ width: "30px", height: "30px" }} />}
                </div>
                <div
                  style={{
                    display: "inline-block",
                    marginLeft: "5px",
                    wordWrap: "break-word",
                    whiteSpace: "normal",
                    width: "150px",
                    textDecoration: textDecoration,
                  }}
                  {...provided.dragHandleProps}
                >
                  {task.name}
                </div>
              </Row>
              <Row style={{ borderTop: "dotted 1px lightgray" }}>
                {(task.estimateSize) ?
                  <Badge
                    count={task.estimateSize}
                    style={{ margintRight: "5px", color: "tomato", backgroundColor: "lightgreen" }}
                  />
                  : null
                }
                {(task.description) ?
                  <Popover
                    title={I18n.get("説明")}
                    content={<div style={{ width: "300px", wordBreak: "break-word", whiteSpace: "normal" }}>{task.description}</div>}
                    placement="topRight"
                    trigger="hover"
                  >
                    <FontAwesomeIcon
                      icon="comment-dots"
                      style={{ color: "deepskyblue", marginLeft: "5px" }} />
                  </Popover>
                  : null
                }
                <div style={{ float: "right", display: "inline-block" }}>
                  <Tooltip title={I18n.get("編集")}>
                    <FontAwesomeIcon
                      icon="edit"
                      style={{ color: "forestgreen", marginRight: "5px" }}
                      onClick={this.toggleEditTaskDialog}
                    />
                  </Tooltip>
                  <Tooltip title={I18n.get("削除")}>
                    <Popconfirm
                      title={I18n.get("削除しますか？")}
                      okText={I18n.get("削除")}
                      cancelText={I18n.get("キャンセル")}
                      onConfirm={() => { this.props.onDeleteButtonClick(task) }}
                      onCancel={() => { }}
                    >
                      <FontAwesomeIcon
                        icon="trash-alt"
                        style={{ color: "hotpink", marginRight: "5px" }}
                      />
                    </Popconfirm>
                  </Tooltip>
                </div>
              </Row>
            </div>

            <Modal
              visible={this.state.showEditTaskDialog}
              onCancel={this.toggleEditTaskDialog}
              footer={null}
              destroyOnClose
              width={500}
            >
              <TaskForm
                mode={TaskForm.Mode.Edit}
                task={task}
                users={this.props.users}
                boards={this.props.boards}
                onSaveButtonClick={this.props.onEditButtonClick}
                isSavingProcessing={this.props.isSavingProcessing}
              />
            </Modal>
          </div>}
      </Draggable >

    )
  }

  toggleEditTaskDialog() {
    this.setState({
      showEditTaskDialog: !this.state.showEditTaskDialog,
    })
  }
}

TaskCard.propTypes = {
  task: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  taskUser: PropTypes.object,
  onEditButtonClick: PropTypes.func.isRequired,
  onDeleteButtonClick: PropTypes.func.isRequired,
  isSavingProcessing: PropTypes.bool.isRequired,
  users: PropTypes.array.isRequired,
  boards: PropTypes.array.isRequired,
}

export default TaskCard
