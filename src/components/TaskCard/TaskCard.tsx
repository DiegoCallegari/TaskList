import TaskCardStyled from "./TaskCardStyle";

const TaskCard = (): React.ReactElement => {
  return (
    <TaskCardStyled>
      <h2>Task title</h2>
      <p>Description of the task</p>
      <span className="status">State: open or closed</span>
    </TaskCardStyled>
  );
};

export default TaskCard;
