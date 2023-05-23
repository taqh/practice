const NavToggle = ({ onClick, onToggle }) => {
	return (
		<button
			className='toggle'
			onClick={onClick}
			aria-controls='primary-nav'
			aria-expanded={onToggle}
		>
			<span className='sr-only'>Navigation</span>
			<span className='line top' data-active={onToggle}></span>
			<span className='line mid' data-active={onToggle}></span>
			<span className='line bottom' data-active={onToggle}></span>
		</button>
	);
};

export default NavToggle;
