import React from 'react'

const Nav = ({changeView}) => {
	return (
		<nav>
			<ul>
				<li onClick={() => changeView('view1')}>View 1</li>
				<li onClick={() => changeView('view2')}>View 2</li>
				<li onClick={() => changeView('view3')}>View 3</li>
			</ul>
		</nav>
	)
}

export default Nav;