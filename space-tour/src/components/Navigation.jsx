import { NavLink } from 'react-router-dom';
import logo from '../assets/shared/logo.svg';
import { useContext, useState } from 'react';
import NavToggle from './NavToggle';
import PageContext from '../context/PageContext';

function Navigation() {
	const [showMenu, setShowMenu] = useState(false);
	const { switchActivePage } = useContext(PageContext);

	return (
		<>
			<a className='skip-to-content' href='#main'>
				Skip to content
			</a>
			<header className='header'>
				<div>
					<img src={logo} alt='space tourism logo' className='logo' />
				</div>
				<NavToggle
					onToggle={showMenu}
					onClick={() => setShowMenu(!showMenu)}
				/>
				<nav>
					<ul data-visible={showMenu} className='header__nav'>
						<li>
							<NavLink
								to='/'
								className={({ isActive }) =>
									isActive ? 'link--active' : 'link'
								}
								end
								onClick={() => switchActivePage('home')}
							>
								<span aria-hidden='true' className='link-num'>
									00
								</span>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/destination'
								className={({ isActive }) =>
									isActive ? 'link--active' : 'link'
								}
								onClick={() => switchActivePage('destination')}
							>
								<span aria-hidden='true' className='link-num'>
									01
								</span>
								Destination
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/crew'
								className={({ isActive }) =>
									isActive ? 'link--active' : 'link'
								}
								onClick={() => switchActivePage('crew')}
							>
								<span aria-hidden='true' className='link-num'>
									02
								</span>
								Crew
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/technology'
								className={({ isActive }) =>
									isActive ? 'link--active' : 'link'
								}
								onClick={() => switchActivePage('technology')}
							>
								<span aria-hidden='true' className='link-num'>
									03
								</span>
								Technology
							</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}

export default Navigation;
