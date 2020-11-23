import React from 'react'

const Layout = (props) =>
{
	return (
		<>
			<div>
				ToolBar, SideDrawer
			</div>

			<main>
				{props.children}
			</main>
		</>
	)
}

export default Layout;