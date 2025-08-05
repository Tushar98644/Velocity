"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useSession } from "@/lib/auth.client";

export const AuthProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const { isPending, data: session } = useSession();
    console.log(isPending);
    console.log(session);
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        if (!isPending && session) {
            if (pathname === "/login") {
                router.push("/app/dashboard");
            }
        } else if (!isPending && !session) {
            if (pathname !== "/login") {
                router.push("/login");
            }
        }

    }, [isPending, pathname, router, session]);

    if (isPending) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
            </div>
        );
    }

    return <>{children}</>;
}