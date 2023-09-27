"use client";

import Link from "next/link";
import { ArticleData } from "../types";
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, useColorModeValue } from './chakra-ui';

interface Props {
  article: ArticleData;
}

export default function ArticleCard(props: Props) {
  const { article } = props;
  const bgColor = useColorModeValue("gray.100", "brand.dark1");
  
  return (
    <Card
      as="li"
      minW="100%"
      _hover={{ bowShadow: "xl" }}
      variant="outline"
      size="sm"
      style={{ padding: "0.7em" }}
      bg={bgColor}
    >
      <Link href={`./articles/${article.id}`}>
        <CardHeader>
          <Heading size="md">{article.title}</Heading>
        </CardHeader>
        <CardBody>
          <Text>{article.description ?? "-"}</Text>
        </CardBody>
        <CardFooter>
          <Text fontSize="sm" color="gray.500">{article.date}</Text>
        </CardFooter>
      </Link>
    </Card>
  )
}