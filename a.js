const posts = [
  { title: "post one", body: "this is post one" },
  { title: "post two", body: "this is post two" },
];

let lastActivityTime = new Date();

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

async function createPost(post) {
  return new Promise((resolve) => {
    setTimeout(() => {
      posts.push(post);
      resolve();
    }, 2000);
  });
}

async function updateLastUserActivityTime() {
  return new Promise((resolve) => {
    setTimeout(() => {
      lastActivityTime = new Date();
      resolve(lastActivityTime);
    }, 1000);
  });
}

async function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length > 0) {
        posts.pop();
        resolve();
      } else {
        reject("No posts to delete");
      }
    }, 1500);
  });
}

async function main() {
  try {
    await createPost({ title: "post three", body: "this is post three" });
    const lastActivity = await updateLastUserActivityTime();
    console.log("All posts:", posts);
    console.log("Last Activity Time:", lastActivity);
    await deletePost();
    console.log("Post deleted");
    console.log("Remaining posts:", posts);
  } catch (err) {
    console.log(err);
  }
}

main();
