import { Link } from "lucide-react";
import React from "react";

const Header = () => {
    return (
        <header className="w-full border-b">
            <div className="wrapper flex items-center justify-between">
                <Link href="/" className="w-36">
                    {/* Add your link content here */}
                </Link>
                <div className="flex w-32 justify-end gap-3">
                    {/* Add your additional content here */}
                </div>
            </div>
        </header>
    );
};

export default Header;