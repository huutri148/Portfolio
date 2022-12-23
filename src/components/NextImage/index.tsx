// libs
import type { ImageProps } from "next/image";
import Image from "next/image";
import classNames from "classnames";
// components
import Overlay from "@/components/Overlay";
// others
import { urlBuilder } from "@/utils";
import styles from "./styles.module.scss";

type TNextImage = Partial<ImageProps> & {
  wrapperClassName?: string;
  image?: IImage;
  hasOverlay?: boolean;
};

const NextImage = ({
  image,
  wrapperClassName,
  hasOverlay = false,
  ...props
}: TNextImage) => {
  const { url, alternativeText, formats } = image ?? {};
  // TODO: optimize image base on formats
  // const { small, medium, thumbnail, large } = formats || {};
  // const loadSize = thumbnail || small || medium || large;
  // const [newUrl, setNewUrl] = useState(loadSize?.url || url);

  return (
    <div className={classNames(styles["next-image-wrapper"], wrapperClassName)}>
      {hasOverlay && <Overlay active />}
      <Image
        src={urlBuilder(url)}
        alt={alternativeText ?? ""}
        placeholder="blur"
        blurDataURL={urlBuilder(formats?.thumbnail?.url)}
        {...props}
      />
    </div>
  );
};

export default NextImage;
