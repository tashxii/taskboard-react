import React, { Component } from "react"
import PropTypes from "prop-types"
import { Row, Col, Input, Button, Select, InputNumber } from "antd"
import Avatar from "../basics/Avatar"
import I18n from "../../libs/common/i18n"
import Task from "../../libs/models/task"

class TaskForm extends Component {
  static Mode = {
    New: "New",
    Edit: "Edit"
  }

  constructor(props) {
    super(props)
    const task = props.task
    this.state = {
      name: task.name,
      description: task.description,
      assigneeUserId: task.assigneeUserId,
      boardId: task.boardId || this.props.boards[0].id,
      isClosed: (task.isClosed) ? "true" : "false",
      estimateSize: task.estimateSize,
    }
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleSelectChange = this.handleSelectChange.bind(this)
    this.handleEstimateSizeChange = this.handleEstimateSizeChange.bind(this)
  }

  render() {
    const dialogName = (this.props.mode === TaskForm.Mode.New) ? I18n.get("新しいタスク") : I18n.get("タスク")
    let saveButtonLabel = (!this.props.isSavingProcessing) ? I18n.get("保存") : I18n.get("保存中")
    if (this.props.mode === TaskForm.Mode.New) {
      saveButtonLabel = (!this.props.isSavingProcessing) ? I18n.get("登録") : I18n.get("登録中")
    }
    const disabled = this.props.isSavingProcessing || (!this.state.name)
    const users = this.props.users
    const boards = this.props.boards
    return (
      <div>
        <Col>
          <Row style={{ marginBottom: "10px" }}>
            <div style={{ fontSize: "20px", color: "dodgerblue", textDecoration: "underline" }}>
              {dialogName}
            </div>
          </Row>
          <Row>
            <Row>
              {I18n.get("名前")}:
            </Row>
            <Row>
              <Input.TextArea
                autoFocus={true}
                value={this.state.name}
                onChange={(e) => this.handleTextChange(e, "name")}
                autosize
              />
            </Row>
          </Row>
          <Row>
            <Row>
              {I18n.get("説明")}:
            </Row>
            <Row style={{ marginBottom: "5px" }}>
              <Input.TextArea
                value={this.state.description}
                onChange={(e) => this.handleTextChange(e, "description")}
                autosize={{ minRows: 5, maxRows: 20 }}
              />
            </Row>
          </Row>
          <Row>
            <Col span={8}>
              {I18n.get("ボードレーン")}:
            </Col>
            <Col span={16}>
              <Select
                style={{ marginRight: "20px", width: "200px", verticalAlign: "top" }}
                onChange={(value) => this.handleSelectChange(value, "boardId")}
                value={this.state.boardId}
                dropdownMatchSelectWidth={false}
              >
                {boards.map(board => {
                  return (
                    <Select.Option key={board.id}>
                      {board.name}
                    </Select.Option>
                  )
                })}
              </Select>
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              {I18n.get("担当者")}:
            </Col>
            <Col span={16}>
              <Select
                style={{ marginRight: "20px", width: "200px", verticalAlign: "top" }}
                onChange={(value) => this.handleSelectChange(value, "assigneeUserId")}
                value={this.state.assigneeUserId}
                dropdownMatchSelectWidth={false}
                allowClear
              >
                {users.map(user => {
                  return (
                    <Select.Option key={user.id}>
                      <Avatar avatar={user.avatar} size={"20px"} /> {user.name}
                    </Select.Option>
                  )
                })}
              </Select>
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              {I18n.get("見積りサイズ")}:
            </Col>
            <Col span={16}>
              <InputNumber
                value={this.state.estimateSize}
                onChange={this.handleEstimateSizeChange}
                min={0}
                precision={1}
                step={1}
              />
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              {I18n.get("ステータス")}:
            </Col>
            <Col span={16}>
              <Select
                style={{ marginRight: "20px", width: "200px", verticalAlign: "top" }}
                onChange={(value) => this.handleSelectChange(value, "isClosed")}
                value={`${this.state.isClosed}`}
                dropdownMatchSelectWidth={false}
              >
                <Select.Option key={"false"}>{I18n.get("オープン")}</Select.Option>
                <Select.Option key={"true"}>{I18n.get("クローズ")}</Select.Option>
              </Select>
            </Col>
          </Row>
          <Row style={{ marginTop: "10px" }}>
            <Button
              type="primary"
              onClick={
                () => {
                  const task = new Task(
                    this.props.task.id,
                    this.state.name,
                    this.state.description,
                    this.state.assigneeUserId,
                    this.state.boardId,
                    this.props.task.dispOrder,
                    this.props.task.createdDate,
                    (this.state.isClosed === "true"),
                    this.state.estimateSize,
                    this.props.task.version,
                  )
                  this.props.onSaveButtonClick(task)
                }
              }
              disabled={disabled}
              loading={this.props.isSavingProcessing}
              style={{ float: "right" }}
            >
              {saveButtonLabel}
            </Button>
          </Row>
        </Col>
      </div >
    )
  }

  handleTextChange(e, key) {
    this.setState({ [key]: e.target.value })
  }

  handleSelectChange(value, key) {
    this.setState({ [key]: value })
  }

  handleEstimateSizeChange(value) {
    this.setState({ estimateSize: value })
  }
}

TaskForm.propTypes = {
  mode: PropTypes.string.isRequired,
  task: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
  boards: PropTypes.array.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  isSavingProcessing: PropTypes.bool.isRequired,
}

export default TaskForm
