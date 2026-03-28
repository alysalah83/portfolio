import { ProjectDetailView } from "@/components/project/ProjectDetailView";
import { Metadata } from "next";

export function generateStaticParams() {
  return [
    { project: "clickup" },
    { project: "digitalShop" },
    { project: "printHouse" },
    { project: "findMyShow" },
    { project: "mathDual" },
  ];
}

export const meta: Metadata = {
  title: "AlySalah | Project",
};

export default async function Page({
  params,
}: {
  params: Promise<{ project: string }>;
}) {
  const { project } = await params;
  return (
    <div className="font-sans">
      <ProjectDetailView projectName={project} />
    </div>
  );
}
