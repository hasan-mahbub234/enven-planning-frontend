export const getImagePath = (filename: string): string => {
  // Check if optimized version exists
  const basePath = "/images/optimized";
  const extension = filename.split(".").pop()?.toLowerCase();

  // Convert jfif to jpg for better compatibility
  if (extension === "jfif") {
    return `${basePath}/${filename.replace(".jfif", ".webp")}`;
  }

  // Prefer webp if available
  const webpPath = `${basePath}/${filename.replace(/\.[^/.]+$/, ".webp")}`;
  return webpPath;
};

export const blurDataURL =
  "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAGAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAbEAADAAMBAQAAAAAAAAAAAAABAgMABAURUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAwDAQACEQMRAD8Anz9voy1dCI2mectSE5ioFCqia+KCwJ8HzGMZPqJb1oPEf//Z";
