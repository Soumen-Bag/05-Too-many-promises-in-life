const posts=[];
let lastUserActivity;

function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            resolve(post)
        },1000);
    });
}

function updateLastUserActivityTime(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            lastUserActivity=new Date().toLocaleString();
            resolve(lastUserActivity);
        },1000);
    });
}

function deletePost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(posts.length > 0){
               const deleteItem= posts.pop();
               resolve(deleteItem);
            }
            else {
                reject("ERROR: ARRAY IS EMPTY");
              }
        },1000);
    });
}

createPost({ title: 'Post One' })
  .then(() => updateLastUserActivityTime())
  .then((updatedTime) => {
    console.log('User Last Activity Time:', updatedTime);
    console.log('All Posts:', posts);
  })
  .then(() => createPost({ title: 'Post Two' }))
  .then(() => updateLastUserActivityTime())
  .then((updatedTime) => {
    console.log('User Last Activity Time:', updatedTime);
    console.log('All Posts:', posts);
  })
  .then(() => deletePost())
  .then((deletedPost) => {
    console.log('Deleted Post:', deletedPost);
    console.log('Remaining Posts:', posts);
  })
  .catch((error) => console.error(error));