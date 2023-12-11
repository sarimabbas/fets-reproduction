import { createRouter, Response } from "fets";

export const router = createRouter({
  swaggerUI: {
    endpoint: "/v1/docs",
  },
  openAPI: {
    endpoint: "/v1/openapi.json",
  },
  fetchAPI: {
    Response: globalThis.Response,
  },
}).route({
  method: "GET",
  path: "/v1",
  schemas: {
    responses: {
      200: {
        type: "object",
        properties: {
          message: {
            type: "string",
          },
        },
        required: ["message"],
        additionalProperties: false,
      },
    },
  },
  handler: () => Response.json({ message: "Hello World!" }),
});
