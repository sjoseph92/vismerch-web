import { getLocation } from "@/actions/locations";
import LocationDetailsLayout from "@/components/layouts/LocationDetailsLayout";
import { LocationDetailsLayoutType } from "@/types/layouts";

const Layout = async ({ params, tabs }: LocationDetailsLayoutType) => {
  const location = await getLocation(params.id);

  return (
    <LocationDetailsLayout location={location}>
      {tabs}
    </LocationDetailsLayout>
  );
};

export default Layout;
