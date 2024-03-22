import hp from "~/assets/hp.svg";
import aws from "~/assets/aws.png";
import intel from "~/assets/intel.svg";
import paypal from "~/assets/paypal.png";
import gatsby from "~/assets/gatsby.png";
import marketo from "~/assets/marketo.svg";
import linkedin from "~/assets/linkedin.svg";
import atlassian from "~/assets/atlassian.png";
import digitalocean from "~/assets/digitalocean.svg";
import { Container } from "../container";

export function Partnerships() {
  return (
    <Container className="bg-white">
      <div className="max-3xl mx-auto my-12">
        <h2 className="text-blue-600 mb-12 text-3xl text-center">
          <span className="text-black">Pathway to Success:</span> Our Proud
          Partners And Employers
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mx-auto place-items-center">
          {partners.map((partner, index) => (
            <div key={`partner-${index}`}>
              <img
                src={partner}
                alt="partner"
                width={150}
                className="w-[150px] h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

const partners = [
  atlassian,
  marketo,
  digitalocean,
  gatsby,
  hp,
  intel,
  linkedin,
  aws,
  paypal,
];
