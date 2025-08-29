import { useEffect, useState } from "react";

export function importImages(folderPath: string = "coffee") {
  let images = {};

  switch (folderPath) {
    case "coffee":
      images = import.meta.glob("/src/assets/coffee/*.(png|jpg|jpeg)", {
        eager: true,
        query: "?url",
        import: "default",
      });
      break;
    case "promo":
      images = import.meta.glob("/src/assets/promo/*.(png|jpg|jpeg)", {
        eager: true,
        query: "?url",
        import: "default",
      });
      break;
  }

  return Object.values(images) as string[];
}

export function useImages(folderPath?: string) {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const loadImgs = importImages(folderPath);
    setImages(loadImgs);
  }, [folderPath]);

  return images;
}
