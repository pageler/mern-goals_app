import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa"; // fa font-awesome.
import { Link } from "react-router-dom";

type HeaderProps = {};

export const Header = (props: HeaderProps) => {
    return (
        <>
            <header className="header">
                <div className="logo">
                    <Link to="/">Goal Setter</Link>
                </div>

                <ul>
                    <li>
                        <Link to="/login">
                            <FaSignInAlt /> Login
                        </Link>
                    </li>
                    <li>
                        <Link to="/register">
                            <FaUser /> Register
                        </Link>
                    </li>
                </ul>
            </header>
        </>
    );
};
