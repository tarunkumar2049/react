import { useState } from "react";

export default function Section5() {
  const [val, setVal] = useState(0);

  return (
    <div className="px-40 py-30 bg-[#f6fafe]">
      <div>
        <h1 className="pb-10 text-3xl font-semibold">
          Revolutionizing Clinical Workflows
        </h1>
      </div>
      <div>
        <div
          className="border-b border-gray-300 py-8 hover:cursor-pointer "
          onClick={() => {
            val == 1 ? setVal(0) : setVal(1);
          }}
        >
          <h1 className="text-2xl font-semibold">Future-Proof Scalability</h1>
          <div
            className={`${val == 1 ? "flex " : "hidden"} flex-col gap-2 my-5 w-230`}
          >
            <p>
              ITdose architecture is built for the enterprise, supporting
              everything from single clinics to multi-national hospital chains
              with thousands of concurrent users. Our distributed cloud-native
              infrastructure ensures that as your patient volume grows, your
              system performance remains consistent.
            </p>
            <p>
              Our microservices-based approach allows individual modules like
              Pharmacy or Lab to scale independently during peak hours, ensuring
              critical clinical operations never experience latency. This level
              of technical robustness is why premier healthcare institutions
              choose ITdose for their digital foundation.
            </p>
          </div>
        </div>
        <div
          className="border-b border-gray-300 py-8 hover:cursor-pointer"
          onClick={() => {
            val == 2 ? setVal(0) : setVal(2);
          }}
        >
          <h1 className="text-2xl font-semibold">
            Uncompromising Security (HIPAA)
          </h1>
          <div
            className={`${val == 2 ? "flex " : "hidden"} flex-col my-5 w-230`}
          >
            <p>
              Patient data is sacred. ITdose implements military-grade
              encryption for data at rest and in transit. We are fully HIPAA and
              GDPR compliant, with granular role-based access controls that
              ensure only authorized personnel can view sensitive medical
              information. Every action is logged in our immutable audit trail
              for complete accountability.
            </p>
          </div>
        </div>
        <div
          className="border-b border-gray-300 py-8 hover:cursor-pointer"
          onClick={() => {
            val == 3 ? setVal(0) : setVal(3);
          }}
        >
          <h1 className="text-2xl font-semibold">
            Global Compliance Standards
          </h1>
          <div
            className={`${val == 3 ? "flex " : "hidden"} flex-col gap-2 my-5 w-230`}
          >
            <p>
              Operating across multiple jurisdictions requires a system that
              understands local regulations. ITdose stays ahead of the curve
              with pre-configured compliance engines for insurance (HL7, FHIR),
              tax laws, and healthcare reporting requirements across 20+
              countries. We handle the complexity of regulations so you can
              focus on saving lives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
