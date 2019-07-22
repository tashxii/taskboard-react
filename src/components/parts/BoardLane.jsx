import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Droppable } from "react-beautiful-dnd"
import User from "../../libs/models/user"
import TaskCard from "./TaskCard"
import styles from "./BoardLane.css"
import { Spin } from "antd"

const Lane = styled.div`
  text-align: center;
  vertical-align: top;
  margin-top: 5px;
  display: inline-block;
  width: 210px;
  min-height: calc(100vh - 100px);
  margin-left: 2px;
  border: dotted 1px cornflowerblue;
`

const TaskList = styled.div`
  flex-grow: 1;
  height: calc(100vh - 100px);
  min-height: calc(100vh - 180px);
  overflow: auto;
`

class BoardLane extends Component {
  componentDidMount() {
    this.props.loadTaskList(this.props.board)
  }

  render() {
    const moving = this.props.tasksState.boardIdToMoving[this.props.board.id] || false
    let tasks = this.props.tasksState.boardIdToTasks[this.props.board.id] || []
    let userMap = User.createIdToUserMap(this.props.usersState.users)
    const taskFilter = this.props.taskFilter.toUpperCase()
    if (taskFilter !== "") {
      tasks = tasks.filter((task) => {
        const taskName = (task.name || "").toUpperCase()
        const taskDescription = (task.description || "").toUpperCase()
        const user = userMap[task.assigneeUserId] || {}
        const userName = (user.name || "").toUpperCase()
        return (
          taskName.includes(taskFilter) ||
          taskDescription.includes(taskFilter) ||
          userName.includes(taskFilter)
        )
      })
    }
    const totalEstimateSize = tasks.reduce((p, task) => p + (task.estimateSize || 0), 0)
    let index = 0
    return (
      <Lane>
        <Spin spinning={moving}>
          {this.props.board.name} - {totalEstimateSize} Pt.
          <Droppable droppableId={this.props.board.id}>
            {(provided, snapshot) =>
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={{ backgroundColor: (snapshot.isDraggingOver) ? "skyblue" : "lavender" }}
              >
                <TaskList style={styles}>
                  {
                    tasks.map((task) => {
                      return (
                        <TaskCard
                          key={task.id}
                          index={index++}
                          task={task}
                          taskUser={userMap[task.assigneeUserId]}
                          onEditButtonClick={this.props.onUpdateTaskButtonClick}
                          onDeleteButtonClick={this.props.onDeleteTaskButtonClick}
                          isSavingProcessing={this.props.tasksState.isSavingTask}
                          users={this.props.usersState.users}
                          boards={this.props.boardsState.boards}
                        />
                      )
                    })
                  }
                </TaskList>
                {provided.placeholder}
              </div>
            }
          </Droppable>
        </Spin>
      </Lane>
    )
  }
}

BoardLane.propTypes = {
  board: PropTypes.object.isRequired,
  taskFilter: PropTypes.string.isRequired,
  tasksState: PropTypes.object.isRequired,
  usersState: PropTypes.object.isRequired,
  boardsState: PropTypes.object.isRequired,
  loadTaskList: PropTypes.func.isRequired,
  onUpdateTaskButtonClick: PropTypes.func.isRequired,
  onDeleteTaskButtonClick: PropTypes.func.isRequired,
}

export default BoardLane
