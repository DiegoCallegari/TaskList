import styled from "styled-components";

const TaskCardStyled = styled.div`
  background-color: ${(props) => props.theme.colors.terciaryClean};
  width: 350px;
  min-height: 100px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    color: ${(props) => props.theme.colors.clean};
    font-size: ${(props) => props.theme.fontSizes.high};
  }
`;

export default TaskCardStyled;
