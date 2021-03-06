import React from "react";

import Card, { CardBody, CardMedia, CardMediaDescription } from "./Card";
import Section from "../section/Section";
import Heading from "../heading/Heading";
import Button from "../button/Button";

import PlaceholderImg from "../../stories/assets/card-placeholder.jpg";

export default {
  title: "Components/Card",
  component: Card,
  subcomponents: { CardBody, CardMedia, CardMediaDescription },
};

export const usage = () => (
  <Section inverse>
    <Card>
      <CardBody>
        <Heading>
          <h6>Title</h6>
        </Heading>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
        <div>
          <Button color="primary" variant="link">
            Saiba Mais
          </Button>
        </div>
      </CardBody>
    </Card>
  </Section>
);

export const withMedia = () => (
  <Section inverse>
    <Card>
      <CardMedia image={PlaceholderImg} />
      <CardBody>
        <Heading>
          <h6>Title</h6>
        </Heading>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
        <div>
          <Button color="primary" variant="link">
            Saiba Mais
          </Button>
        </div>
      </CardBody>
    </Card>
  </Section>
);

export const onlyMedia = () => (
  <Section inverse>
    <Card>
      <CardMedia image={PlaceholderImg}>
        <CardMediaDescription>
          <h5>Descrição da imagem</h5>
        </CardMediaDescription>
      </CardMedia>
    </Card>
  </Section>
);
