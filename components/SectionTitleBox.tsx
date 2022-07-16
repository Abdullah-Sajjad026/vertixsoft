interface PropsInterface {
  supTitle?: string;
  title: string;
  titleSpan?: string;
  subTitle?: string;
}
const SectionTitleBox = ({
  supTitle,
  title,
  titleSpan,
  subTitle,
}: PropsInterface) => {
  return (
    <div className="section-title-box">
      {supTitle && (
        <span className="section-suptitle">{supTitle?.toUpperCase()}</span>
      )}
      <h2 className="section-title">
        {title} <span>{titleSpan}</span>
      </h2>
      <p className="section-subtitle">{subTitle}</p>
    </div>
  );
};

export default SectionTitleBox;
