import { client } from "./client.js";

// const btn = document.getElementsByClassName("btn")[0];
// var time_on = 80000;
// var time_off = 120000;
// var cycle = 30;
// var yellow = 2;
// var t_x1 = 15;
// var t_x2 = 15;
// var t_x3 = 15;
// var t_x4 = 15;
// var t_x5 = 15;
// var t_x6 = 15;
// var t_x7 = 15;
// var t_x8 = 15;
// var t_s_x1 = 15;
// var t_s_x2 = 15;
// var t_s_x3 = 15;
// var t_s_x4 = 15;
// var t_s_x5 = 15;
// var t_s_x6 = 15;
// var t_s_x7 = 15;
// var t_s_x8 = 15;
// var t_db_x1 = 15;
// var t_db_x2 = 15;
// var t_db_x3 = 15;
// var t_db_x4 = 15;
// var t_db_x5 = 15;
// var t_db_x6 = 15;
// var t_db_x7 = 15;
// var t_db_x8 = 15;
// var t_db_s_x1 = 15;
// var t_db_s_x2 = 15;
// var t_db_s_x3 = 15;
// var t_db_s_x4 = 15;
// var t_db_s_x5 = 15;
// var t_db_s_x6 = 15;
// var t_db_s_x7 = 15;
// var t_db_s_x8 = 15;

const postUser = async (index_number) => {
  const { response } = await client.patch(`/type_A/${index_number}`, {
    time_on: time_on,
    time_off: time_off,
    cycle: cycle,
    yellow: yellow,
    green: [t_x1, t_x2, t_x3, t_x4, t_x5, t_x6, t_x7, t_x8],
    green_start: [
      t_s_x1,
      t_s_x2,
      t_s_x3,
      t_s_x4,
      t_s_x5,
      t_s_x6,
      t_s_x7,
      t_s_x8,
    ],
    green_person: [
      t_db_x1,
      t_db_x2,
      t_db_x3,
      t_db_x4,
      t_db_x5,
      t_db_x6,
      t_db_x7,
      t_db_x8,
    ],
    green_person_start: [
      t_db_s_x1,
      t_db_s_x2,
      t_db_s_x3,
      t_db_s_x4,
      t_db_s_x5,
      t_db_s_x6,
      t_db_s_x7,
      t_db_s_x8,
    ],
    // id: "1",
  });
  console.log(response);
};

btn.addEventListener("click", function () {
  postUser(2);
});
