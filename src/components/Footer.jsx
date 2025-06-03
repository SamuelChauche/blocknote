import React from "react";

function Footer() {
    return (
        <footer className="app-footer">
            <span>© {new Date().getFullYear()} MyNotes. Made with ❤️ for training.</span>
        </footer>
    );
}

export default Footer;
