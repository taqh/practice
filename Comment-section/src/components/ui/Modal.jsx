const Modal = ({ children, className }) => {
	return (
		<dialog className={className} onClick={onClick}>
			{children}
		</dialog>
	);
};
export default Modal;
