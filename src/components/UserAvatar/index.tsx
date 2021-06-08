import md5 from "md5";

export type IProps = {
  hash: string;
  size?: number;
};

export default function UserAvatar({ hash, size }: IProps) {
  return (
    <img
      src={`https://www.gravatar.com/avatar/${md5(hash)}?d=retro&s=${
        size || 32
      }`}
      width={size || 32}
      height={size || 32}
      alt={hash}
    />
  );
}
