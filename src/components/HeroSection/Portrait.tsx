const Portrait = () => {
  return (
    <div className="aspect-square md:h-[380px] overflow-hidden rounded-full">
      <img
        src="/Portrait.png"
        alt="portrait"
        className="mx-auto object-cover profile-glow"
        width={394}
        height={576}
      />
    </div>
  );
};
export default Portrait;
