import { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";

type LoginProps = {};

export const Login = (props: LoginProps) => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const { email, password } = formData;

    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.currentTarget.name]: e.currentTarget.value,
        }));
    };

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <>
            <section className="heading">
                <h1>
                    <FaSignInAlt /> Login
                </h1>
                <p>Please login to set goals.</p>
            </section>

            <section className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={email}
                            placeholder="Enter your email"
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            value={password}
                            placeholder="Enter your password"
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-block">
                            Submit
                        </button>
                    </div>
                </form>
            </section>
        </>
    );
};
