import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import data from "../../projectsData";

export default function Project() {
  const router = useRouter();
  const { projectSlug: slug } = router.query;
  const [project, setProject] = useState(null);

  let projectKeys = Object.keys(data);

  useEffect(() => {
    if (!router.isReady) return;
    projectKeys.map((item) => {
      if (data[item].slug == slug) {
        setProject(data[item]);
      }
    });
  }, [slug, router.isReady, projectKeys]);

  if (!project) {
    return <p>404 Error... Item not found</p>;
  }

  return (
    <div className="w-full h-full bg-new-lightpurple">
      <p>just some more words, this is the slug {`${slug}`}</p>
    </div>
  );
}
