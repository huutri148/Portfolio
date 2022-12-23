interface IImageFormats {
  id?: number;
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path?: string | null;
  url: string;
}

interface IImage extends IImageFormats {
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats?: TypeImage | null;
  previewUrl?: string | null;
  provider: string;
  provider_metadata: string | null;
  createdAt: string;
  updatedAt: string;
}
