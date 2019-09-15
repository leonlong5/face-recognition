import React from 'react';
import './Footer.css'
const Footer = ({ onInputChange, onSubmit, onDemoClick }) => {
    return (
        <footer>
            <ul>
                <li>Email: long.wang56@gmail.com</li>
                <li>Address: Union City, CA</li>
                <li>Linkedin: <a href='https://www.linkedin.com/in/long-wang/'>Linkedin Profile</a></li>
            </ul>
            <p>&copy; 2019 Long Wang</p>
        </footer>
    )
}

export default Footer