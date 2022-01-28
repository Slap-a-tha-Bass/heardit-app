import {
  serializeQuery,
  BASE_URL,
  HEARDIT_PATH,
  ALL_POSTS,
  SUFFIX,
  isEmpty,
} from "../../utils";

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      try {
        const query = req.query;
        let heardit = query.search;

        if (isEmpty(heardit)) {
          heardit = ALL_POSTS;
        }
        delete query.search;

        const response = await fetch(
          `${BASE_URL}${HEARDIT_PATH}${heardit}${SUFFIX}${serializeQuery(
            query
          )}`
        );
        const fetchResponse = await response.json();
        res.status(200).send(fetchResponse);
      } catch (error) {
        console.log(error);
        res.status(400);
      }

      break;
    default:
      res.send(404);
      break;
  }
};
