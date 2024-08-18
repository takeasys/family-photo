import type { MetaFunction } from "@remix-run/node";
import Gallery3 from "~/components/gallery3";

export const meta: MetaFunction = () => {
  return [
    { title: "Yeung Family!" },
    { name: "description", content: "Yeung family photos!" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans p-0">
      <div>
        {/* <Gallery1 /> */}
        {/* <Gallery2 /> */}
        <Gallery3 />
      </div>

      <div></div>
    </div>
  );
}
