import { rest } from "msw";

const baseURL = "/api";

export const handlers = [

  // MUST SET OWN VALUE BUT ITS NOT WORKING 
  
  // rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
  //   return res(
  //     ctx.json({
  //       pk: 2,
  //       username: "brian",
  //       email: "",
  //       first_name: "",
  //       last_name: "",
  //       profile_id: 2,
  //       profile_image:
  //         "https://res.cloudinary.com/dgjrrvdbl/image/upload/v1/media/../default_profile_qdjgyp",
  //     })
  //   );
  // }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];