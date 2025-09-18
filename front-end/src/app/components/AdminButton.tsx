"use client";
import Link from "next/link";

export function AdminButton() {
    return (
        <div className="p-10">
            <Link href="/login">
                <button
                    className="flex bg-blue-500 text-white px-4 py-2 rounded mx-auto hover:bg-blue-700 cursor-pointer">
                    Admin
                </button>
            </Link>
        </div>
    )
}