import { client } from "./client.js";

const render = (posts) => {
  const stripHtmlTag = (html) => html.replace(/<[^>]*>?/gm, "");
  const postEl = document.querySelector(".posts");
  postEl.innerHTML = `
  <div class="row g-3">
  ${posts
    .map(
      ({ title, excerpt }) => `<div class="col-6 col-lg-4">
  <div class="border py-3">
    <h2>
      <a href="#" class="text-decoration-none">${stripHtmlTag(title)}</a>
    </h2>
    <p>
      ${stripHtmlTag(excerpt)}
    </p>
  </div>
</div>`
    )
    .join("")}
</div>`;
};

const getPosts = async (query = {}) => {
  // Chuyển object query => query string
  const queryString = new URLSearchParams(query).toString();
  const { data: posts } = await client.get(`/posts?${queryString}`);
  //   const { data: users } = await client.get(`/users`);

  //   console.log(posts);
  //   console.log(users);
  render(posts);
};

// getPosts({
//   _sort: "id",
//   _order: "desc",
// });

const query = {
  _sort: "id",
  _order: "desc",
};

getPosts(query);

// const postUser = async () => {
//   const { response } = await client.post(`/users`, {
//     name: "manh tien",
//     email: "ngocdiem210916@gmail.com",
//   });
//   console.log(response);
// };

// postUser();

// Tính năng search form

const searchForm = document.querySelector(".search");
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const keywordEl = e.target.querySelector(".keyword");
  const keyword = keywordEl.value;

  query.q = keyword;
  getPosts(query);

  keywordEl.value = "";
});

// Tính năng sắp xếp mới nhất và cũ nhất bằng id

const sortByEl = document.querySelector(".sort-by");

sortByEl.addEventListener("change", (e) => {
  const order = e.target.value;
  console.log(order);

  query._order = order;

  getPosts(query);
});
