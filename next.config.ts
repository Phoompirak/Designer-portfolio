import fs from 'fs-extra';
import path from 'path';
import sharp from 'sharp';

/** @type {import('next').NextConfig} */

const designerDir = path.join(__dirname, 'public', 'designer');

// อ่านไฟล์ภาพทั้งหมดจากโฟลเดอร์ designer และดึงขนาดภาพ
async function getDesignerImages(designerDir: string) {
  const files = fs.readdirSync(designerDir)
    .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file));

  const images = await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(designerDir, file);
      const metadata = await sharp(filePath).metadata();
      return {
        file,
        width: metadata.width ?? 0,
        height: metadata.height ?? 0 };
    })
  );

  return images;
}

const shortDir = path.join(__dirname, 'public', 'short');
async function getShort() {
  if (!fs.existsSync(shortDir)) {
    return [];
  }
  const files = fs.readdirSync(shortDir);
  const fileteredFiles = files.filter(file => /\.(mp4)$/i.test(file));

  if (fileteredFiles.length === 0) {
    return [];
  }
  return fileteredFiles;
}

export default (async () => {
  const designerImages = await getDesignerImages(designerDir);
  const shortPath = await getShort();

  /** @type {import('next').NextConfig} */
  const nextConfig = {
    // ทำให้สามารถ export เป็น static site ได้
    // output: 'export',
    
    images: {
      unoptimized: true, // ปิดการ optimize รูปภาพเพื่อรองรับ static export
    },
    env: {
      DESIGNER_IMAGES: JSON.stringify(designerImages), // เก็บรายการไฟล์เป็น environment variable
      SHORT_PATH: JSON.stringify(shortPath),
    },
  };

  return nextConfig;
})();