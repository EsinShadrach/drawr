"use client";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function EventsPage() {
	useEffect(() => {
		redirect("events/ongoing");
	}, []);

	return <div className="">Redirecting</div>;
}
