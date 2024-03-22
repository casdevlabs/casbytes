import { Input } from "~/components/ui/input";

export function SearchInput() {
  return (
    <Input
      placeholder="search courses"
      id="search"
      name="search"
      className="mb-4"
    />
  );
}
