export interface Image {
  id: number;
  alt_description: string;

  urls: {
    small: string;
    regular: string;
  };
}

export interface CurrentImage {
  url: string;
  alt: string;
}
