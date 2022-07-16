import Image from "next/image";
import LaptopImg from "../assets/images/laptop.png";

interface PropsInterface {
  icon: any;
  title: string;
  info: string;
  hasButton?: boolean;
}

function ServiceCard({icon, title, info, hasButton}: PropsInterface) {
  return (
    <article className="service-card">
      <Image src={icon} alt="" className="icon" width={80} height={80} />
      <h3 className="service-card-title">{title}</h3>
      <p>{info}</p>
      {hasButton && <button className="btn btn--outline">Read More</button>}
    </article>
  );
}

export default ServiceCard;
