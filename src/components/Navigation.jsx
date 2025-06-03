import React from 'react';
import { Link } from 'react-router-dom';

function Navigation({ lang = false }) {
    return (
        <>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/features">Features</Link>
                    </li>
                    <li>
                        <Link href="/pricing">
                            Pricing
                        </Link>
                    </li>
                    <li>
                        <Link to="/help">Help</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                </ul>
        </>
    );
}

export default Navigation;
