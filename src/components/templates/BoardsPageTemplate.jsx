import React, { Component } from "react"
import PropTypes from "prop-types"
import { DragDropContext } from "react-beautiful-dnd"
import { Row, Col, Input, Button, Spin } from "antd"
import Modal from "../basics/Modal"
import BoardLane from "../parts/BoardLane"
import TaskForm from "../parts/TaskForm"
import I18n from "../../libs/common/i18n"
import Task from "../../libs/models/task"

class BoardsPageTemplate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      taskFilter: "",
      showNewTaskDialog: false,
      newTaskTemplate: new Task(),
    }
    this.handleTaskFilterChange = this.handleTaskFilterChange.bind(this)
    this.toggleNewTaskDialog = this.toggleNewTaskDialog.bind(this)
    this.onDragEnd = this.onDragEnd.bind(this)
  }

  componentDidMount() {
    this.props.loadBoardList()
    this.props.loadUserList()
  }

  render() {
    const boards = this.props.boardsState.boards
    const spininig = this.props.boardsState.isLoadingUsers || this.props.boardsState.isLoadingBoards
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div style={{
          //display: "flex", flexDirection: "column", 
          overflowX: "auto", overflowY: "auto"
        }}>
          <Spin spinning={spininig}>
            <Row style={{ marginTop: "10px" }}>
              <Col style={{ float: "right", marginRight: "5px" }}>
                <Button
                  type="primary"
                  onClick={this.toggleNewTaskDialog}
                  disabled={spininig}
                >
                  {I18n.get("新しいタスク")}
                </Button>
              </Col>
              <Col style={{ float: "right", marginRight: "5px" }}>
                <Input
                  placeholder={I18n.get("タスクのフィルター")}
                  onChange={(e) => this.handleTaskFilterChange(e)}
                  disabled={spininig}
                  allowClear
                />
              </Col>
            </Row>
            <Row style={{ marginTop: "2px" }}>
              {
                boards.map(board => {
                  return (
                    <BoardLane
                      key={board.id}
                      board={board}
                      taskFilter={this.state.taskFilter}
                      {...this.props}
                    />
                  )
                })
              }
            </Row>
          </Spin>
          <Modal
            visible={this.state.showNewTaskDialog}
            onCancel={this.toggleNewTaskDialog}
            footer={null}
            destroyOnClose
            width={500}
          >
            <TaskForm
              mode={TaskForm.Mode.New}
              task={this.state.newTaskTemplate}
              users={this.props.usersState.users}
              boards={this.props.boardsState.boards}
              onSaveButtonClick={this.props.onNewTaskButtonClick}
              isSavingProcessing={this.props.tasksState.isSavingNewTask}
            />
          </Modal>
        </div >
      </DragDropContext>
    )
  }

  handleTaskFilterChange(e) {
    this.setState({ taskFilter: e.target.value })
  }

  toggleNewTaskDialog() {
    const newTaskTemplate = new Task()
    // keep the following properites
    newTaskTemplate.boardId = this.state.newTaskTemplate.boardId
    newTaskTemplate.assigneeUserId = this.state.newTaskTemplate.assigneeUserId
    newTaskTemplate.isClosed = this.state.newTaskTemplate.isClosed
    newTaskTemplate.estimateSize = this.state.newTaskTemplate.estiimateSize
    this.setState({
      showNewTaskDialog: !this.state.showNewTaskDialog,
      newTaskTemplate: newTaskTemplate
    })
  }

  onDragEnd(result) {
    if (!result.destination) {
      return
    }
    const taskId = result.draggableId
    const fromBoardId = result.source.droppableId
    const fromDispOrder = result.source.index
    const toBoardId = result.destination.droppableId
    const toInsertIndex = result.destination.index
    this.props.onDropTask(taskId, fromBoardId, fromDispOrder, toBoardId, toInsertIndex)
  }

}

BoardsPageTemplate.propTypes = {
  usersState: PropTypes.object.isRequired,
  boardsState: PropTypes.object.isRequired,
  tasksState: PropTypes.object.isRequired,
  loadBoardList: PropTypes.func.isRequired,
  loadUserList: PropTypes.func.isRequired,
  onNewTaskButtonClick: PropTypes.func.isRequired,
  onDropTask: PropTypes.func.isRequired,
}

export default BoardsPageTemplate
