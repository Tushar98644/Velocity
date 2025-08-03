'use client'

import { authClient } from "@/lib/auth.client";
import { useRouter } from "next/navigation";

const DashboardPage = () => {
    const router = useRouter();
    return (
        <main>
            <h1>Dashboard</h1>
            <button onClick={async () => {
                await authClient.signOut({
                    fetchOptions: {
                        onSuccess: () => {
                            router.push("/");
                        }
                    }
                });
            }}>
                Sign Out
            </button>
        </main>
    );
}

export default DashboardPage;