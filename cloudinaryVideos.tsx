// cloudinaryVideos.ts

export const CLOUD_NAME: string = "ddacq5ltb";
export const PLAYER_PROFILE: string = "cld-default";

// Individual video IDs
export const VIDEO_1: string = "1_htmgjk";
export const VIDEO_LISA_3: string = "lisa3_uhncyg";
export const VIDEO_LISA_2: string = "lisa2_ny6yaw";
export const VIDEO_5: string = "5_owv676";
export const VIDEO_LISA_4: string = "lisa4_pvv5up";
export const VIDEO_3: string = "3_ki4ock";
export const VIDEO_LISA_5: string = "lisa5_cttek4";
export const VIDEO_2: string = "2_htyotl";
export const VIDEO_LISA_1: string = "lisa1_y7qlnl";
export const VIDEO_4: string = "4_sozphq";

// Grouped list (useful for loops)
export const VIDEOS: string[] = [
  VIDEO_1,
  VIDEO_LISA_3,
  VIDEO_LISA_2,
  VIDEO_5,
  VIDEO_LISA_4,
  VIDEO_3,
  VIDEO_LISA_5,
  VIDEO_2,
  VIDEO_LISA_1,
  VIDEO_4,
];

// Helper: build a direct MP4 URL
export const getMp4Url = (publicId: string): string => {
  return `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/${publicId}.mp4`;
};

// Helper: build an optimized MP4 URL
export const getOptimizedMp4Url = (publicId: string): string => {
  return `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/f_mp4,q_auto/${publicId}`;
};
