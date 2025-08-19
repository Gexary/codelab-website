const BASE_URL = "/codelab-website";

export default function Image<T extends HTMLImageElement>(props: React.DetailedHTMLProps<React.ImgHTMLAttributes<T>, T>) {
  return <img {...props} src={`${BASE_URL}${props.src}`} />;
}
