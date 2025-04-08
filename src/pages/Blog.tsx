import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import SkeletonUsage from "../components/skeleton-usage";
export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Blog</h1>
        </div>
        <div className="flex min-h-screen items-center justify-center p-6">
      <SkeletonUsage />
    </div>
      </section>
    </DefaultLayout>
  );
}
