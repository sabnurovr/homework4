import React, { useState } from 'react';


const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        email: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div className="registration-form-container">
            <h2>Регистрация пользователя</h2>
            <div className="form-group">
                <label htmlFor="fullName">ФИО</label>
                <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="phoneNumber">Номер телефона</label>
                <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email адрес</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <button className="submit-button">Зарегистрироваться</button>
            </div>
            <div className="display-data">
                <h3>Данные пользователя:</h3>
                <p>ФИО: {formData.fullName}</p>
                <p>Номер телефона: {formData.phoneNumber}</p>
                <p>Email: {formData.email}</p>
            </div>
        </div>
    );
};

export default RegistrationForm;
