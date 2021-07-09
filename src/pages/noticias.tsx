import { createApi } from "../../test/api.test";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { Filters } from "../components/NewsComponents/Filters";
import { News } from "../components/NewsComponents/News";
import { NewsIntro } from "../components/NewsComponents/NewsIntro";

import { Flex } from "@chakra-ui/react"

export default function Noticias() {
  createApi();
  return (
    <Flex direction="column">
      <Breadcrumbs />
      <NewsIntro />
      <Filters />
      <News />
    </Flex>
  )
}
