import "./Header.css";

function Header() {
	return (
		<>
			<div class="container">
                <h2>Ini Header</h2>
                <nav>
                    <ul>
                        <li><a href="#">home</a></li>
                        <li><a href="#">about</a></li>
                        <li><a href="#">service</a></li>
                        <li><a href="#">contact</a></li>
                    </ul>
                </nav>
            </div>
		</>
	);
};

export default Header;
