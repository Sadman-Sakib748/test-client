"use client";

import LogoutButton from "@/components/Dashboard/LogoutButton";
import { useEffect } from "react";

const Dashboard = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  return (
    <section>
      <div className="mb-10 text-center">
        <h1 className="text-primary text-4xl font-bold">
          Welcome To Your Dashboard
        </h1>
        <p className="mt-2">
          Get a quick overview of your website and manage everything easily from
          here!
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 xxl:grid-cols-5 gap-10">
        This is Admin Dashboard
        <LogoutButton />
      </div>
    </section>
  );
};

export default Dashboard;
