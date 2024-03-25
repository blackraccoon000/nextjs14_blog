"use server";

import {data} from "@/constants";

export const create = async () => {
  data.push({
    name: `name_${data.length + 1}`,
    text: `create${data.length + 1}`,
  });
};
