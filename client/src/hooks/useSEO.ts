import { useEffect } from "react";

const SITE_NAME = "Texas Hole Makers";

export function useSEO({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  useEffect(() => {
    document.title = `${title} | ${SITE_NAME}`;

    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (meta) {
        meta.setAttribute("content", description);
      }
    }

    return () => {
      document.title = `${SITE_NAME} — Texas-Tough Unibor SITEH3RO & Magnetic Drills`;
    };
  }, [title, description]);
}
