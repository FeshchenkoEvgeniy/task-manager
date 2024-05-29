import { Draggable } from '@hello-pangea/dnd';
import { useSelector } from 'react-redux';
import * as s from './Card.styled';
import sprite from '../../assets/sprite.svg';
import IconList from './IconList/IconList';
import Details from './Details/Details';
import DeadlineSignal from './DeadlineSignal/DeadlineSignal';

function Card({ item, index }) {
  const employees = useSelector(state => state.employees.employees);

  const toDeadLine = date => {
    const deadline = Date.parse(
      new Date(date.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1'))
    );
    const daysLeft = Math.ceil((deadline - Date.now()) / (1000 * 3600 * 24));

    return daysLeft;
  };

  const getAssigneeName = assigneeId => {
    if (typeof assigneeId === 'object' && assigneeId !== null) {
      assigneeId = assigneeId._id;  // Use assigneeId._id if assigneeId is an object
    }
    const assignee = employees.find(employee => employee._id === assigneeId);
    return assignee ? `${assignee.firstName} ${assignee.lastName}` : 'No Assignee';
  };

  return (
    <Draggable draggableId={item._id} index={index}>
      {(provided, snapshot) => {
        return (
          <s.Wrapper
            priority={item.priority}
            key={item._id}
            ref={provided.innerRef}
            snapshot={snapshot}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <s.TaskTitle>{item.title}</s.TaskTitle>
            <s.TaskDescription>{item.description}</s.TaskDescription>

            {item.assignee && (
              <div>
                <s.TaskTitle>Завдання виконує - <b>{getAssigneeName(item.assignee)}</b></s.TaskTitle>
              </div>
            )}

            <s.Box>
              <Details priority={item.priority} deadline={item.deadline} />
              <s.Box>
                {toDeadLine(item.deadline) <= 1 && (
                  <DeadlineSignal
                    timeLeft={toDeadLine(item.deadline)}
                    sprite={sprite}
                  />
                )}
                <IconList sprite={sprite} taskInfo={item} />
              </s.Box>
            </s.Box>
          </s.Wrapper>
        );
      }}
    </Draggable>
  );
}

export default Card;
