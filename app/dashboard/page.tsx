import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <CardTitle>Dashboard</CardTitle>
          <CardDescription>You successfully navigated to the dashboard.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-slate-600">
            This placeholder screen confirms that the mock authentication flow redirects to
            the dashboard route.
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
