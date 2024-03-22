import { BackButton } from "~/components/back-button";
import { Container } from "~/components/container";
import { PageTitle } from "~/components/page-title";
import { Modules } from "~/components/e-components/modules";
import { CourseSideContent } from "~/components/e-components";
import { SheetContent } from "~/components/ui/sheet";

export default function CoursesRoute() {
  return (
    <Container className="max-w-3xl lg:max-w-6xl mt-6">
      <BackButton to="/dashboard" buttonText="dashboard" />
      <PageTitle
        title="introduction to software engineering"
        className="mb-12"
      />
      <div className="lg:grid lg:grid-cols lg:grid-cols-5 gap-6">
        <Modules />

        {/* mobile screens */}
        <SheetContent className="lg:hidden overflow-y-auto w-full sm:w-auto">
          <CourseSideContent />
        </SheetContent>

        {/* large screens */}
        <aside className="hidden lg:block col-span-2 border bg-slate-200/70 overflow-y-auto h-screen">
          <CourseSideContent />
        </aside>
      </div>
    </Container>
  );
}
