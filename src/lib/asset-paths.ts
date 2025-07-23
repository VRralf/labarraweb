/**
 * Asset path helper for GitHub Pages deployment
 * Handles basePath prefix for production builds
 */

const basePath = process.env.NODE_ENV === 'production' ? '/labarraweb' : '';

export function getAssetPath(path: string): string {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${basePath}/${cleanPath}`;
}

export function getImagePath(imagePath: string): string {
  return getAssetPath(imagePath);
}

export function getVideoPath(videoPath: string): string {
  return getAssetPath(videoPath);
}
