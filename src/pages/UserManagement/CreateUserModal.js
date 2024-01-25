import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Role } from "../../shared/constant";
import { useState } from "react";
import { toast } from "react-toastify";
import { register } from "../../apis/user.api";

const initFormState = {
    fullName: "",
    email: "",
    phone: "",
    password: "",
    role: Role.TestManager,
};

export const CreateUserModal = ({ show, onHide }) => {
    const [formState, setFormState] = useState(initFormState);

    const handleSave = async () => {
        formState.roles = [formState.role];
        try {
            await register(formState);
            toast.success("Create user successfully");
        } catch (error) {
            toast.error(error);
        }
    };
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <span className="fw-bold fs-4">Create new User</span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <div className="mb-3">
                        <label htmlFor="fullName" className="form-label">
                            Full name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="fullName"
                            value={formState.fullName}
                            onChange={(e) =>
                                setFormState({
                                    ...formState,
                                    fullName: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={formState.email}
                            onChange={(e) =>
                                setFormState({
                                    ...formState,
                                    email: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">
                            Phone
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="phone"
                            value={formState.phone}
                            onChange={(e) =>
                                setFormState({
                                    ...formState,
                                    phone: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            value={formState.password}
                            onChange={(e) =>
                                setFormState({
                                    ...formState,
                                    password: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="role" className="form-label">
                            Role
                        </label>
                        <select
                            className="form-select"
                            id="role"
                            value={formState.role}
                            onChange={(e) =>
                                setFormState({
                                    ...formState,
                                    role: e.target.value,
                                })
                            }
                        >
                            <option value={Role.Admin}>{Role.Admin}</option>
                            <option value={Role.TestManager}>
                                {Role.TestManager}
                            </option>
                        </select>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => handleSave()}>Save</Button>
            </Modal.Footer>
        </Modal>
    );
};
