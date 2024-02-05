import { useState } from "react";
import { FaUser } from "react-icons/fa";

type RegisterProps = {};

export const Register = (props: RegisterProps) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        passwordConfirm: "",
    });

    const { name, email, password, passwordConfirm } = formData;

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
                    <FaUser /> Register
                </h1>
                <p>Please create an account.</p>
            </section>

            <section className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={name}
                            placeholder="Enter your name"
                            onChange={onChange}
                        />
                    </div>
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
                        <input
                            type="passwordConfirm"
                            className="form-control"
                            id="passwordConfirm"
                            name="passwordConfirm"
                            value={passwordConfirm}
                            placeholder="Confirm your password"
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
