import Link from "next/link";
import React from "react";

const CustomFooter = () => {
    return (
        <footer className="border-t mt-auto custom-footer">
            <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5">
                <Link href='/'>
                    Home
                </Link>
                <p>2024 Eventer. All Rights Reserved</p>
            </div>  
        </footer>
    );
}

export default CustomFooter;
