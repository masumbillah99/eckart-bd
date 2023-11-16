"use client";

import slider1 from "@/assets/slider/slider1.jpg";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { IoIosArrowForward } from "react-icons/io";
import React from "react";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<IoIosArrowForward sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const AboutPage = (props) => {
  const faqs = [
    {
      id: 1,
      question: "What is HatBazar??",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid est, quo culpa, veritatis exercitationem quidem incidunt, explicabo ipsum adipisci praesentium magnam eum eos quae odit. Nobis eos necessitatibus aliquid dignissimos!",
    },
    {
      id: 2,
      question: "How do I book a vacation rental on HatBazar?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid est, quo culpa, veritatis exercitationem quidem incidunt, explicabo ipsum adipisci praesentium magnam eum eos quae odit. Nobis eos necessitatibus aliquid dignissimos!",
    },
    {
      id: 3,
      question: "Are the vacation rentals safe and secure?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid est, quo culpa, veritatis exercitationem quidem incidunt, explicabo ipsum adipisci praesentium magnam eum eos quae odit. Nobis eos necessitatibus aliquid dignissimos!",
    },
    {
      id: 4,
      question: "Can I customize my travel itinerary on HatBazar?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid est, quo culpa, veritatis exercitationem quidem incidunt, explicabo ipsum adipisci praesentium magnam eum eos quae odit. Nobis eos necessitatibus aliquid dignissimos!",
    },
    {
      id: 5,
      question: "Does HatBazar offer eco-friendly travel options?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid est, quo culpa, veritatis exercitationem quidem incidunt, explicabo ipsum adipisci praesentium magnam eum eos quae odit. Nobis eos necessitatibus aliquid dignissimos!",
    },
    {
      id: 6,
      question: "Can I list my property on HatBazar for rental?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid est, quo culpa, veritatis exercitationem quidem incidunt, explicabo ipsum adipisci praesentium magnam eum eos quae odit. Nobis eos necessitatibus aliquid dignissimos!",
    },
    {
      id: 7,
      question: "What payment methods are accepted on HatBazar?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid est, quo culpa, veritatis exercitationem quidem incidunt, explicabo ipsum adipisci praesentium magnam eum eos quae odit. Nobis eos necessitatibus aliquid dignissimos!",
    },
  ];
  const [expanded, setExpanded] = React.useState("panel1");
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <section className="my-1">
      <div
        className={`hero h-[600px]`}
        style={{ backgroundImage: `url(${slider1?.src})` }}
      >
        <div className="hero-overlay bg-opacity-30"></div>
      </div>

      <div className="max-w-screen-xl lg:mx-auto my-10 mx-2 md:mx-10">
        <h1 className="text-2xl font-bold pb-3">About HatBazar /&gt;</h1>
        <p className="leading-8">
          HatBazar is a vibrant and stylish e-commerce platform that caters to
          hat enthusiasts around the world. Offering a diverse range of hats for
          men, women, and sports enthusiasts, HatBazar provides a seamless
          shopping experience. Users can explore an extensive collection of
          high-quality hats, from classic styles to trendy designs, all
          accompanied by detailed product descriptions and imagery. The site
          features a user-friendly interface with easy navigation, allowing
          customers to effortlessly browse through categories, add items to
          their carts, and complete secure transactions. HatBazar prioritizes
          customer satisfaction by incorporating user reviews, efficient
          customer support channels, and a responsive design that ensures a
          pleasant shopping experience across various devices. With regular
          promotions, discounts, and a commitment to the latest fashion trends,
          HatBazar aims to be the go-to destination for hat aficionados seeking
          both style and functionality.
        </p>

        <div className="my-10">
          <h1 className="text-2xl font-bold pb-3">Our Vision /&gt;</h1>
          <p className="leading-8">
            The vision of HatBazar extends beyond being a mere online store; we
            envision creating a global community and lifestyle brand for hat
            lovers. Our aspiration is to foster a space where individuals can
            find inspiration, connect with like-minded enthusiasts, and explore
            the world of headwear fashion. With a commitment to staying at the
            forefront of trends, we seek to embody innovation and individuality.
            HatBazar aims to be synonymous with quality, trendsetting designs,
            and a passion for hats, creating a lasting impact in the fashion
            industry and leaving an imprint on the diverse and ever-evolving
            world of headwear.
          </p>
        </div>

        <div className="my-5">
          <h1 className="text-2xl font-bold pb-3">Our Goal /&gt;</h1>
          <p className="leading-8">
            HatBazar&apos;s primary goal is to establish itself as the leading
            online marketplace for hat enthusiasts. We aim to provide a
            comprehensive and diverse collection of high-quality hats, ranging
            from classic styles to the latest trends, catering to a broad
            audience with varying tastes. Our commitment is to offer a seamless
            and enjoyable shopping experience, emphasizing user-friendly
            navigation, secure transactions, and exceptional customer service.
            By setting the bar for hat-focused e-commerce, HatBazar strives to
            be the go-to destination for individuals seeking both style and
            functionality in their headwear choices.
          </p>
        </div>

        <div className="my-14">
          <h1 className="text-2xl font-bold">Why Choose HatBazar /&gt;</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-5 items-center">
            <div className="">
              <Image
                className="mx-auto"
                src="https://img.freepik.com/free-vector/faqs-concept-illustration_114360-5215.jpg?size=626&ext=jpg"
                width={300}
                height={300}
                alt="faq image"
              />
            </div>
            <div>
              {faqs.map((item) => (
                <Accordion
                  expanded={expanded === `panel${item.id}`}
                  onChange={handleChange(`panel${item.id}`)}
                  key={item.id}
                >
                  <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                  >
                    <Typography>{item.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails className="">
                    <Typography>{item.answer}</Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
