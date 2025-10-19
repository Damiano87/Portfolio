const Portrait = () => {
  return (
    <div className="aspect-square md:h-[380px] overflow-hidden rounded-full">
      <picture>
        <source srcSet="/Portrait.webp" media="(orientation: portrait)" />
        <img
          src="/Portrait.png"
          alt="portrait"
          className="mx-auto object-cover profile-glow"
          width={394}
          height={576}
        />
      </picture>
    </div>
  );
};
export default Portrait;
