const domainFromUrl = (url?: string) =>
  url?.replace("http://", "").replace("https://", "").split(/[/?#]/)[0];

const urlBuilder = (url?: string) => {
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (!url) return "/placeholder.png";

  if (
    domainFromUrl(url) !== domainFromUrl(process.env.IMAGE_URL) &&
    domainFromUrl(url) != null
  ) {
    return url;
  }

  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  return `${process.env.IMAGE_URL}${url}`;
};

// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
const breakString = (string: string) => (string || "").replaceAll("\\n", "\n");

export { urlBuilder, breakString };
