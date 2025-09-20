import EditButton from './EditButton';
import DeleteButton from './DeleteButton';

/**
 * Defines the structure of the props that the UDButtons component expects
 *
 * @interface UpdateDeleteButtonsProps
 */
interface UpdateDeleteButtonsProps {
  onEdit: () => void;
  onDelete: () => void;
}

/**
 * UDButtons component renders a pair of buttons for editing and deleting, delegating the actual click handling to the provided callbacks
 *
 * @returns {JSX.Element} A span element containing the edit and delete buttons
 */
function UpdateDeleteButtons({ onEdit, onDelete }: UpdateDeleteButtonsProps) {
  return (
    <span className="to-do__btns">
      <EditButton onClick={onEdit} /> <DeleteButton onClick={onDelete} />
    </span>
  );
}

export default UpdateDeleteButtons;
