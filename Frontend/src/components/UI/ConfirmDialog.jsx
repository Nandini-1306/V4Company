const ConfirmDialog = ({ title, message, onConfirm, onCancel }) => (
  <div className="dialog-overlay">
    <div className="dialog">
      <h3>{title}</h3>
      <p>{message}</p>
      <div className="dialog-buttons">
        <button className="cancel-btn" onClick={onCancel}>
          Cancel
        </button>
        <button className="confirm-btn" onClick={onConfirm}>
          Confirm
        </button>
      </div>
    </div>
  </div>
);
export default ConfirmDialog;