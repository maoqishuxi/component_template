"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

export default function SidePanel() {
  return (
    <Card className="hidden bg-base-200 border-base-200 text-base-content">
      <CardHeader className="p-2 pt-0 md:p-4">
        <CardTitle>Create Music</CardTitle>
        <CardDescription>Create AI Music, enjoy your melody.</CardDescription>
      </CardHeader>
      <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
        <Button size="sm" className="w-full">
          Try Now
        </Button>
      </CardContent>
    </Card>
  );
}
